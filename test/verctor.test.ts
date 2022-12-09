import {
    v2Length,
    v3Length,
    v2Sum,
    v3Sum,
    v2Sub,
    v3Sub,
    v2MulScalar,
    v3MulScalar,
    v2SetLength,
    v2Normalize,
    v3Normalize,
    v2DotProduct,
    v3DotProduct,
    v3CrossProduct
} from '../src/vector';
import { Vector2, Vector3 } from '../src/types';

describe('Vector Sum', () => {
    test('[1, 2] + [3, 4]', () => {
        const v1: Vector2 = [1, 2];
        const v2: Vector2 = [3, 4];
        expect(v2Sum(v1, v2)).toStrictEqual([4, 6]);
    });

    test('[-1, -2] + [3, 4]', () => {
        const v1: Vector2 = [-1, -2];
        const v2: Vector2 = [3, 4];
        expect(v2Sum(v1, v2)).toStrictEqual([2, 2]);
    });

    test('[1, 2] + [3, 4] + [5, 6]', () => {
        const v1: Vector2 = [1, 2];
        const v2: Vector2 = [3, 4];
        const v3: Vector2 = [5, 6];
        expect(v2Sum(v1, v2, v3)).toStrictEqual([9, 12]);
    });

    test('[1, 2] + [3, 4] + [5, 6] + [7, 8]', () => {
        const v1: Vector2 = [1, 2];
        const v2: Vector2 = [3, 4];
        const v3: Vector2 = [5, 6];
        const v4: Vector2 = [7, 8];
        expect(v2Sum(v1, v2, v3, v4)).toStrictEqual([16, 20]);
    });

    test('[1, 2, 3] + [3, 4, 4];', () => {
        const v1: Vector3 = [1, 2, 3];
        const v2: Vector3 = [3, 4, 4];
        expect(v3Sum(v1, v2)).toStrictEqual([4, 6, 7]);
    });

    test('[1, 2, 3] + [3, 4, 4] + [7, 8, 9]', () => {
        const v1: Vector3 = [1, 2, 3];
        const v2: Vector3 = [3, 4, 4];
        const v3: Vector3 = [7, 8, 9];
        expect(v3Sum(v1, v2, v3)).toStrictEqual([11, 14, 16]);
    });

    test('[1, 2, 3] + [3, 4, 4] + [7, 8, 9] + [10, 11, 12]', () => {
        const v1: Vector3 = [1, 2, 3];
        const v2: Vector3 = [3, 4, 4];
        const v3: Vector3 = [7, 8, 9];
        const v4: Vector3 = [10, 11, 12];
        expect(v3Sum(v1, v2, v3, v4)).toStrictEqual([21, 25, 28]);
    });
});

describe('Vector Sub', () => {
    test('[1, 2] - [3, 4]', () => {
        const v1: Vector2 = [1, 2];
        const v2: Vector2 = [3, 4];
        expect(v2Sub(v1, v2)).toStrictEqual([-2, -2]);
    });

    test('[-1, -2] - [3, 4]', () => {
        const v1: Vector2 = [-1, -2];
        const v2: Vector2 = [3, 4];
        expect(v2Sub(v1, v2)).toStrictEqual([-4, -6]);
    });

    test('[1, 2] - [3, 4] - [5, 6]', () => {
        const v1: Vector2 = [1, 2];
        const v2: Vector2 = [3, 4];
        const v3: Vector2 = [5, 6];
        expect(v2Sub(v1, v2, v3)).toStrictEqual([-7, -8]);
    });

    test('[1, 2] - [3, 4] - [5, 6] - [7, 8]', () => {
        const v1: Vector2 = [1, 2];
        const v2: Vector2 = [3, 4];
        const v3: Vector2 = [5, 6];
        const v4: Vector2 = [7, 8];
        expect(v2Sub(v1, v2, v3, v4)).toStrictEqual([-14, -16]);
    });

    test('[1, 2, 3] - [3, 4, 4]', () => {
        const v1: Vector3 = [1, 2, 3];
        const v2: Vector3 = [3, 4, 4];
        expect(v3Sub(v1, v2)).toStrictEqual([-2, -2, -1]);
    });

    test('[1,2,3] - [3,4,4] - [7,8,9]', () => {
        const v1: Vector3 = [1, 2, 3];
        const v2: Vector3 = [3, 4, 4];
        const v3: Vector3 = [7, 8, 9];
        expect(v3Sub(v1, v2, v3)).toStrictEqual([-9, -10, -10]);
    });

    test('[1,2,3] - [3,4,4] - [7,8,9] - [10,11,12]', () => {
        const v1: Vector3 = [1, 2, 3];
        const v2: Vector3 = [3, 4, 4];
        const v3: Vector3 = [7, 8, 9];
        const v4: Vector3 = [10, 11, 12];
        expect(v3Sub(v1, v2, v3, v4)).toStrictEqual([-19, -21, -22]);
    });
});

