import { v4 as uuid4 } from "uuid";

import { FightingStyle } from "../types/fightingStyle";
import { RPGCharacter } from "../types/RPGCharacter";
import { Armor, Weapon } from "../types/itemType";
export { inventoryValue, createInventoryItem, addToCart };

function createInventoryItem(
    name: string, 
    description: string, 
    value: number, 
    damageOrDefense: number, 
    isWeapon: boolean
    ): InventoryItem {
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

interface InventoryItem {
    id:string;
    name: string;
    description: string;
    value: number;
    damage?: number;
    defense?: number
}

interface CartItem {
    id:string;
    name?:string;
    value?:number;
    quantity:number;
}

const cart: { items: CartItem[], totalPrice: number } = {
    items: [],
    totalPrice: 0,
}

function addToCart(itemId: string, itemsAvailable: (Weapon | Armor)[]): void {
    const item = itemsAvailable.find(i => i.id === itemId)
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
            value: item.value,
            quantity: 1
        });
    }

    updateCartUI()
}    
    function updateCartUI() {
        const cartItemsElement = document.getElementById('cart-items')
        const totalPriceElement = document.getElementById('total-price')
        
        cartItemsElement!.innerHTML = ''
        
        cart.items.forEach(item => {
            const listItem = document.createElement('li')
            listItem.textContent = `${item.name} ($${item.value}) x ${item.quantity}`
            cartItemsElement?.appendChild(listItem)
        })
        
        cart.totalPrice = cart.items.reduce((total, item) => total + (item.value! * item.quantity), 0)
        totalPriceElement!.textContent = `Total Price: $${cart.totalPrice}`
    }
