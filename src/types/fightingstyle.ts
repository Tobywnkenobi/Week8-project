
export type FightingStyle = {
    name: 'Melee' | 'Magic' | 'Ranged'
    attackModifier: (baseDamage: number) => number
    defenseModifier: (baseDefense: number) => number
    specialAbility: () => string
}

export const MeleeStyle: FightingStyle = {
    name: 'Melee',
    attackModifier: baseDamage => baseDamage * 1.2,
    defenseModifier: baseDefense => baseDefense,
    specialAbility: () => 'Swing! melee attack!'
}

export const MagicStyle: FightingStyle = {
    name: 'Magic',
    attackModifier: baseDamage => baseDamage,
    defenseModifier: baseDefense => baseDefense + 5,
    specialAbility: () => 'Cast Spell',
}

export const RangedStyle: FightingStyle = {
    name: 'Ranged',
    attackModifier: baseDamage => baseDamage * 1.1,
    defenseModifier: baseDefense => baseDefense - 5,
    specialAbility: () => 'Firing off arrows',
}