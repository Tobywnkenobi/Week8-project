import { v4 as uuid} from "uuid"
export { Armor, Weapon }



export abstract class InventoryItem {
    private _id:string;
    private _name:string;
    private _value: number;
    private _description: string;
    private _stock: number;

    constructor(name: string, value: number, description: string, stock: number) {
        this._id = uuid();
        this._name = name;
        this._value = value;
        this._description = description;
        this._stock = stock;
    }
    
    get stock(): number {
        return this._stock
    }

    set stock(newStock: number) {
        if (newStock < 0) {
            throw new Error('stock cannot be negative.')
        }
        this._stock = newStock
    }
    
    get id():string {
        return this._id;
    }
    
    get name():string {
        return this._name
    }

    get value(): number {
        return this._value
    }
    
    get description(): string {
        return this._description
    }
}

// export interface InventoryItem {
//     id:string;
//     name:string;
//     value: number;
//     description: string;
//     stock: number;

// }
    
class Armor extends InventoryItem {
    private _defense: number

    constructor(
        name:string, 
        value: number, 
        description: string,
        // stock: number,
        defense: number,
        
        ) {
        super(name, value, description,defense)
        this._defense = defense
    }

    set defense(newDefense: number) {
        if (newDefense < 0) {
            throw new Error('defense can not be negative')
        }
        this._defense = newDefense
    }
}

export type TArmor = InventoryItem & {
    defense: number
}

export enum ItemType {
    Armor = 'Armor',
    Weapon = 'Weapon'
}

export interface ItemDataType {
    type: ItemType;
    name: string;
    value: number;
    description: string;
    property: number;
}


export const ItemData : ItemDataType[] = [
    {type: ItemType.Weapon, name: 'Sword', value: 100, description: 'You could be throwing hands!', property: 30},
    {type: ItemType.Armor, name: 'Shield', value: 150, description: 'Still more effective than thoughts and prayers!', property: 25}
]

export interface InventoryItemData {
    id: string;
    name:string;
    value: number;
    description: string,
    property: number    
}

// export type Weapon = InventoryItem & {
//     damage: number

class Weapon extends InventoryItem {
    private _damage: number

    constructor(
        name:string,
        value: number,
        description: string,
        damage: number) {
            super(name, value, description,damage)
            this._damage = damage
    }

    get damage(): number {
        return this._damage
    }

    set damage(newDamage: number) {
        if (newDamage < 0) {
            throw new Error('Damage can not be negative')
        }
        this._damage = newDamage        
    }

    attack(): string {
        return `${this.name} attacks with ${this._damage} damage!`
    }

    repair(): string {
        return `${this.name} has been repaired and is ready for you`
    }

}
    let sword = new Weapon('Sword', 85, "BroadSword", 30)

    // const shopInstance = new Shop(ItemData)

    console.log(sword.attack())

    sword.damage = 35

    console.log(sword.attack())
    console.log(sword.repair())


    // add more methods and logic to suit later weapon class


