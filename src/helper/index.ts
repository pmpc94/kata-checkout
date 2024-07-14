import { NAMES, PRICES, SPECIAL_PROMO } from '@/consts'
import type { ItemType } from '@/types'

export const calculateSpecialPrice = (items: ItemType, item: ItemType): number => {
    switch (item.name) {
        case NAMES.ITEM_A: item.subTotal = calculateNormalPrice(item);
            break
        case NAMES.ITEM_B: item.subTotal = calculateSpecialItemB(item.quantity);
            break
        case NAMES.ITEM_C: item.subTotal = calculateSpecialItemC(item.quantity);
            break
        case NAMES.ITEM_D: item.subTotal = calculateSpecialBundle(items, item);
            break
        case NAMES.ITEM_E: item.subTotal = calculateSpecialBundle(items, item);
            break
    }

    return item.subTotal
}

const calculateNormalPrice = (item: ItemType) => {
    return item.quantity * PRICES[`ITEM_${item.name}`]
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

export const calculateSpecialBundle = (items: ItemType, item: ItemType) => {
    const itemD = items.find(item => item.name === NAMES.ITEM_D)
    const itemE = items.find(item => item.name === NAMES.ITEM_E)
    if (itemD?.quantity > 0 && itemE?.quantity > 0) {
        const diffInQuantity = Math.abs(itemD.quantity - itemE.quantity)
        const previousValue = itemD.subTotal + itemE.subTotal
        const minItem = itemD.quantity <= itemE.quantity ? itemD : itemE;
        if (diffInQuantity === 0) {
            return item.subTotal - previousValue + (itemD.quantity * SPECIAL_PROMO.PRICE)
        } else {
            return item.subTotal - previousValue + (minItem.quantity * SPECIAL_PROMO.PRICE) + (item.price * diffInQuantity)
        }
    }
    return calculateNormalPrice(item)
}
