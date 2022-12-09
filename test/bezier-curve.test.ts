import { v2QuadraticBezierCurve, v3QuadraticBezierCurve, v2CubicBezierCurve, v3CubicBezierCurve } from '../src/bezier-curve';

describe('Get a point on a quadratic Bézier curve', () => {
    test('test #1', () => {
        const v2 = v2QuadraticBezierCurve(
            0.5,
            { x: 0, y: 100 },
            { x: 50, y: 0 },
            { x: 100, y: 100 }
        );
        expect(v2).toStrictEqual({ x: 50, y: 50 });
    });

    test('test #2', () => {
        const v2 = v2QuadraticBezierCurve(
            0,
            { x: 0, y: 100 },
            { x: 50, y: 0 },
            { x: 100, y: 100 }
        );
        expect(v2).toStrictEqual({ x: 0, y: 100 });
    });

    test('test #3', () => {
        const v2 = v2QuadraticBezierCurve(
            1,
            { x: 0, y: 100 },
            { x: 50, y: 0 },
            { x: 100, y: 100 }
        );
        expect(v2).toStrictEqual({ x: 100, y: 100 });
    });

    test('test #4', () => {
        const v3 = v3QuadraticBezierCurve(
            0.5,
            { x: 0, y: 100, z: 0 },
            { x: 50, y: 0, z: 0 },
            { x: 100, y: 100, z: 0 }
        );
        expect(v3).toStrictEqual({ x: 50, y: 50, z: 0 });
    });

    test('test #5', () => {
        const v3 = v3QuadraticBezierCurve(
            0,
            { x: 0, y: 100, z: 0 },
            { x: 50, y: 0, z: 0 },
            { x: 100, y: 100, z: 0 }
        );
        expect(v3).toStrictEqual({ x: 0, y: 100, z: 0 });
    });

    test('test #6', () => {
        const v3 = v3QuadraticBezierCurve(
            1,
            { x: 0, y: 100, z: 0 },
            { x: 50, y: 0, z: 0 },
            { x: 100, y: 100, z: 0 }
        );
        expect(v3).toStrictEqual({ x: 100, y: 100, z: 0 });
    });
});

describe('Get a point on a cubic Bézier curve', () => {
    test('test #1', () => {
        const v2 = v2CubicBezierCurve(
            0.5,
            { x: 0, y: 100 },
            { x: 0, y: 0 },
            { x: 100, y: 0 },
            { x: 100, y: 100 }
        );
        expect(v2).toStrictEqual({ x: 50, y: 25 });
    });

    test('test #2', () => {
        const v2 = v2CubicBezierCurve(
            0,
            { x: 0, y: 100 },
            { x: 0, y: 0 },
            { x: 100, y: 0 },
            { x: 100, y: 100 }
        );
        expect(v2).toStrictEqual({ x: 0, y: 100 });
    });

    test('test #3', () => {
        const v2 = v2CubicBezierCurve(
            1,
            { x: 0, y: 100 },
            { x: 0, y: 0 },
            { x: 100, y: 0 },
            { x: 100, y: 100 }
        );
        expect(v2).toStrictEqual({ x: 100, y: 100 });
    });

    test('test #4', () => {
        const v3 = v3CubicBezierCurve(
            0.5,
            { x: 0, y: 100, z: 0 },
            { x: 0, y: 0, z: 0 },
            { x: 100, y: 0, z: 0 },
            { x: 100, y: 100, z: 0 }
        );
        expect(v3).toStrictEqual({ x: 50, y: 25, z: 0 });
    });

    test('test #5', () => {
        const v3 = v3CubicBezierCurve(
            0,
            { x: 0, y: 100, z: 0 },
            { x: 0, y: 0, z: 0 },
            { x: 100, y: 0, z: 0 },
            { x: 100, y: 100, z: 0 }
        );
        expect(v3).toStrictEqual({ x: 0, y: 100, z: 0 });
    });

    test('test #6', () => {
        const v3 = v3CubicBezierCurve(
            1,
            { x: 0, y: 100, z: 0 },
            { x: 0, y: 0, z: 0 },
            { x: 100, y: 0, z: 0 },
            { x: 100, y: 100, z: 0 }
        );
        expect(v3).toStrictEqual({ x: 100, y: 100, z: 0 });
    });
});