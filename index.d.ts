declare module 'toolcool-math' {

    export interface IVector2 {
        x: number;
        y: number;
    }
    export interface IVector3 {
        x: number;
        y: number;
        z: number;
    }

    export const v2Sum: (...vectors: IVector2[]) => IVector2;
    export const v3Sum: (...vectors: IVector3[]) => IVector3;
    export const v2Sub: (...vectors: IVector2[]) => IVector2;
    export const v3Sub: (...vectors: IVector3[]) => IVector3;
    export const v2MulScalar: (v2: IVector2, scalar: number, decimalPlaces?: number) => IVector2;
    export const v3MulScalar: (v3: IVector3, scalar: number, decimalPlaces?: number) => IVector3;
    export const v2Length: (vector: IVector2, decimalPlaces?: number) => number;
    export const v3Length: (vector: IVector3, decimalPlaces?: number) => number;
    export const v2SetLength: (v2: IVector2, newLength: number, decimalPlaces?: number) => IVector2;
    export const v2Normalize: (v2: IVector2, decimalPlaces?: number) => IVector2;
    export const v3Normalize: (v3: IVector3, decimalPlaces?: number) => IVector3;
    export const v2DotProduct: (vector1: IVector2, vector2: IVector2, decimalPlaces?: number) => number;
    export const v3DotProduct: (vector1: IVector3, vector2: IVector3, decimalPlaces?: number) => number;
    export const v3CrossProduct: (vector1: IVector3, vector2: IVector3, decimalPlaces?: number) => IVector3;

    export const getV2Angle: (v2: IVector2, decimalPlaces?: number) => number;
    export const setV2Angle: (v2: IVector2, newAngleRad: number, decimalPlaces?: number) => IVector2;
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

    export const v2QuadraticBezierCurve: (t: number, startControlPoint: IVector2, centerControlPoint: IVector2, endControlPoint: IVector2) => IVector2;
    export const v3QuadraticBezierCurve: (t: number, startControlPoint: IVector3, centerControlPoint: IVector3, endControlPoint: IVector3) => IVector3;
    export const v2CubicBezierCurve: (t: number, startControlPoint: IVector2, center1ControlPoint: IVector2, center2ControlPoint: IVector2, endControlPoint: IVector2) => IVector2;
    export const v3CubicBezierCurve: (t: number, startControlPoint: IVector3, center1ControlPoint: IVector3, center2ControlPoint: IVector3, endControlPoint: IVector3) => IVector3;

    global {
        interface Window {
            TCMath: {
                v2Sum: typeof v2Sum;
                v3Sum: typeof v3Sum;
                v2Sub: typeof v2Sub;
                v3Sub: typeof v3Sub;
                v2MulScalar: typeof v2MulScalar;
                v3MulScalar: typeof v3MulScalar;
                v2Length: typeof v2Length;
                v3Length: typeof v3Length;
                v2SetLength: typeof v2SetLength;
                v2Normalize: typeof v2Normalize;
                v3Normalize: typeof v3Normalize;
                v2DotProduct: typeof v2DotProduct;
                v3DotProduct: typeof v3DotProduct;
                v3CrossProduct: typeof v3CrossProduct;

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