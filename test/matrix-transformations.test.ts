import { m3RotationZ, m3RotationY, m3RotationX, m2Rotation, m2hToCSS, m2ToCSS, m2hToCSS3d } from '../src/matrix-transformations';
import { Matrix3, Matrix2 } from '../src/types';

describe('Rotation', () => {
    test('2d rotation by 90 degrees about the origin with 2 decimal places', () => {
        expect(m2Rotation(Math.PI/2, true, 2)).toStrictEqual([
            [0, -1],
            [1, 0],
        ]);
    });

    test('2d rotation by 180 degrees about the origin with 2 decimal places', () => {
        expect(m2Rotation(Math.PI, true, 2)).toStrictEqual([
            [-1, -0],
            [0, -1],
        ]);
    });

    test('2d rotation by 270 degrees about the origin with 2 decimal places', () => {
        expect(m2Rotation(Math.PI*1.5, true, 2)).toStrictEqual([
            [-0, 1],
            [-1, -0],
        ]);
    });

    test('3d rotation by 90 degrees about z-axis with 2 decimal places', () => {
        expect(m3RotationZ(Math.PI/2, true, 2)).toStrictEqual([
            [0, -1, 0],
            [1, 0, 0],
            [0, 0, 1],
        ]);
    });

    test('3d rotation by 90 degrees about y-axis with 2 decimal places', () => {
        expect(m3RotationY(Math.PI/2, true, 2)).toStrictEqual([
            [0, 0, 1],
            [0, 1, 0],
            [-1, 0, 0],
        ]);
    });

    test('3d rotation by 90 degrees about x-axis with 2 decimal places', () => {
        expect(m3RotationX(Math.PI/2, true, 2)).toStrictEqual([
            [1, 0, 0],
            [0, 0, -1],
            [0, 1, 0],
        ]);
    });
});

describe('Matrix to CSS', () => {
    test(`[
            [1, 2, 0],
            [3, 4, 0],
            [0, 0, 1],
        ] to matrix3d() function`, () => {
        const mat: Matrix3 = [
            [1, 2, 0],
            [3, 4, 0],
            [0, 0, 1],
        ];
        expect(m2hToCSS3d(mat)).toStrictEqual('matrix3d(1, 3, 0, 0, 2, 4, 0, 0, 0, 0, 1, 0, 0, 4, 0, 1)');
    });

    test(`[
            [1, 2, 0],
            [3, 4, 0],
            [0, 0, 1],
        ] to matrix() function`, () => {
        const mat: Matrix3 = [
            [1, 2, 0],
            [3, 4, 0],
            [0, 0, 1],
        ];
        expect(m2hToCSS(mat)).toStrictEqual('matrix(1, 3, 2, 4, 0, 4)');
    });

    test(`[
            [1, 2],
            [3, 4],
        ] to matrix() function`, () => {
        const mat: Matrix2 = [
            [1, 2],
            [3, 4],
        ];
        expect(m2ToCSS(mat)).toStrictEqual('matrix(1, 3, 2, 4, 0, 0)');
    });
});