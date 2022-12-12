import { equationSystem2, equationSystem3, equationSystemN } from '../src/equations';
import { Vector3, Vector, Matrix } from '../types/types';

describe('System of equations', () => {
    test(`
        3x + 2y = 7
        -6x + 6y = 6`, () => {
        const equation1: Vector3 = [3, 2, 7];
        const equation2: Vector3 = [-6, 6, 6];
        expect(equationSystem2(equation1, equation2)).toStrictEqual([1, 2]);
    });

    test(`
        2x + y + 2z = -2
        -2x + 2y -z = -5
        4x + y + 2x = 0`, () => {
        const equation1: Vector = [2, 1, 2, -2];
        const equation2: Vector = [-2, 2, -1, -5];
        const equation3: Vector = [4, 1, 2, 0];
        expect(equationSystem3(equation1, equation2, equation3)).toStrictEqual([1, -2, -1]);
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
        expect(equationSystemN(equations)).toStrictEqual([-0.9999999999999996, 2, 1, 3]);
    });

    test(`
        2s - 5t = 7
        -2s + 4t = -6`, () => {
        const equation1: Vector3 = [2, -5, 7];
        const equation2: Vector3 = [-2, 4, -6];
        expect(equationSystem2(equation1, equation2)).toStrictEqual([1, -1]);
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
        expect(equationSystemN(parameters, 2)).toStrictEqual([-1, 2, 1, 3]);
    });
});