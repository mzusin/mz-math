import { m2MulScalar, m3MulScalar } from '../src/matrix';
import { Matrix2, Matrix3 } from '../src/types';

describe('Multiply matrix by scalar', () => {
    test('test #1', () => {
        const m2: Matrix2 = [
            [1, 2],
            [3, 4],
        ];

        expect(m2MulScalar(m2, 5)).toStrictEqual([
            [5, 10],
            [15, 20],
        ]);
    });

    test('test #2', () => {
        const m2: Matrix2 = [
            [0, 0],
            [0, 0],
        ];

        expect(m2MulScalar(m2, 5)).toStrictEqual([
            [0, 0],
            [0, 0],
        ]);
    });

    test('test #3', () => {
        const m2: Matrix2 = [
            [1.12345, 12.66746776],
            [15.74432, -12.345345],
        ];

        expect(m2MulScalar(m2, 10, 2)).toStrictEqual([
            [11.23, 126.67],
            [157.44, -123.45],
        ]);
    });

    test('test #4', () => {
        const m3: Matrix3 = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];

        expect(m3MulScalar(m3, 2)).toStrictEqual([
            [2, 4, 6],
            [8, 10, 12],
            [14, 16, 18],
        ]);
    });

    test('test #5', () => {
        const m3: Matrix3 = [
            [1, 2, 3],
            [4, 5, 6],
        ];

        expect(m3MulScalar(m3, 2)).toStrictEqual([
            [2, 4, 6],
            [8, 10, 12],
        ]);
    });

    test('test #6', () => {
        const m3: Matrix3 = [
            [1, 2, 3],
            [4, 5, 6],
        ];

        expect(m3MulScalar(m3, 1.5123123, 1)).toStrictEqual([
            [1.5, 3, 4.5],
            [6, 7.6, 9.1],
        ]);
    });
});