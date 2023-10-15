import { v4 as uuid4 } from "uuid";
import { ItemData, ItemType, InventoryItem, Weapon, Armor } from "./itemType";

const itemData: ItemData[] = [
    {type: ItemType.Weapon, name: 'Sword', value 100, description: 'you could be throwing hands', property: 30},
    {type: ItemType.Armor, name: 'Shield', value: 150, description: 'better than hopes and prayers', property: 25}
]

const shop = new Shop(itemData)

export class Shop {
    items: (Weapon | Armor)[]

    constructor(itemData: ItemData[]) {
        this.items = itemData.map(data => this.createItem(data))
    }
    
    createInventoryItem(data: itemData): Weapon | Armor {
        const baseItem = {
            id: uuid4(),
            name: data.name,
            value: data.value,
            description: data.description
        }
        
        return data.type === ItemType.Weapon
        ? {...baseItem,damage: data.property } as Weapon
        : {..baseItem,defense:data.property } as Armor
    }

}
    