import { m3RotationZ, m3RotationY, m3RotationX, m2Rotation } from '../src/matrix-transformations';

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