describe('Multiply vector by scalar', () => {
    test('[1, 2] * 2 => [2, 4]', () => {
        expect(v2MulScalar([1, 2], 2)).toStrictEqual([2, 4]);
    });

    test('[1, 2] * 0.5 => [0.5, 1]', () => {
        expect(v2MulScalar([1, 2], 0.5)).toStrictEqual([0.5, 1]);
    });

    test('[1, 2] * Math.PI => [3.141592653589793, 6.283185307179586]', () => {
        expect(v2MulScalar([1, 2], Math.PI)).toStrictEqual([3.141592653589793, 6.283185307179586]);
    });

    test('[1, 2] * Math.PI with 2 decimal places => [3.14, 6.28]', () => {
        expect(v2MulScalar([1, 2], Math.PI, 2)).toStrictEqual([3.14, 6.28]);
    });

    test('[1, 2, 3] * 2 => [2, 4, 6]', () => {
        expect(v3MulScalar([1, 2, 3], 2)).toStrictEqual([2, 4, 6]);
    });

    test('[1, 2, 3] * 0.5 => [0.5, 1, 1.5]', () => {
        expect(v3MulScalar([1, 2, 3], 0.5)).toStrictEqual([0.5, 1, 1.5]);
    });

    test('[1, 2, 3] * Math.PI => [3.141592653589793, 6.283185307179586, 9.42477796076938]', () => {
        expect(v3MulScalar([1, 2, 3], Math.PI)).toStrictEqual([3.141592653589793, 6.283185307179586, 9.42477796076938]);
    });

    test('[1, 2, 3] * Math.PI with 2 decimal places => [3.14, 6.28, 9.42]', () => {
        expect(v3MulScalar([1, 2, 3], Math.PI, 2)).toStrictEqual([3.14, 6.28, 9.42]);
    });
});

describe('Get Vector Length', () => {
    test('Length of [1,2} with 2 decimal places', () => {
        expect(v2Length([1, 2])).toStrictEqual(2.23606797749979);
    });

    test('Length of [1,2] with 2 decimal places', () => {
        expect(v2Length([1, 2], 2)).toStrictEqual(2.24);
    });

    test('Length of [1,2,3]', () => {
        expect(v3Length([1, 2, 3])).toStrictEqual(3.7416573867739413);
    });

    test('Length of [1,2,3] with 2 decimal places', () => {
        expect(v3Length([1, 2, 3], 2)).toStrictEqual(3.74);
    });
});

describe('Set Vector Length', () => {
    test('Set length of [1, 2] to be 10 => [4.4721359549995805, 8.94427190999916]', () => {
        expect(v2SetLength([1, 2], 10)).toStrictEqual([4.4721359549995805, 8.94427190999916]);
    });

    test('Set length of [1, 2] to be 10 with 2 decimal places => [4.47, 8.94]', () => {
        expect(v2SetLength([1, 2], 10, 2)).toStrictEqual([4.47, 8.94]);
    });

    test('Set length of [1, 2] to be 0 => [0, 0]', () => {
        expect(v2SetLength([1, 2], 0)).toStrictEqual([0, 0]);
    });

    test('Set length of [1, 2] to be -1 => [-0.44721359549995804, -0.8944271909999159]', () => {
        expect(v2SetLength([1, 2], -1)).toStrictEqual([-0.44721359549995804, -0.8944271909999159]);
    });
});

