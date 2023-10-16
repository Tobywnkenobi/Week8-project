import {v4 as uuid4} from 'uuid';
import { createCharacter } from "src/functions/char-functions";
import { RPGCharacter } from 'src/types/RPGCharacter';
import {Weapon, Armor, ItemData, ItemType, ItemDataType, InventoryItem } from "src/types/itemType"
import { FightingStyle, RangedStyle } from '../types/fightingStyle';
import { Shop } from "src/types/shop";
import { createInventoryItem } from '../functions/inv-functions';


const main = () => {
    const sword: InventoryItem = createInventoryItem('sword', 'A sharp blade', 150, 10, true)
    const bow: InventoryItem = createInventoryItem('bow', 'long-range weapon', 120, 8, true)
    const club: InventoryItem = createInventoryItem('club', 'a heavy hitter', 100, 12, true)
    const armor: InventoryItem = createInventoryItem('shield', 'protective gear', 200, 50, false)

    const character = new RPGCharacter('archer', 'Elf', RangedStyle, 100);
    
    character.addToInventory(sword);
    printInventoryAndValue(character, 'added Sword:');

    character.addToInventory(bow)
    printInventoryAndValue(character, 'added bow:')

    character.addToInventory(club)
    printInventoryAndValue(character, 'removed club')




}

const printInventoryAndValue = (character: RPGCharacter, action: string) => {
    console.log(`\n${action}`)
    console.log('inventory: ', character.inventory.map(item => item.name).join(', '))
    console.log('Total Inventory Value:', inventoryValue(character))
}

const inventoryValue = (character: RPGCharacter): number => {
    return character.inventory.reduce((total, item) => total + item.value, 0)
}

const itemData: ItemDataType[] =[
    {type: ItemType.Weapon, name: 'Sword', value: 100, description: 'Better than hands',property: 30},
    {type: ItemType.Armor, name: 'Shield', value: 150, description: 'It\'ll do!', property: 25}
]

const shop = new Shop(itemData)

main()

