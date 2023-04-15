import {
    v2QuadraticBezierCurve,
    v3QuadraticBezierCurve,
    v2CubicBezierCurve,
    v3CubicBezierCurve, v2QuadraticBezierBBox
} from '../src/main/bezier-curves/bezier-curve';

describe('Bezier Curve', () => {

    describe('Get a point on a quadratic Bézier curve', () => {
        test('test #1', () => {
            const v2 = v2QuadraticBezierCurve(
                0.5,
                [0, 100],
                [50, 0],
                [100, 100]
            );
            expect(v2).toStrictEqual([50, 50]);
        });

        test('test #2', () => {
            const v2 = v2QuadraticBezierCurve(
                0,
                [0, 100],
                [50, 0],
                [100, 100]
            );
            expect(v2).toStrictEqual([0, 100]);
        });

        test('test #3', () => {
            const v2 = v2QuadraticBezierCurve(
                1,
                [0, 100],
                [50, 0],
                [100, 100]
            );
            expect(v2).toStrictEqual([100, 100]);
        });

        test('test #4', () => {
            const v3 = v3QuadraticBezierCurve(
                0.5,
                [0, 100, 0],
                [50, 0, 0],
                [100, 100, 0]
            );
            expect(v3).toStrictEqual([50, 50, 0]);
        });

        test('test #5', () => {
            const v3 = v3QuadraticBezierCurve(
                0,
                [0, 100, 0],
                [50, 0, 0],
                [100, 100, 0]
            );
            expect(v3).toStrictEqual([0, 100, 0]);
        });

        test('test #6', () => {
            const v3 = v3QuadraticBezierCurve(
                1,
                [0, 100, 0],
                [50, 0, 0],
                [100, 100, 0]
            );
            expect(v3).toStrictEqual([100, 100, 0]);
        });
    });

    describe('Get a point on a cubic Bézier curve', () => {
        test('test #1', () => {
            const v2 = v2CubicBezierCurve(
                0.5,
                [0, 100],
                [0, 0],
                [100, 0],
                [100, 100]
            );
            expect(v2).toStrictEqual([50, 25]);
        });

        test('test #2', () => {
            const v2 = v2CubicBezierCurve(
                0,
                [0, 100],
                [0, 0],
                [100, 0],
                [100, 100]
            );
            expect(v2).toStrictEqual([0, 100]);
        });

        test('test #3', () => {
            const v2 = v2CubicBezierCurve(
                1,
                [0, 100],
                [0, 0],
                [100, 0],
                [100, 100]
            );
            expect(v2).toStrictEqual([100, 100]);
        });

        test('test #4', () => {
            const v3 = v3CubicBezierCurve(
                0.5,
                [0, 100, 0],
                [0, 0, 0],
                [100, 0, 0],
                [100, 100, 0]
            );
            expect(v3).toStrictEqual([50, 25, 0]);
        });

        test('test #5', () => {
            const v3 = v3CubicBezierCurve(
                0,
                [0, 100, 0],
                [0, 0, 0],
                [100, 0, 0],
                [100, 100, 0]
            );
            expect(v3).toStrictEqual([0, 100, 0]);
        });

        test('test #6', () => {
            const v3 = v3CubicBezierCurve(
                1,
                [0, 100, 0],
                [0, 0, 0],
                [100, 0, 0],
                [100, 100, 0],
            );
            expect(v3).toStrictEqual([100, 100, 0]);
        });
    });

    describe('Bounding Box', () => {

        test('v2QuadraticBezierBBox #1', () => {
            const bbox = v2QuadraticBezierBBox(
                [90, 30],
                [90, 60],
                [50, 90]
            );
            expect(bbox).toStrictEqual({"h": 60, "w": 40, "x": 50, "x2": 90, "y": 30, "y2": 90});
        });
    });
});