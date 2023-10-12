import { v4 as uuid4 } from "uuid";

import { RPGCharacter } from "../types/RPGCharacter";
import { FightingStyle } from "../types/fightingStyle";

function createCharacter(name: string, archetype: string, fightingStyle:FightingStyle): RPGCharacter {
    return {
        id: uuid4(),
        name,
        archetype,
        fightingStyle,
        inventory: []
    }
}

const newCharacter = createCharacter('Raul', 'Elf', 'ranged')
console.log(newCharacter)
