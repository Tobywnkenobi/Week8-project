export type fightingStyle = 'ranged' | 'melee';


enum FightingStyleName {
    Melee = 'melee',
    Ranged = 'ranged',
    Magic = 'magic'
}

export type FightingStyle = {
    name: FightingStyleName
    attackModifier: (baseDamage: number) => number
    defenseModifier: (baseDefense: number) => number
    specialAbility?: () => string
}

export const MeleeStyle: FightingStyle = {
    name: FightingStyleName.Melee,
    attackModifier: baseDamage => baseDamage * 1.2,
    defenseModifier: baseDefense => baseDefense,
    specialAbility: () => 'Uses a power melee attack!'
}

export const MagicStyle: FightingStyle = {
    name: FightingStyleName.Magic,
    attackModifier: baseDamage => baseDamage,
    defenseModifier: baseDefense => baseDefense + 5,
    specialAbility: () => 'Cast Spell',
}

export const RangedStyle: FightingStyle = {
    name: FightingStyleName.Ranged,
    attackModifier: baseDamage => baseDamage * 1.1,
    defenseModifier: baseDefense => baseDefense - 5,
    specialAbility: () => 'Firing off arrows',
}