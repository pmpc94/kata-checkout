import { NAMES, PRICES } from '@/consts'
import type { ItemType } from '@/types'

export const calculateSpecialPrice = (item: ItemType, bundleItems: ItemType[] = []): number => {
    switch (item.name) {
        case NAMES.ITEM_A: item.subTotal = calculateSpecialItemA(item.quantity);
            break
        case NAMES.ITEM_B: item.subTotal = calculateSpecialItemB(item.quantity);
            break
        case NAMES.ITEM_C: item.subTotal = calculateSpecialItemC(item.quantity);
            break
        case NAMES.ITEM_D: item.subTotal = calculateSpecialItemDE(item, bundleItems);
            break
        case NAMES.ITEM_E: item.subTotal = calculateSpecialItemDE(item, bundleItems);
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

const calculateSpecialItemDE = (item: ItemType, bundleItems: ItemType[]) => {
    console.log('asd', bundleItems.length)
    if (bundleItems.length === 2) {
        const itemD = bundleItems.find(item => item.name === NAMES.ITEM_D)
        const itemE = bundleItems.find(item => item.name === NAMES.ITEM_E)
        const differenceInQuantity = Math.abs(itemD.quantity - itemE.quantity)
        const lowestQuantityItem = bundleItems.find(item => item.quantity === Math.min(itemD?.quantity, itemE.quantity))
        let highestQuantityItem
        if (lowestQuantityItem.name === NAMES.ITEM_D) {
            highestQuantityItem = itemE
        } else if (lowestQuantityItem.name === NAMES.ITEM_E) {
            highestQuantityItem = itemD
        }
        console.log('aaa', lowestQuantityItem.quantity * 3 + highestQuantityItem.price * differenceInQuantity)
        console.log('asd', (highestQuantityItem.price - lowestQuantityItem.price))
        return (lowestQuantityItem.quantity * 3 + highestQuantityItem.price * differenceInQuantity) - (highestQuantityItem.price - 1)
    } 
    return item.quantity * item.price
}
