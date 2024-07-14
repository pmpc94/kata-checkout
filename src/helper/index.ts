import { NAMES, PRICES } from '@/consts'
import type { ItemType } from '@/types'

export const calculateSpecialPrice = (item: ItemType): number => {
    switch (item.name) {
        case NAMES.ITEM_A: item.subTotal = calculateSpecialItemA(item.quantity);
            break
        case NAMES.ITEM_B: item.subTotal = calculateSpecialItemB(item.quantity);
            break
        case NAMES.ITEM_C: item.subTotal = calculateSpecialItemC(item.quantity);
            break
        case NAMES.ITEM_D: item.subTotal = calculateSpecialItemD(item.quantity);
            break
        case NAMES.ITEM_E: item.subTotal = calculateSpecialItemE(item.quantity);
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

const calculateSpecialItemC = (quantity: number) => {
    const freeItems = Math.floor(quantity / 3)
    return (quantity * PRICES.ITEM_C) - freeItems * PRICES.ITEM_C
}

const calculateSpecialItemD = (quantity: number) => {
    return quantity * PRICES.ITEM_D
}

const calculateSpecialItemE = (quantity: number) => {
    return quantity * PRICES.ITEM_E
}

export const checkIfBundleApplies = (items: ItemType, item: ItemType) => {
    const itemD = items.find(item => item.name === NAMES.ITEM_D)
    const itemE = items.find(item => item.name === NAMES.ITEM_E)
    if (itemD?.quantity > 0 && itemE?.quantity > 0) {
        const diffInQuantity = Math.abs(itemD.quantity - itemE.quantity)
        const previousValue = itemD.subTotal + itemE.subTotal
        const minItem = itemD.quantity <= itemE.quantity ? itemD : itemE;
        if (diffInQuantity === 0) {
            item.subTotal = item.subTotal - previousValue + (itemD.quantity * 3)
        } else {
            item.subTotal = item.subTotal - previousValue + (minItem.quantity * 3) + (item.price * diffInQuantity)
        }
    }
}
