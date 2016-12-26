import {
  GraphQLFloat,
  GraphQLObjectType,
} from 'graphql';


export default new GraphQLObjectType({
  name: 'BasicDataStats',
  description: 'This object contains basic data stats',
  fields: () => ({
    FlatArmorMod: { type: GraphQLFloat },
    FlatAttackSpeedMod: { type: GraphQLFloat },
    FlatBlockMod: { type: GraphQLFloat },
    FlatCritChanceMod: { type: GraphQLFloat },
    FlatCritDamageMod: { type: GraphQLFloat },
    FlatEXPBonus: { type: GraphQLFloat },
    FlatEnergyPoolMod: { type: GraphQLFloat },
    FlatEnergyRegenMod: { type: GraphQLFloat },
    FlatHPPoolMod: { type: GraphQLFloat },
    FlatHPRegenMod: { type: GraphQLFloat },
    FlatMPPoolMod: { type: GraphQLFloat },
    FlatMPRegenMod: { type: GraphQLFloat },
    FlatMagicDamageMod: { type: GraphQLFloat },
    FlatMovementSpeedMod: { type: GraphQLFloat },
    FlatPhysicalDamageMod: { type: GraphQLFloat },
    FlatSpellBlockMod: { type: GraphQLFloat },
    PercentArmorMod: { type: GraphQLFloat },
    PercentAttackSpeedMod: { type: GraphQLFloat },
    PercentBlockMod: { type: GraphQLFloat },
    PercentCritChanceMod: { type: GraphQLFloat },
    PercentCritDamageMod: { type: GraphQLFloat },
    PercentDodgeMod: { type: GraphQLFloat },
    PercentEXPBonus: { type: GraphQLFloat },
    PercentHPPoolMod: { type: GraphQLFloat },
    PercentHPRegenMod: { type: GraphQLFloat },
    PercentLifeStealMod: { type: GraphQLFloat },
    PercentMPPoolMod: { type: GraphQLFloat },
    PercentMPRegenMod: { type: GraphQLFloat },
    PercentMagicDamageMod: { type: GraphQLFloat },
    PercentMovementSpeedMod: { type: GraphQLFloat },
    PercentPhysicalDamageMod: { type: GraphQLFloat },
    PercentSpellBlockMod: { type: GraphQLFloat },
    PercentSpellVampMod: { type: GraphQLFloat },
    rFlatArmorModPerLevel: { type: GraphQLFloat },
    rFlatArmorPenetrationMod: { type: GraphQLFloat },
    rFlatArmorPenetrationModPerLevel: { type: GraphQLFloat },
    rFlatCritChanceModPerLevel: { type: GraphQLFloat },
    rFlatCritDamageModPerLevel: { type: GraphQLFloat },
    rFlatDodgeMod: { type: GraphQLFloat },
    rFlatDodgeModPerLevel: { type: GraphQLFloat },
    rFlatEnergyModPerLevel: { type: GraphQLFloat },
    rFlatEnergyRegenModPerLevel: { type: GraphQLFloat },
    rFlatGoldPer10Mod: { type: GraphQLFloat },
    rFlatHPModPerLevel: { type: GraphQLFloat },
    rFlatHPRegenModPerLevel: { type: GraphQLFloat },
    rFlatMPModPerLevel: { type: GraphQLFloat },
    rFlatMPRegenModPerLevel: { type: GraphQLFloat },
    rFlatMagicDamageModPerLevel: { type: GraphQLFloat },
    rFlatMagicPenetrationMod: { type: GraphQLFloat },
    rFlatMagicPenetrationModPerLevel: { type: GraphQLFloat },
    rFlatMovementSpeedModPerLevel: { type: GraphQLFloat },
    rFlatPhysicalDamageModPerLevel: { type: GraphQLFloat },
    rFlatSpellBlockModPerLevel: { type: GraphQLFloat },
    rFlatTimeDeadMod: { type: GraphQLFloat },
    rFlatTimeDeadModPerLevel: { type: GraphQLFloat },
    rPercentArmorPenetrationMod: { type: GraphQLFloat },
    rPercentArmorPenetrationModPerLevel: { type: GraphQLFloat },
    rPercentAttackSpeedModPerLevel: { type: GraphQLFloat },
    rPercentCooldownMod: { type: GraphQLFloat },
    rPercentCooldownModPerLevel: { type: GraphQLFloat },
    rPercentMagicPenetrationMod: { type: GraphQLFloat },
    rPercentMagicPenetrationModPerLevel: { type: GraphQLFloat },
    rPercentMovementSpeedModPerLevel: { type: GraphQLFloat },
    rPercentTimeDeadMod: { type: GraphQLFloat },
    rPercentTimeDeadModPerLevel: { type: GraphQLFloat },
  }),
});
