import { ItemData, ItemType, Shop } from "./itemType"

const itemData: ItemData[] = [
    {type: ItemType.Weapon, name: 'Sword', price 100, description: 'you could be throwing hands', property: 30},
    {type: ItemType.Armor, name: 'Shield', price: 150, description: 'better than hopes and prayers', property: 25}
]

const shop = new Shop(itemData)

