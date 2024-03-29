import {
    vLength,
    v2Length,
    v3Length,
    vSum,
    v2Sum,
    v3Sum,
    vSub,
    v2Sub,
    v3Sub,
    vMulScalar,
    v2MulScalar,
    v3MulScalar,
    v2SetLength,
    vNormalize,
    v2Normalize,
    v3Normalize,
    vDotProduct,
    v2DotProduct,
    v3DotProduct,
    v3CrossProduct, v2, v3, vN,
    vEqual, v2DivideScalar, v3DivideScalar, vDivideScalar,
    v2GetNormal
} from '../src/main/linear-algebra/vector';
import { Vector, Vector2, Vector3 } from '../src/types';

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

    test('[3, 4] + [5, 6]', () => {
        const v1: Vector2 = [3, 4];
        const v2: Vector2 = [5, 6];
        expect(v2Sum(v1, v2)).toStrictEqual([8, 10]);
    });

    test('[3.12456, 4.56734] + [5.12323, 6.001234] with 2 decimal places', () => {
        const v1: Vector2 = [3.12456, 4.56734];
        const v2: Vector2 = [5.12323, 6.001234];
        expect(v2Sum(v1, v2, 2)).toStrictEqual([8.25, 10.57]);
    });

    test('[1, 2, 3] + [3, 4, 4];', () => {
        const v1: Vector3 = [1, 2, 3];
        const v2: Vector3 = [3, 4, 4];
        expect(v3Sum(v1, v2)).toStrictEqual([4, 6, 7]);
    });

    test('[3, 4, 5] + [6, 7, 8]', () => {
        const v1: Vector3 = [3, 4, 5];
        const v2: Vector3 = [6, 7, 8];
        expect(v3Sum(v1, v2)).toStrictEqual([9, 11, 13]);
    });

    test('[3.2345, 4.0013234, 5.2523453] + [6.111, 7.222, 8.333] with 2 decimal places', () => {
        const v1: Vector3 = [3.2345, 4.0013234, 5.2523453];
        const v2: Vector3 = [6.111, 7.222, 8.333];
        expect(v3Sum(v1, v2, 2)).toStrictEqual([9.35, 11.22, 13.59]);
    });

    test('[1, 2, 3, 4] + [5, 6, 7, 8]', () => {
        const v1: Vector = [1, 2, 3, 4];
        const v2: Vector = [5, 6, 7, 8];
        expect(vSum(v1, v2)).toStrictEqual([6, 8, 10, 12]);
    });
});

