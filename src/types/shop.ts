import { v4 as uuid4 } from "uuid";
import { ItemDataType, ItemType, Weapon, Armor, InventoryItem, ItemData } from './itemType';

const itemData: ItemDataType[] = [
    {type: ItemType.Weapon, name: 'Sword', value: 100, description: 'you could be throwing hands', property: 30},
    {type: ItemType.Armor, name: 'Shield', value: 150, description: 'better than hopes and prayers', property: 25}
]

export class Shop {
    private _items:(Weapon | Armor)[]

    constructor(itemData: ItemDataType[]) {
        this._items = itemData.map(data => this.createItem(data))
    }
    
    createItem(data: ItemDataType): Weapon | Armor {
        if (data.type === ItemType.Weapon) {
            return new Weapon(data.name, data.value, data.description, data.property)
        } else {
            return new Armor(data.name, data.value, data.description, data.property)
        }
    }

    private getItemById(id: string): InventoryItem | null {
        return this._items.find(item => item.id === id) || null
    }
        
    addItem(item: Weapon | Armor): void {
        this._items.push(item)
    }
    
    get items(): (Weapon | Armor)[] {
        return this._items
    }
    
    removeItem(id:string): void {
        this._items = this._items.filter(item => item.id !== id)
    }
    
    updateItem(updateItem: Weapon | Armor): void {
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
const shopInstance = new Shop(itemData)