describe('Normalize Vector', function () {

    test('Normalize [10, 20] => [0.4472135954999579, 0.8944271909999159]', () => {
        expect(v2Normalize([10, 20])).toStrictEqual([0.4472135954999579, 0.8944271909999159]);
    });

    test('Normalize [10, 20] with 2 decimal places => [0.45, 0.89]', () => {
        expect(v2Normalize([10, 20], 2)).toStrictEqual([0.45, 0.89]);
    });

    test('Normalize [1, 1] => [0.7071067811865475, 0.7071067811865475]', () => {
        expect(v2Normalize([1, 1])).toStrictEqual([0.7071067811865475, 0.7071067811865475]);
    });

    test('Normalize [0, 1] => [0, 1]', () => {
        expect(v2Normalize([0, 1])).toStrictEqual([0, 1]);
    });

    test('Normalize [0, 0] => [0, 0]', () => {
        expect(v2Normalize([0, 0])).toStrictEqual([0, 0]);
    });

    test('Normalize [10, 20, 30] => [0.2672612419124244, 0.5345224838248488, 0.8017837257372731]', () => {
        expect(v3Normalize([10, 20, 30])).toStrictEqual([0.2672612419124244, 0.5345224838248488, 0.8017837257372731]);
    });

    test('Normalize [10, 20, 30] with 2 decimal places => [0.27, 0.53, 0.8]', () => {
        expect(v3Normalize([10, 20, 30], 2)).toStrictEqual([0.27, 0.53, 0.8]);
    });

    test('Normalize [1, 1, 0] => [0.7071067811865475, 0.7071067811865475, 0]', () => {
        expect(v3Normalize([1, 1, 0])).toStrictEqual([0.7071067811865475, 0.7071067811865475, 0]);
    });

    test('Normalize [0, 1, 1] => [0, 1, 0.7071067811865475]', () => {
        expect(v3Normalize([0, 1, 1])).toStrictEqual([0, 0.7071067811865475, 0.7071067811865475]);
    });

    test('Normalize [0, 0, 0] => [0, 0, 0]', () => {
        expect(v3Normalize([0, 0, 0])).toStrictEqual([0, 0, 0]);
    });
});

describe('Vectors Dot Product', () => {

    test('Dot product of [1, 2] and [3, 4] is 11', () => {
        const v1: Vector2 = [1, 2];
        const v2: Vector2 = [3, 4];
        expect(v2DotProduct(v1, v2)).toStrictEqual(11);
    });

    test('Dot product of [1.1234, 2.35678] and [3.1265, 4.91355] with 2 decimal places is 15.09', () => {
        const v1: Vector2 = [1.1234, 2.35678];
        const v2: Vector2 = [3.1265, 4.91355];
        expect(v2DotProduct(v1, v2, 2)).toStrictEqual(15.09);
    });

    test('Dot product of [0, 25] and [10, 28] is 11', () => {
        const v1: Vector2 = [0, 25];
        const v2: Vector2 = [10, 28];
        expect(v2DotProduct(v1, v2)).toStrictEqual(700);
    });

    test('Dot product of [0, 0] and [0, 0] is 0', () => {
        const v1: Vector2 = [0, 0];
        const v2: Vector2 = [0, 0];
        expect(v2DotProduct(v1, v2)).toStrictEqual(0);
    });

    test('Dot product of [1, 2, 3] and [4, 5, 6] is 32', () => {
        const v1: Vector3 = [1, 2, 3];
        const v2: Vector3 = [4, 5, 6];
        expect(v3DotProduct(v1, v2)).toStrictEqual(32);
    });

    test('Dot product of [1.73845, 2.88465, 3.000111] and [4.1163, 5.5501, 6.120777] with 2 decimal places is 41.53', () => {
        const v1: Vector3 = [1.73845, 2.88465, 3.000111];
        const v2: Vector3 = [4.1163, 5.5501, 6.120777];
        expect(v3DotProduct(v1, v2, 2)).toStrictEqual(41.53);
    });

    test('Dot product of [0, 25, 1.5] and [10, 28, 9] is 713.5', () => {
        const v1: Vector3 = [0, 25, 1.5];
        const v2: Vector3 = [10, 28, 9];
        expect(v3DotProduct(v1, v2)).toStrictEqual(713.5);
    });

    test('Dot product of [0, 0, 0] and [0, 0, 0] is 0', () => {
        const v1: Vector3 = [0, 0, 0];
        const v2: Vector3 = [0, 0, 0];
        expect(v3DotProduct(v1, v2)).toStrictEqual(0);
    });
});

describe('Vectors Cross Product', () => {

    test('Cross product of [1, 2, 3] and [4, 5, 6] is [-3, 6, -3]', () => {
        const v1: Vector3 = [1, 2, 3];
        const v2: Vector3 = [4, 5, 6];
        expect(v3CrossProduct(v1, v2)).toStrictEqual([-3, 6, -3]);
    });

    test('Cross product of [0, 0, 0] and [0, 0, 0] is [0, 0, 0]', () => {
        const v1: Vector3 = [0, 0, 0];
        const v2: Vector3 = [0, 0, 0];
        expect(v3CrossProduct(v1, v2)).toStrictEqual([0, 0, 0]);
    });

    test('Cross product of [1.1143, 2.1205, 3.57294] and [4.8294, 5.0001111, 6.48634] with 2 decimal places is [-4.11, 10.03, -4.67]', () => {
        const v1: Vector3 = [1.1143, 2.1205, 3.57294];
        const v2: Vector3 = [4.8294, 5.0001111, 6.48634];
        expect(v3CrossProduct(v1, v2, 2)).toStrictEqual([-4.11, 10.03, -4.67]);
    });
});