import type { WeaponKey } from '@genshin-optimizer/gi/consts'
import { equal, input, subscript } from '@genshin-optimizer/gi/wr'
import { cond, st } from '../../../SheetUtil'
import type { IWeaponSheet } from '../../IWeaponSheet'
import { WeaponSheet, headerTemplate } from '../../WeaponSheet'
import { dataObjForWeaponSheet } from '../../util'

const key: WeaponKey = 'SolarPearl'

const refinementVals = [-1, 0.2, 0.25, 0.3, 0.35, 0.4]

const [condNormalPath, condNormal] = cond(key, 'solarShineNormal')
const [condSkillBurstPath, condSkillBurst] = cond(key, 'solarShineSkillBurst')
const refineVal = subscript(input.weapon.refinement, refinementVals)
const skill_dmg_ = equal('normal', condNormal, refineVal)
const burst_dmg_ = { ...skill_dmg_ }
const normal_dmg_ = equal('skillBurst', condSkillBurst, refineVal)

const data = dataObjForWeaponSheet(key, {
  premod: {
    skill_dmg_,
    burst_dmg_,
    normal_dmg_,
  },
})

const sheet: IWeaponSheet = {
  document: [
    {
      value: condNormal,
      path: condNormalPath,
      header: headerTemplate(key, st('conditional')),
      name: st('hitOp.normal'),
      states: {
        normal: {
          fields: [
            {
              node: skill_dmg_,
            },
            {
              node: burst_dmg_,
            },
          ],
        },
      },
    },
    {
      value: condSkillBurst,
      path: condSkillBurstPath,
      header: headerTemplate(key, st('conditional')),
      name: st('hitOp.skillOrBurst'),
      states: {
        skillBurst: {
          fields: [
            {
              node: normal_dmg_,
            },
          ],
        },
      },
    },
  ],
}
export default new WeaponSheet(sheet, data)
