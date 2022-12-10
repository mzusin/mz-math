declare module 'toolcool-math' {

    export type Vector2 = [number, number];
    export type Vector3 = [number, number, number];
    export type Vector = number[];
    export type Matrix2 = Vector2[];
    export type Matrix3 = Vector3[];
    export type Matrix = Vector[];

    export const vSum: (vector1: Vector, vector2: Vector, decimalPlaces?: number) => Vector;
    export const v2Sum: (vector1: Vector2, vector2: Vector2, decimalPlaces?: number) => Vector2;
    export const v3Sum: (vector1: Vector3, vector2: Vector3, decimalPlaces?: number) => Vector3;

    export const vSub: (vector1: Vector, vector2: Vector, decimalPlaces?: number) => Vector;
    export const v2Sub: (vector1: Vector2, vector2: Vector2, decimalPlaces?: number) => Vector2;
    export const v3Sub: (vector1: Vector3, vector2: Vector3, decimalPlaces?: number) => Vector3;

    export const vMulScalar: (v: Vector, scalar: number, decimalPlaces?: number) => Vector;
    export const v2MulScalar: (v2: Vector2, scalar: number, decimalPlaces?: number) => Vector2;
    export const v3MulScalar: (v3: Vector3, scalar: number, decimalPlaces?: number) => Vector3;

    export const vLength: (vector: Vector, decimalPlaces?: number) => number;
    export const v2Length: (vector: Vector2, decimalPlaces?: number) => number;
    export const v3Length: (vector: Vector3, decimalPlaces?: number) => number;

    export const v2SetLength: (v2: Vector2, newLength: number, decimalPlaces?: number) => Vector2;
    export const v2Normalize: (v2: Vector2, decimalPlaces?: number) => Vector2;
    export const v3Normalize: (v3: Vector3, decimalPlaces?: number) => Vector3;
    export const v2DotProduct: (vector1: Vector2, vector2: Vector2, decimalPlaces?: number) => number;
    export const v3DotProduct: (vector1: Vector3, vector2: Vector3, decimalPlaces?: number) => number;
    export const v3CrossProduct: (vector1: Vector3, vector2: Vector3, decimalPlaces?: number) => Vector3;

    export const m2Sum: (matrix1: Matrix2, matrix2: Matrix2, decimalPlaces?: number) => Matrix2;
    export const m2Sub: (matrix1: Matrix2, matrix2: Matrix2, decimalPlaces?: number) => Matrix2;
    export const m3Sum: (matrix1: Matrix3, matrix2: Matrix3, decimalPlaces?: number) => Matrix3;
    export const m3Sub: (matrix1: Matrix3, matrix2: Matrix3, decimalPlaces?: number) => Matrix3;
    export const m2MulScalar: (m2: Matrix2, scalar: number, decimalPlaces?: number) => Matrix2;
    export const m3MulScalar: (m3: Matrix3, scalar: number, decimalPlaces?: number) => Matrix3;

    export const getV2Angle: (v2: Vector2, decimalPlaces?: number) => number;
    export const setV2Angle: (v2: Vector2, newAngleRad: number, decimalPlaces?: number) => Vector2;
    export const radiansToDegrees: (radians: number, decimalPlaces?: number) => number;
    export const degreesToRadians: (degrees: number, decimalPlaces?: number) => number;

    export const setDecimalPlaces: (num: number, decimalPlaces?: number | undefined) => number;

    export const getRandom: (min: number, max: number, decimalPlaces?: number) => number;
    export const getRandomInt: (min: number, max: number) => number;
    export const getRandomBoolean: () => boolean;
    export const getRandomItemFromArray: (array: any[]) => any;

    export const mod: (n: number, m: number) => number;
    export const convertRange: (a: number, b: number, c: number, d: number, x: number) => number;
    export const doRangesOverlap: (a: number, b: number, c: number, d: number) => boolean;
    export const isNumber: (value: any) => boolean;

    export const stringToNumber: (value: string, defaultNumber: number) => number;

    export const v2QuadraticBezierCurve: (t: number, startControlPoint: Vector2, centerControlPoint: Vector2, endControlPoint: Vector2) => Vector2;
    export const v3QuadraticBezierCurve: (t: number, startControlPoint: Vector3, centerControlPoint: Vector3, endControlPoint: Vector3) => Vector3;
    export const v2CubicBezierCurve: (t: number, startControlPoint: Vector2, center1ControlPoint: Vector2, center2ControlPoint: Vector2, endControlPoint: Vector2) => Vector2;
    export const v3CubicBezierCurve: (t: number, startControlPoint: Vector3, center1ControlPoint: Vector3, center2ControlPoint: Vector3, endControlPoint: Vector3) => Vector3;

    global {
        interface Window {
            TCMath: {
                vSum: typeof vSum;
                v2Sum: typeof v2Sum;
                v3Sum: typeof v3Sum;

                vSub: typeof vSub;
                v2Sub: typeof v2Sub;
                v3Sub: typeof v3Sub;

                v2MulScalar: typeof v2MulScalar;
                v3MulScalar: typeof v3MulScalar;

                vLength: typeof vLength;
                v2Length: typeof v2Length;
                v3Length: typeof v3Length;
                v2SetLength: typeof v2SetLength;

                v2Normalize: typeof v2Normalize;
                v3Normalize: typeof v3Normalize;

                v2DotProduct: typeof v2DotProduct;
                v3DotProduct: typeof v3DotProduct;
                v3CrossProduct: typeof v3CrossProduct;

                m2Sum: typeof m2Sum;
                m3Sum: typeof m3Sum;

                m2Sub: typeof m2Sub;
                m3Sub: typeof m3Sub;

                m2MulScalar: typeof m2MulScalar;
                m3MulScalar: typeof m3MulScalar;

                getV2Angle: typeof getV2Angle;
                setV2Angle: typeof setV2Angle;

                radiansToDegrees: typeof radiansToDegrees;
                degreesToRadians: typeof degreesToRadians;

                setDecimalPlaces: typeof setDecimalPlaces;

                getRandom: typeof getRandom;
                getRandomInt: typeof getRandomInt;
                getRandomBoolean: typeof getRandomBoolean;
                getRandomItemFromArray: typeof getRandomItemFromArray;

                mod: typeof mod;
                convertRange: typeof convertRange;
                doRangesOverlap: typeof doRangesOverlap;
                isNumber: typeof isNumber;

                stringToNumber: typeof stringToNumber;

                v2QuadraticBezierCurve: typeof v2QuadraticBezierCurve;
                v3QuadraticBezierCurve: typeof v3QuadraticBezierCurve;
                v2CubicBezierCurve: typeof v2CubicBezierCurve;
                v3CubicBezierCurve: typeof v3CubicBezierCurve;
            };
        }
    }
}