describe('Vector Sub', () => {
    test('[1, 2] - [3, 4]', () => {
        const v1: Vector2 = [1, 2];
        const v2: Vector2 = [3, 4];
        expect(v2Sub(v1, v2)).toStrictEqual([-2, -2]);
    });

    test('[-1.125324, -2.23453245] - [3.2345, 4.3574365] with 2 decimal places', () => {
        const v1: Vector2 = [-1.125324, -2.23453245];
        const v2: Vector2 = [3.2345, 4.3574365];
        expect(v2Sub(v1, v2, 2)).toStrictEqual([-4.36, -6.59]);
    });

    test('[-1, -2] - [3, 4]', () => {
        const v1: Vector2 = [-1, -2];
        const v2: Vector2 = [3, 4];
        expect(v2Sub(v1, v2)).toStrictEqual([-4, -6]);
    });

    test('[1, 2, 3] - [3, 4, 4]', () => {
        const v1: Vector3 = [1, 2, 3];
        const v2: Vector3 = [3, 4, 4];
        expect(v3Sub(v1, v2)).toStrictEqual([-2, -2, -1]);
    });

    test('[1.12754, 2.999345, 3.34653456] - [7.352345, 8.35734, 9.2345] with 2 decimal places', () => {
        const v1: Vector3 = [1.12754, 2.999345, 3.34653456];
        const v2: Vector3 = [7.352345, 8.35734, 9.2345];
        expect(v3Sub(v1, v2, 2)).toStrictEqual([-6.22, -5.36, -5.89]);
    });

    test('[1, 2, 3, 4] - [5, 6, 7, 8]', () => {
        const v1: Vector = [1, 2, 3, 4];
        const v2: Vector = [5, 6, 7, 8];
        expect(vSub(v1, v2)).toStrictEqual([-4, -4, -4, -4]);
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

    test('[1, 2, 3, 4] * 2 => [2, 4, 6, 8]', () => {
        expect(vMulScalar([1, 2, 3, 4], 2)).toStrictEqual([2, 4, 6, 8]);
    });
});

describe('Divide vector by scalar', () => {
    test('[1, 2] / 2 => [0.5, 1]', () => {
        expect(v2DivideScalar([1, 2], 2)).toStrictEqual([0.5, 1]);
    });

    test('[1, 2] / 0.5 => [2, 4]', () => {
        expect(v2DivideScalar([1, 2], 0.5)).toStrictEqual([2, 4]);
    });

    test('[1, 2] / Math.PI => [0.3183098861837907, 0.6366197723675814', () => {
        expect(v2DivideScalar([1, 2], Math.PI)).toStrictEqual([0.3183098861837907, 0.6366197723675814]);
    });

    test('[1, 2] / Math.PI with 2 decimal places => [0.32, 0.64]', () => {
        expect(v2DivideScalar([1, 2], Math.PI, 2)).toStrictEqual([0.32, 0.64]);
    });

    test('[1, 2, 3] / 2 => [0.5, 1, 1.5]', () => {
        expect(v3DivideScalar([1, 2, 3], 2)).toStrictEqual([0.5, 1, 1.5]);
    });

    test('[1, 2, 3] / 0.5 => [2, 4, 6]', () => {
        expect(v3DivideScalar([1, 2, 3], 0.5)).toStrictEqual([2, 4, 6]);
    });

    test('[1, 2, 3] / Math.PI => [0.3183098861837907, 0.6366197723675814, 0.954929658551372]', () => {
        expect(v3DivideScalar([1, 2, 3], Math.PI)).toStrictEqual([0.3183098861837907, 0.6366197723675814, 0.954929658551372]);
    });

    test('[1, 2, 3] / Math.PI with 2 decimal places => [0.32, 0.64, 0.95]', () => {
        expect(v3DivideScalar([1, 2, 3], Math.PI, 2)).toStrictEqual([0.32, 0.64, 0.95]);
    });

    test('[1, 2, 3, 4] / 2 => [0.5, 1, 1.5, 2]', () => {
        expect(vDivideScalar([1, 2, 3, 4], 2)).toStrictEqual([0.5, 1, 1.5, 2]);
    });
});

describe('Get Vector Length', () => {
    test('Length of [1, 2]', () => {
        expect(v2Length([1, 2])).toStrictEqual(2.23606797749979);
    });

    test('Length of [1, 2] with 2 decimal places', () => {
        expect(v2Length([1, 2], 2)).toStrictEqual(2.24);
    });

    test('Length of [1, 2, 3]', () => {
        expect(v3Length([1, 2, 3])).toStrictEqual(3.7416573867739413);
    });

    test('Length of [1, 2, 3] with 2 decimal places', () => {
        expect(v3Length([1, 2, 3], 2)).toStrictEqual(3.74);
    });

    test('Length of [1, 2, 3, 4]', () => {
        expect(vLength([1, 2, 3, 4])).toStrictEqual(5.477225575051661);
    });

    test('Length of [1, 2, 3, 4] with 2 decimal places', () => {
        expect(vLength([1, 2, 3, 4], 2)).toStrictEqual(5.48);
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

    test('Normalize [10, 20, 30, 40] => [0.18257418583505536, 0.3651483716701107, 0.5477225575051661, 0.7302967433402214]', () => {
        expect(vNormalize( [10, 20, 30, 40])).toStrictEqual([0.18257418583505536, 0.3651483716701107, 0.5477225575051661, 0.7302967433402214]);
    });

    test('Normalize [10, 20, 30, 40] with 2 decimal places', () => {
        expect(vNormalize( [10, 20, 30, 40], 2)).toStrictEqual([0.18, 0.37, 0.55, 0.73]);
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

    test('Dot product of [1, 2, 3, 4] and [5, 6, 7, 8] is 70', () => {
        const v1: Vector = [1, 2, 3, 4];
        const v2: Vector = [5, 6, 7, 8];
        expect(vDotProduct(v1, v2)).toStrictEqual(70);
    });

    test('Dot product of [1.123, 2.123, 3.123, 4.123] and [5.123, 6.123, 7.123, 8.123] with 1 decimal place is 70', () => {
        const v1: Vector = [1.123, 2.123, 3.123, 4.123];
        const v2: Vector = [5.123, 6.123, 7.123, 8.123];
        expect(vDotProduct(v1, v2, 1)).toStrictEqual(74.5);
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

describe('Vectors Init Helpers', () => {
    test('v2', () => {
        expect(v2()).toStrictEqual([0, 0]);
    });

    test('v2 with default value 5', () => {
        expect(v2(5)).toStrictEqual([5, 5]);
    });

    test('v3', () => {
        expect(v3()).toStrictEqual([0, 0, 0]);
    });

    test('v3 with default value 15', () => {
        expect(v3(15)).toStrictEqual([15, 15, 15]);
    });

    test('vN with N = 5', () => {
        expect(vN(5)).toStrictEqual([0, 0, 0, 0, 0]);
    });

    test('vN with N = 5 and default value = 1.5', () => {
        expect(vN(5, 1.5)).toStrictEqual([1.5, 1.5, 1.5, 1.5, 1.5]);
    });
});

describe('Vectors Equality', () => {
    test('[1, 0] and [1, 0] => true', () => {
        expect(vEqual([1, 0], [1, 0])).toStrictEqual(true);
    });

    test('[1, 0] and [0, 1] => false', () => {
        expect(vEqual([1, 0], [0, 1])).toStrictEqual(false);
    });

    test('[1, 0] and [1, 0, 0] => false', () => {
        expect(vEqual([1, 0] , [1, 0, 0])).toStrictEqual(false);
    });

    test('[0, 0] and [0, 0, 0] => false', () => {
        expect(vEqual([0, 0] , [0, 0, 0])).toStrictEqual(false);
    });

    test('[0, 0, 0] and [0, 0, 0] => true', () => {
        expect(vEqual([0, 0, 0] , [0, 0, 0])).toStrictEqual(true);
    });
});

describe('Get Normal', () => {

    test('v2GetNormal([10, 20], [20, 30])', () => {
        const vector1: Vector2 = [10, 20];
        const vector2: Vector2 = [20, 30];

        expect(v2GetNormal(vector1, vector2)).toStrictEqual([-10, 10]);
    });

});