import { v4 as uuid4 } from "uuid";

import { addToInventory, removeFromInventory, inventoryValue, createInventoryItem } from "src/functions/inv-functions";
import { InventoryItem, Armor, Weapon, Shop } from "src/types/itemType";
import { FightingStyle } from "./fightingStyle";

export class RPGCharacter {
    private _gold: number;
    private _id: string;
    private _name: string;
    private _archetype: string;
    private _fightingStyle: FightingStyle;
    private _inventory: InventoryItem[] = []


constructor(name: string, archetype: string, fightingStyle:FightingStyle, gold: number) {
    this._id = uuid4()
    this._name = name
    this._archetype = archetype
    this._fightingStyle = fightingStyle
    this._gold = 100
  }

  buy(item: InventoryItem): void {
    if(item.price > this._gold) {
      console.log("Not enough gold to buy this item!")
      return
    }

    this._gold -= item.price
    this.addToInventory(item)
    console.log(`${item.name} purchased for ${item.price} gold`)
  }

  get name(): string {
    return this._name
  }

  set name(newName: string) {
    this._name = newName
  }

  get id(): string {
    return this._id
  }


  
  attack(opponent: RPGCharacter): void {
      let weapon = this._inventory.find(item => "damage" in item) as Weapon | undefined;
      let damage = weapon ? weapon.damage : 10;
      opponent.takeDamage(damage);
    }
    
    takeDamage(damage: number): void {
        let armor = this._inventory.find(item => 'defense' in item) as Armor | undefined;
    let actualDamage = armor ? damage - armor.defense : damage;
    console.log(`${this.name} takes ${actualDamage} damage!`);
}

addToInventory(item: InventoryItem): void {
    this._inventory.push(item);
    console.log(`${item.name} added to ${this.name}'s inventory.`);
}

removeFromInventory(itemId: string): void {
    this._inventory = this._inventory.filter(item => item.id !== itemId);
    console.log(`Item removed from ${this.name}'s inventory.`);
}

}

const exampleCharacter = new RPGCharacter('Archer', 'Elf', 'ranged');

console.log(`Generated ID: ${exampleCharacter.id}`)
