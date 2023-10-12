export type InventoryItem = {
    id: string
    name: string
    description: string
    value: number
}

export type Armor = InventoryItem & {
    defense: number
}

export type Weapon = InventoryItem & {
    damage:number
}

