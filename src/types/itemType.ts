import { v4 as uuid } from "uuid"
export { InventoryItem, Armor, Weapon, Shop }


abstract class InventoryItem {
    private _id:string;
    private _name:string;
    private _price: number;
    private _description: string;

    constructor(name: string, price: number, description: string) {
        this._id = uuid();
        this._name = name;
        this._price = price;
        this._description = description;
    }
    
    get id():string {
        return this._id;
    }
    
    get name():string {
        return this._name
    }

    get price(): number {
        return this._price
    }
    
    get description(): string {
        return this._description
    }
}
    
class Armor extends InventoryItem {
    private _defense: number

    constructor(name:string, 
        price: number, 
        description: string, 
        damage: number) {
        super(name, price, description)
        this._defense = defense
    }

    get defense(): number {
        return this._defense
    }
}

class Weapon extends InventoryItem {
    private _damage: number

    constructor(name:string,
        price: number,
        description: string,
        damage: number) {
            super(name, price, description)
            this._damage = damage
    }

    get damage(): number {
        return this._damage
    }
}

class Shop {
    private _items: InventoryItem[] = []

    constructor(items?: InventoryItem[]) {
        if (items) {
            this._items = items
        }
    }

    addItem(item: InventoryItem): void {
        this._items.push(item)
    }

    get items(): InventoryItem[] {
        return this._items
    }
}