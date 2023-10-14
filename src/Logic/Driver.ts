import { v4 as uuid4 } from "uuid";
import { InventoryItem, Weapon, Armor } from "src/types/itemType";
import { RPGCharacter } from "src/types/RPGCharacter"; 
import { FightingStyle } from "src/types/fightingStyle";

const character1 = new RPGCharacter('Porter', 'Elf', 'ranged', 100);
const character2 = new RPGCharacter('Lyla', 'Orc', 'melee', 100);

const sword = new Weapon('Sword', 100, 'A blade', 30);
const shield = new Armor('Shield', 50, 'A shield', 10);

character1.addToInventory(sword);
character2.addToInventory(shield);

console.log(`${character1.name} attacks ${character2.name}!`);
character1.attack(character2);

console.log(`${character2.name} defends and counterattacks!`);
character2.attack(character1);

