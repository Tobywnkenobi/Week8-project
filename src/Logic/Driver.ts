import { v4 as uuid4 } from "uuid";
import { InventoryItem, Weapon, Armor } from "src/types/itemType";
import { RPGCharacter } from "src/types/RPGCharacter"; 
import { MeleeStyle, MagicStyle, RangedStyle } from "src/types/fightingStyle";
import { Shop itializeShop, addToCart } from "src/types/shop"

// Creating Characters
const character1 = new RPGCharacter('Porter', 'Elf', RangedStyle, 100);  
const character2 = new RPGCharacter('Lyla', 'Orc', MeleeStyle, 100);     
const warrior = new RPGCharacter('Warrior', "Human", MeleeStyle, 150); 
const wizard = new RPGCharacter('Wizard', 'Elf', MagicStyle, 120); 

// Creating Items
const sword = new Weapon('Sword', 100, 'A blade', 30);
const shield = new Armor('Shield', 50, 'A shield', 10);

// Inventory Management
character1.addToInventory(sword);
character2.addToInventory(shield);

// Interactions
console.log(`${character1.name} attacks ${character2.name}!`);
character1.attack(character2);

console.log(`${character2.name} defends and counterattacks!`);
character2.attack(character1);

console.log(`${warrior.name} attacks!`);
warrior.attack(wizard);

console.log(`${wizard.name} uses special ability!`);
wizard.useSpecialAbility();

document.addEventListener("DOMContentLoaded", () => {
    const myShop = new Shop();
    initalizeShop(myShop);
})


document.addEventListener("DOMContentLoaded", () => {
    const shopElement = document.getElementById("shop-items");
    // Assuming `myShop` is your instance of `Shop` with items
    myShop.items.forEach(item => {
        const itemCard = document.createElement("div");
        itemCard.classList.add("item-card");
        itemCard.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p>Price: ${item.value}</p>
            <p>Stock: ${item.stock}</p>
            <button onclick="addToCart('${item.id}')">Add to Cart</button>
        `;
        shopElement.appendChild(itemCard);
    });
});

function addToCart(itemId) {
