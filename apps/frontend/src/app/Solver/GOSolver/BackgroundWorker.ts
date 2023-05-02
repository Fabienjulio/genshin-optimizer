import type { MessageData, WorkerCommand, WorkerResult } from '..'
import type { WorkerRecvMessage, WorkerSendMessage } from '../coordinator'
import { assertUnreachable } from '../../Util/Util'
import type { RequestFilter } from '../common'
import {
  artSetPerm,
  countBuilds,
  filterArts,
  filterFeasiblePerm,
} from '../common'
import { BNBSplitWorker } from './BNBSplitWorker'
import { ComputeWorker } from './ComputeWorker'
import { DefaultSplitWorker } from './DefaultSplitWorker'

declare function postMessage(
  command: WorkerCommand | WorkerResult | WorkerSendMessage<MessageData>
): void

let splitWorker: SplitWorker, computeWorker: ComputeWorker
let commandQueue: Promise<void>[] = []
let overrideCommand: (() => void) | undefined

function handleMessage(msg: WorkerRecvMessage<MessageData>) {
  const { data } = msg

  switch (data.dataType) {
    case 'threshold':
      splitWorker.setThreshold(data.threshold)
      computeWorker.setThreshold(data.threshold)
      break
    case 'command':
      executeCommand(data.command).then(() => {
        postMessage({ messageType: 'send', to: 'master', data })
      })
      break
    case 'share': {
      const outt = splitWorker.popFilters(data.numIdle)
      console.log('Sharing ', { req: data.numIdle, sent: outt.length })
      outt.forEach((filter) =>
        postMessage({
          command: 'split',
          filter,
          maxIterateSize: data.maxIterateSize,
        })
      )
      break
    }
  }
}
async function handleEvent(data: WorkerCommand): Promise<void> {
  await executeCommand(data)
  postMessage({ resultType: 'done' })
}
function queueCommand(command: WorkerCommand) {
  const promise = executeCommand(command)
  commandQueue.push(promise)

  overrideCommand?.()
  Promise.race([
    Promise.all(commandQueue),
    new Promise((res, rej) => (overrideCommand = () => rej('override'))),
  ]).then(() => {
    commandQueue = []
    postMessage({ resultType: 'done' })
  })
}
async function executeCommand(data: WorkerCommand) {
  const { command } = data
  switch (command) {
    case 'split':
      for (const filter of splitWorker.split(
        data.filter,
        data.maxIterateSize
      )) {
        postMessage({ command: 'iterate', filter })
        // Suspend here in case a `threshold` is sent over
        //
        // Make sure to use task-based mechanisms such as `setTimeout` so that
        // this function suspends until the next event loop. If we instead use
        // microtask-based ones such as `Promise.resolved`, the suspension will
        // not be long enough.
        await new Promise((r) => setTimeout(r))
      }
      break
    case 'iterate':
      computeWorker.compute(data.filter)
      break
    case 'finalize': {
      computeWorker.refresh(true)
      const { builds, plotData } = computeWorker
      postMessage({ resultType: 'finalize', builds, plotData })
      break
    }
    case 'count': {
      const { exclusion, maxIterateSize } = data,
        arts = computeWorker.arts
      const perms = filterFeasiblePerm(
        artSetPerm(exclusion, [
          ...new Set(
            Object.values(arts.values).flatMap((x) => x.map((x) => x.set!))
          ),
        ]),
        arts
      )
      let count = 0
      for (const filter of perms) {
        postMessage({ command: 'split', filter, maxIterateSize })
        count += countBuilds(filterArts(arts, filter))
      }
      postMessage({ resultType: 'count', count })
      break
    }
    case 'setup':
      try {
        splitWorker = new BNBSplitWorker(data, (x) => postMessage(x))
      } catch {
        splitWorker = new DefaultSplitWorker(data, (x) => postMessage(x))
      }
      computeWorker = new ComputeWorker(data, (x) => postMessage(x))
      break
    default:
      assertUnreachable(command)
  }
}
onmessage = async (
  e: MessageEvent<WorkerCommand | WorkerRecvMessage<MessageData>>
) => {
  try {
    if (e.data.command === 'workerRecvMessage') {
      await handleMessage(e.data)
      return
    }

    await handleEvent(e.data)
  } catch (e) {
    postMessage({ resultType: 'err', message: (e as any).message })
  }
}

export interface SplitWorker {
  popFilters(n: number): RequestFilter[]
  split(filter: RequestFilter, minCount: number): Iterable<RequestFilter>
  setThreshold(newThreshold: number): void
}
