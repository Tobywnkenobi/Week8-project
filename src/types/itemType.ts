import { v4 as uuid} from "uuid"
export { InventoryItem, Armor, Weapon, Shop }


abstract class InventoryItem {
    private _id:string;
    private _name:string;
    private _price: number;
    private _description: string;
    private _stock: number;

    constructor(name: string, price: number, description: string, stock: number) {
        this._id = uuid();
        this._name = name;
        this._price = price;
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
        defense: number,
        ) {
        super(name, price, description,defense)
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

enum ItemType {
    Armor = 'armor',
    Weapon = 'weapon'
}

export type ItemData = {
    type: ItemType,
    name: string,
    price: number,
    description: string,
    property: number       //  make defense for armor, and attack for weapon

}

// export type Weapon = InventoryItem & {
//     damage: number

class Weapon extends InventoryItem {
    private _damage: number

    constructor(name:string,
        price: number,
        description: string,
        damage: number) {
            super(name, price, description,damage)
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

    console.log(sword.attack())

    sword.damage = 35

    console.log(sword.attack())
    console.log(sword.repair())


    // add more methods and logic to suit later weapon class

class Shop {
    private _items: InventoryItem[] = []

    constructor(itemData: ItemData[]) {
        itemData.forEach(data => {
            if(data.type === ItemType.Armor) {
                this._items.push(new Armor(data.name, data.price, data.description, data.property))
            } else if(data.type === ItemType.Weapon) {
                this._items.push(new Weapon(data.name, data.price, data.description, data.property))
            }
        })
    }
    
    addStock(id:string, quantity: number): void {
        if (quantity < 0) {
            throw new Error('quantity can not be negative')
        }
        const item = this.getItemById(id)
        if (!item) {
            throw new Error(`Item with ID ${id} not found.`)        
        }
    
        item.stock += quantity
    }

    private getItemById(id: string): InventoryItem | null {
        return this._items.find(item => item.id === id) || null
    }
    
    
    addItem(item: InventoryItem): void {
        this._items.push(item)
    }
    
    get items(): InventoryItem[] {
        return this._items
    }
    
    removeItem(id:string): void {
        this._items = this._items.filter(item => item.id !== id)
    }
    
    updateItem(updateItem: InventoryItem): void {
        this._items = this._items.map(item =>
            item.id === updateItem.id ? updateItem : item
            )
        }
        
        // getItemsByType(type: string): InventoryItem[] {
            //     return this._items.filter(item => item.type === type)
            // }
            
            purchaseItem(id:string): InventoryItem | null {
                const item = this.getItemById(id)
                if(item) {
            this.removeItem(id)
            return item
        } else {
            return null
        }
    }
}