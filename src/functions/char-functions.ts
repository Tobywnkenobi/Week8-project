import { v4 as uuid4 } from "uuid";

import { RPGCharacter } from './../types/RPGCharacter';
import { FightingStyle, RangedStyle, MeleeStyle, MagicStyle } from "../types/fightingStyle";

export function createCharacter(name: string, archetype: string, fightingStyle:FightingStyle, gold: number): RPGCharacter {
    return new RPGCharacter(name, archetype, fightingStyle, gold)
}

const newCharacter = createCharacter('Raul', 'Elf', RangedStyle, 100)

console.log(newCharacter)
