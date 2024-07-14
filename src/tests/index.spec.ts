import { describe, expect, test } from 'vitest';
import { calculateSpecialPrice } from '../helper/index'
import { NAMES } from '@/consts';

describe('calculateSpecialPrice function', () => {
    test('should calculate special price for item A correctly', () => {
        const itemA = { name: NAMES.ITEM_A, price: 0.50, quantity: 3, subTotal: 0 };
        const result = calculateSpecialPrice(itemA, []);
        // no special price expected
        expect(result).toBe(1.50);
    });

    test('should calculate special price for item B correctly', () => {
        const itemB = { name: NAMES.ITEM_B, price: 0.75, quantity: 4, subTotal: 0 };
        const result = calculateSpecialPrice(itemB, []);
        // 2 for 1.25
        expect(result).toBe(2.50);
    });

    test('should calculate special price for item C correctly', () => {
        const itemC = { name: NAMES.ITEM_C, price: 0.25, quantity: 6, subTotal: 0 };
        const result = calculateSpecialPrice(itemC, []);
        // one free per 3
        expect(result).toBe(1);
    });
});
