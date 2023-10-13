import { v4 as uuid4 } from "uuid";
import { InventoryItem, Weapon, Armor } from "src/types/itemType";
import { RPGCharacter } from "src/types/RPGCharacter"; 
import { FightingStyle } from "src/types/fightingStyle";

// Creating some items
const sword = new Weapon(uuid4(), 'Sword', 100, 'A sharp blade.', 25);
const shield = new Armor(uuid4(), 'Shield', 50, 'A sturdy shield.', 15);

// Create a character
const myCharacter = new RPGCharacter('Archer', 'Elf', 'ranged');

// Adding items to character's inventory and printing the inventory
myCharacter.addToInventory(sword);
myCharacter.addToInventory(shield);
myCharacter.printInventory(); // implement this method to print items in inventory

// Removing an item from the character's inventory and printing the inventory
myCharacter.removeFromInventory(sword.id); 
myCharacter.printInventory();

// Creating an Inventory and adding items to it
const myInventory = new Inventory(); // assuming you have an Inventory class ready
myInventory.addItem(sword);
myInventory.addItem(shield);

// Adding an item from Inventory to character's inventory
myCharacter.addToInventory(myInventory.getItemById(sword.id)); // assuming getItemById is implemented
myCharacter.printInventory();

// Remove a specified quantity from the inventory - assuming you've implemented such functionality.
// Here, you might need a quantity attribute for your items and additional logic to handle it.
myCharacter.removeQuantityFromInventory(sword.id, 1); // Example method, implement as per your logic
myCharacter.printInventory();
