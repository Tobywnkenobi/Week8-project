import { v4 as uuid4 } from "uuid";

import { InventoryItem, Weapon, Armor } from "./itemType";
import { FightingStyle } from "./fightingStyle";

export class RPGCharacter {
    id: string;
    name: string;
    archetype: string;
    fightingStyle: FightingStyle;
    inventory: InventoryItem[];


constructor(
    id: string,
    name: string,
    archetype: string,
    fightingStyle: FightingStyle,
    inventory: InventoryItem[] = []
) {
    this.id = id
    this.name = name
    this.archetype = archetype
    this.fightingStyle = fightingStyle
    this.inventory = inventory


}

attack(opponent: RPGCharacter): void {
    let weapon = this.inventory.find(item => "damage" in item) as Weapon | undefined
    let damage = weapon ? weapon.damage: 10
    opponent.takeDamage(damage)
}

takeDamage(damage: number): void {
    let armor = this.inventory.find(item => 'defense' in item) as Armor | undefined
    let actualDamage = armor ? damage - armor.defense : damage
    console.log(`${this.name} takes ${actualDamage} damage!`)
}

addToInventory(item: InventoryItem): void {
    this.inventory.push(item)
    console.log(`${item.name} added to ${this.name}'s inventory.`)
}

removeFromInventory(itemId: string): void {
    this.inventory = this.inventory.filter(item => item.id !== itemId)
    console.log(`item removed from ${this.name}'s inventory.`)
}
}
const exampleCharacter = new RPGCharacter(
    uuid4(),
    'archer',
    'Elf',
    'ranged',
    []
)

console.log(`Generated ID: ${exampleCharacter.id}`)
