import type { ArtifactSetKey } from '@genshin-optimizer/gi/consts'
import type { Data } from '@genshin-optimizer/gi/wr'
import { equal, greaterEq, input, percent } from '@genshin-optimizer/gi/wr'
import { cond, st, stg } from '../../SheetUtil'
import { ArtifactSheet, setHeaderTemplate } from '../ArtifactSheet'
import type { SetEffectSheet } from '../IArtifactSheet'
import { dataObjForArtifactSheet } from '../dataUtil'

const key: ArtifactSetKey = 'DesertPavilionChronicle'
const setHeader = setHeaderTemplate(key)

const set2 = greaterEq(input.artSet.DesertPavilionChronicle, 2, 0.15)

const [condSet4Path, condSet4] = cond(key, 'set4')
const atkSPD_ = greaterEq(
  input.artSet.DesertPavilionChronicle,
  4,
  equal(condSet4, 'on', percent(0.1))
)
const normal_dmg_ = greaterEq(
  input.artSet.DesertPavilionChronicle,
  4,
  equal(condSet4, 'on', percent(0.4))
)
const charged_dmg_ = { ...normal_dmg_ }
const plunging_dmg_ = { ...normal_dmg_ }

export const data: Data = dataObjForArtifactSheet(key, {
  premod: {
    anemo_dmg_: set2,
    atkSPD_,
    normal_dmg_,
    charged_dmg_,
    plunging_dmg_,
  },
})

const sheet: SetEffectSheet = {
  2: { document: [{ header: setHeader(2), fields: [{ node: set2 }] }] },
  4: {
    document: [
      {
        header: setHeader(4),
        path: condSet4Path,
        value: condSet4,
        teamBuff: true,
        name: st('hitOp.charged'),
        states: {
          on: {
            fields: [
              {
                node: atkSPD_,
              },
              {
                node: normal_dmg_,
              },
              {
                node: charged_dmg_,
              },
              {
                node: plunging_dmg_,
              },
              {
                text: stg('duration'),
                value: 15,
                unit: 's',
              },
            ],
          },
        },
      },
    ],
  },
}
export default new ArtifactSheet(sheet, data)
