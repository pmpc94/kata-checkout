import { describe, expect, test } from 'vitest';
import { calculateSpecialPrice, checkIfBundleApplies } from '../../helper/index'
import { NAMES } from '@/consts';
import type { ItemType } from '@/types';

describe('calculateSpecialPrice function', () => {
    test('should calculate special price for item A correctly', () => {
        const itemA: ItemType = { name: NAMES.ITEM_A, price: 0.50, quantity: 3, subTotal: 0 };
        const result = calculateSpecialPrice(itemA)
        // no special price expected
        expect(result).toBe(1.50);
    });

    test('should calculate special price for item B correctly', () => {
        const itemB: ItemType = { name: NAMES.ITEM_B, price: 0.75, quantity: 4, subTotal: 0 };
        const result = calculateSpecialPrice(itemB)
        // 2 for 1.25
        expect(result).toBe(2.50);
    });

    test('should calculate special price for item C correctly', () => {
        const itemC: ItemType = { name: NAMES.ITEM_C, price: 0.25, quantity: 6, subTotal: 0 };
        const result = calculateSpecialPrice(itemC)
        // one free per 3
        expect(result).toBe(1);
    });

    test('should calculate special price for item D correctly', () => {
        const itemD: ItemType = { name: NAMES.ITEM_D, price: 1.50, quantity: 3, subTotal: 0 };
        const result = calculateSpecialPrice(itemD)
        // no special price expected
        expect(result).toBe(4.50);
    });

    test('should calculate special price for item E correctly', () => {
        const itemE: ItemType = { name: NAMES.ITEM_E, price: 2.0, quantity: 3, subTotal: 0 };
        const result = calculateSpecialPrice(itemE);
        // no special price expected
        expect(result).toBe(6.0);
    });

    test('should calculate subTotal with equal quantities', () => {
        const item: ItemType = { name: NAMES.ITEM_D, price: 1.5, quantity: 2, subTotal: 0 };
        const itemD: ItemType = { name: NAMES.ITEM_D, price: 1.5, quantity: 2, subTotal: 0 };
        const itemE: ItemType = { name: NAMES.ITEM_E, price: 2, quantity: 2, subTotal: 0 };
        const items: ItemType[] = [itemD, itemE];
        checkIfBundleApplies(items, item);
        expect(item.subTotal).toBe(6);
    });

    test('should calculate subTotal with different quantities', () => {
        const item: ItemType = { name: NAMES.ITEM_D, price: 1.5, quantity: 3, subTotal: 0 };
        const itemD: ItemType = { name: NAMES.ITEM_D, price: 1.5, quantity: 3, subTotal: 0 };
        const itemE: ItemType = { name: NAMES.ITEM_E, price: 2, quantity: 2, subTotal: 0 };
        const items: ItemType[] = [itemD, itemE];
        checkIfBundleApplies(items, item);
        expect(item.subTotal).toBe(7.5); 
    });
});
