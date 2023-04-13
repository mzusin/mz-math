import { dxPolynomial } from '../src/main/derivative';

describe('Derivative', () => {

    describe('Polynomial', () => {

        test('y = 2, x = 5', () => {
            expect(dxPolynomial(5, [[2, 0]])).toStrictEqual(0);
        });

        test('y = 2x, x = 5', () => {
            expect(dxPolynomial(5, [[2, 1]])).toStrictEqual(2);
        });

        test('y = 5x^3 + 9x^2 + 7x + 3, x = 2', () => {
            expect(dxPolynomial(2, [[5, 3], [9, 2], [7, 1], [3, 0]])).toStrictEqual(103);
        });

        test('y = 3x+2, x = 10', () => {
            expect(dxPolynomial(10, [[3, 1], [2, 0]])).toStrictEqual(3);
        });

        test('y = 5x^3 + 9x^2 + 7x + 3, x = 2', () => {
            expect(dxPolynomial(2, [[5, 3], [9, 2], [7, 1], [3, 0]])).toStrictEqual(103);
        });

        test('y = 5x^(1/3), x = 2', () => {
            expect(dxPolynomial(2, [[5, 1/3]], 2)).toStrictEqual(1.05);
        });

        test('y = 5x^(-1/3), x = 2', () => {
            expect(dxPolynomial(2, [[5, -1/3]], 2)).toStrictEqual(-0.66);
        });

    });

});