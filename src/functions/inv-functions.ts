import { v4 as uuid4 } from "uuid";

import { FightingStyle } from "../types/fightingStyle";
import { RPGCharacter } from "../types/RPGCharacter";
import { Armor, InventoryItem, Weapon } from "../types/itemType";
export { addToInventory, removeFromInventory, inventoryValue, createInventoryItem };

function createInventoryItem(
    name: string, 
    description: string, 
    value: number, 
    damageOrDefense: number, 
    isWeapon: boolean
    ): Weapon | Armor {
    const baseItem = {
        id: uuid4(),
        name,
        description,
        value,
    }
    
    return isWeapon
    ? { ...baseItem, damage: damageOrDefense } as Weapon
    : { ...baseItem, defense: damageOrDefense } as Armor
    
}
  
function addToInventory(character: RPGCharacter, item: InventoryItem): void {
    character.inventory.push(item)
}

function removeFromInventory(character: RPGCharacter, itemId: string): void {
    character.inventory = character.inventory.filter(item => item.id != itemId)
}

function inventoryValue(character: RPGCharacter): number {
    return character.inventory.reduce((total, item) => total + item.value, 0)
}
