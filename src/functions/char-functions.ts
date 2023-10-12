import { v4 as uuid4 } from "uuid";

import { FightingStyle, RPGCharacter } from "../types/RPGCharacter";

function createCharacter(name: string, archtype: string, fightingStyle:FightingStyle): RPGCharacter {
    return {
        id: uuidv4(),
        name,
        archetype,
        fightingStyle,
        inventory: []
    }
}


