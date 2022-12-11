import { equationSystem2 } from '../src/equations';
import { Vector3 } from '../types/types';

describe('System of equation of the second degree.', () => {
    test('3x + 2y = 7; -6x + 6y = 6', () => {
        const equation1: Vector3 = [3, 2, 7];
        const equation2: Vector3 = [-6, 6, 6];
        expect(equationSystem2(equation1, equation2)).toStrictEqual([1, 2]);
    });
});