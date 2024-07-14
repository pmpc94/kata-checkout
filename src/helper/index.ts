import type { ItemType } from '@/types'

export const calculateSpecialPrice = (item: ItemType): number => {
    
    switch (item.name) {
        case "B": item.total = calculateSpecialItemB(item.quantity, item.price)
    }

    return item.total
}

const calculateSpecialItemB = (quantity: number, price: number) => {
    const numberAppliedSpecialPrice = quantity % 2

    if (numberAppliedSpecialPrice < 1) {
        return quantity * price
    }

    if (numberAppliedSpecialPrice === 0) {
        return numberAppliedSpecialPrice * 1.25
    } else {
        return Math.floor( quantity / 2) + 0.75
    }
        
}
