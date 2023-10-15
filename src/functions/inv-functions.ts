import { v4 as uuid4 } from "uuid";

import { FightingStyle } from "../types/fightingStyle";
import { RPGCharacter } from "../types/RPGCharacter";
import { Armor, InventoryItem, Weapon } from "../types/itemType";
export { inventoryValue, createInventoryItem };

function createInventoryItem(
    name: string, 
    description: string, 
    value: number, 
    damageOrDefense: number, 
    isWeapon: boolean
    ): Weapon | Armor {
    const baseItem = {
        id: uuid4(),
        name,
        description,
        value,
    }    
    return isWeapon
    ? { ...baseItem, damage: damageOrDefense } as Weapon
    : { ...baseItem, defense: damageOrDefense } as Armor
    
}
  
function inventoryValue(character: RPGCharacter): number {
    return character.inventory.reduce((total, item) => total + item.value, 0)
}

const cart = {
    items: [],
    totalPrice: 0
}

function addToCart(itemId) {
    const item = myShop.items.find(i => i.id === itemId)
    if (!item) {
        alert('Item not found')
        return
    }

    const existingItem = cart.items.find(i => i.id === itemId)
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.items.push({
            id: item.id,
            name: item.name,
            value:: item.value,
            quantity: 1
        });
    }

    updateCartUI()
}

function updateCartUI() {
    const cartItemsElement = document.getElementById('cart-items')
    const totalPriceElement = document.getElementById('total-price')

    cartItemsElement.innerHTML = ''

    cart.items.forEach(item => {
        const listItem = document.createElement('li')
        listItem.textContent = `${item.name} ($${item.price}) x ${item.quantity}`
        cartItemsElement?.appendChild(listItem)
    })

    cart.totalPrice = cart.items.reduce((total, item) => total + (item.price * item.quantity), 0)
    totalPriceElement.textContent = `Total Price: $${cart.totalPrice}`
}