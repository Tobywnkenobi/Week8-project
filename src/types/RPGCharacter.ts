import { v4 as uuid4 } from "uuid";

import { inventoryValue, createInventoryItem } from "src/functions/inv-functions";
import { InventoryItem, Armor, Weapon } from "src/types/itemType";
import { FightingStyle, RangedStyle, MagicStyle, MeleeStyle } from "./fightingStyle";

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
    this._gold = gold
    
    // this._inventory = inventory 
  }

  buy(item: InventoryItem): void {
    if(item.value > this._gold) {
      console.log("Need more gold to purchase")
      return
    }
    this._gold -= item.value
    this.addToInventory(item)
    console.log(`${item.name} purchased for ${item.value} gold`)  
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

  public get inventory() {
    return this._inventory
  }
  
attack(opponent: RPGCharacter): void {
    let weapon = this._inventory.find(item => "damage" in item) as Weapon | undefined;
    let baseDamage = weapon ? weapon.damage : 10;
    let modifiedDamage = this._fightingStyle.attackModifier(baseDamage)
    opponent.takeDamage(modifiedDamage);
  }
  
takeDamage(damage: number): void {
  let armor = this._inventory.find(item => 'defense' in item) as Armor | undefined;
  let baseDefense = armor ? armor.defense : 0
  let modifiedDefense = this._fightingStyle.defenseModifier(baseDefense)
  let actualDamage = Math.max(0, damage - modifiedDefense)
  console.log(`${this.name} takes ${actualDamage} damage!`);
}


useSpecialAbility(): void {
  if(this._fightingStyle.specialAbility) {
    console.log(`${this.name} ${this._fightingStyle.specialAbility()}`)
  } else {
    console.log(`${this.name} has no special abilities`)
  }
}

addToInventory(item: InventoryItem): void {
    this._inventory.push(item);
    console.log(`${item.name} added to ${this.name}'s inventory.`);
}

removeFromInventory(itemId: string): void {
    this._inventory = this._inventory.filter(item => item.id !== itemId);
    console.log(`Item removed from ${this.name}'s inventory.`);
}

GetInventoryValue(): number {
  return this._inventory.reduce((total, item) => total + item.value, 0)
}

}

const exampleCharacter = new RPGCharacter('archer', 'Elf', RangedStyle, 100);


console.log(`Generated ID: ${exampleCharacter.id}`)
