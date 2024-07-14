import { NAMES, PRICES } from '@/consts'
import type { ItemType } from '@/types'

export const calculateSpecialPrice = (item: ItemType): number => {
    switch (item.name) {
        case NAMES.ITEM_A: item.subTotal = calculateSpecialItemA(item.quantity);
            break
        case NAMES.ITEM_B: item.subTotal = calculateSpecialItemB(item.quantity);
            break
    }

    return item.subTotal
}

const calculateSpecialItemA = (quantity: number) => {
    return quantity * PRICES.ITEM_A
}

const calculateSpecialItemB = (quantity: number) => {
    const numberAppliedSpecialPrice = quantity % 2
    if (numberAppliedSpecialPrice === 0) {
        return (quantity / 2) * 1.25
    } else if (quantity > 2) {
        return Math.floor((quantity / 2)) * 1.25 + PRICES.ITEM_B
    } else {
        return PRICES.ITEM_B
    }
}
