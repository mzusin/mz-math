import {
    linearEquation,
    linearEquationSystem2,
    linearEquationSystem3,
    linearEquationSystemN
} from '../src/main/equations/linear-equations';
import { Vector3, Vector, Matrix } from '../types/types';
import { quadraticEquation } from '../src/main/equations/quadratic-equations';

describe('Equations', () => {

    describe('Linear equation', () => {

        test(`x + 3 = 5`, () => {
            const equation: Vector3 = [1, 3, 5];
            expect(linearEquation(equation)).toStrictEqual(2);
        });

        test(`2x + 3 = 9`, () => {
            const equation: Vector3 = [2, 3, 9];
            expect(linearEquation(equation)).toStrictEqual(3);
        });

        test(`x + 3 = 0`, () => {
            const equation: Vector3 = [1, 3, 0];
            expect(linearEquation(equation)).toStrictEqual(-3);
        });

        test(`x + 0 = 0`, () => {
            const equation: Vector3 = [1, 0, 0];
            expect(linearEquation(equation)).toStrictEqual(0);
        });

        test(`a = 0`, () => {
            const equation: Vector3 = [0, 0, 0];
            expect(linearEquation(equation)).toStrictEqual(Infinity);
        });

        test(`0, 5, 6`, () => {
            const equation: Vector3 = [0, 5, 6];
            expect(linearEquation(equation)).toStrictEqual(NaN);
        });
    });

    describe('System of equations', () => {
        test(`
        3x + 2y = 7
        -6x + 6y = 6`, () => {
            const equation1: Vector3 = [3, 2, 7];
            const equation2: Vector3 = [-6, 6, 6];
            expect(linearEquationSystem2(equation1, equation2)).toStrictEqual([1, 2]);
        });

        test(`
        2x + y + 2z = -2
        -2x + 2y -z = -5
        4x + y + 2x = 0`, () => {
            const equation1: Vector = [2, 1, 2, -2];
            const equation2: Vector = [-2, 2, -1, -5];
            const equation3: Vector = [4, 1, 2, 0];
            expect(linearEquationSystem3(equation1, equation2, equation3)).toStrictEqual([1, -2, -1]);
        });

        test(`
        y + z - 2w = -3
        x + 2y - z = 2
        2x + 4y + z - 3w = -2
        x - 4y - 7z - w = -19
        `, () => {
            const equations: Matrix = [
                [0, 1, 1, -2, -3],
                [1, 2, -1, 0, 2],
                [2, 4, 1, -3, -2],
                [1, -4, -7, -1, -19],
            ];
            expect(linearEquationSystemN(equations)).toStrictEqual([-0.9999999999999996, 2, 1, 3]);
        });

        test(`
        2s - 5t = 7
        -2s + 4t = -6`, () => {
            const equation1: Vector3 = [2, -5, 7];
            const equation2: Vector3 = [-2, 4, -6];
            expect(linearEquationSystem2(equation1, equation2)).toStrictEqual([1, -1]);
        });

        test(`
        y + z - 2w = -3
        x + 2y - z = 2
        2x + 4y + z - 3w = -2
        x - 4y - 7z - w = -19 with round to 2
        `, () => {
            const parameters: Matrix = [
                [0, 1, 1, -2, -3],
                [1, 2, -1, 0, 2],
                [2, 4, 1, -3, -2],
                [1, -4, -7, -1, -19],
            ];
            expect(linearEquationSystemN(parameters, 2)).toStrictEqual([-1, 2, 1, 3]);
        });
    });

    describe('Quadratic equation', () => {

        test(`-6x^2 = 0`, () => {
            const equation: Vector = [-6, 0, 0, 0];
            expect(quadraticEquation(equation)).toStrictEqual([0]);
        });

        test(`8x^2 + 5 = 0`, () => {
            const equation: Vector = [8, 0, 5, 0];
            expect(quadraticEquation(equation)).toStrictEqual([]);
        });

        test(`-4x^2 + 28x - 49 = 0`, () => {
            const equation: Vector = [-4, 28, -49, 0];
            expect(quadraticEquation(equation)).toStrictEqual([3.5]);
        });

        test(`x^2 - x = 0`, () => {
            const equation: Vector = [1, -1, 0, 0];
            expect(quadraticEquation(equation)).toStrictEqual([1, 0]);
        });

        test(`3x^2 - 4x + 94 = 0`, () => {
            const equation: Vector = [3, -4, 94, 0];
            expect(quadraticEquation(equation)).toStrictEqual([]);
        });

        test(`x^2 - 10 = 39`, () => {
            const equation: Vector = [1, 0, -10, 39];
            expect(quadraticEquation(equation)).toStrictEqual([7, -7]);
        });

        test(`-6x^2 + 54 = 0`, () => {
            const equation: Vector = [-6, 0, 54, 0];
            expect(quadraticEquation(equation)).toStrictEqual([-3, 3]);
        });

        test(`0.5x^2 + 0.125x = 0`, () => {
            const equation: Vector = [0.5, 0.125, 0, 0];
            expect(quadraticEquation(equation)).toStrictEqual([0, -0.25]);
        });
    });
});