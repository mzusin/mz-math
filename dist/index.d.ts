declare module 'toolcool-math' {

    export type Vector2 = [number, number];
    export type Vector3 = [number, number, number];
    export type Vector = number[];

    export type Matrix2 = Vector2[];
    export type Matrix3 = Vector3[];
    export type Matrix = Vector[];

    export const v2: (defaultValue?: number) => Vector2;
    export const v3: (defaultValue?: number) => Vector3;
    export const vN: (N: number, defaultValue?: number) => Vector;

    export const m2x2: (defaultValue?: number) => Matrix2;
    export const m3x3: (defaultValue?: number) => Matrix3;
    export const mNxM: (N: number, M: number, defaultValue?: number) => Matrix;

    export const identity2: () => Matrix2;
    export const identity3: () => Matrix3;
    export const identityN: (N: number) => Matrix;

    export const vEqual: (vector1: Vector, vector2: Vector) => boolean;
    export const mEqual: (matrix1: Matrix, matrix2: Matrix) => boolean;

    export const vSum: (vector1: Vector, vector2: Vector, decimalPlaces?: number) => Vector;
    export const v2Sum: (vector1: Vector2, vector2: Vector2, decimalPlaces?: number) => Vector2;
    export const v3Sum: (vector1: Vector3, vector2: Vector3, decimalPlaces?: number) => Vector3;

    export const vSub: (vector1: Vector, vector2: Vector, decimalPlaces?: number) => Vector;
    export const v2Sub: (vector1: Vector2, vector2: Vector2, decimalPlaces?: number) => Vector2;
    export const v3Sub: (vector1: Vector3, vector2: Vector3, decimalPlaces?: number) => Vector3;

    export const vMulScalar: (v: Vector, scalar: number, decimalPlaces?: number) => Vector;
    export const v2MulScalar: (v2: Vector2, scalar: number, decimalPlaces?: number) => Vector2;
    export const v3MulScalar: (v3: Vector3, scalar: number, decimalPlaces?: number) => Vector3;

    export const vDivideScalar: (v: Vector, scalar: number, decimalPlaces?: number) => Vector;
    export const v2DivideScalar: (v2: Vector2, scalar: number, decimalPlaces?: number) => Vector2;
    export const v3DivideScalar: (v3: Vector3, scalar: number, decimalPlaces?: number) => Vector3;

    export const vLength: (vector: Vector, decimalPlaces?: number) => number;
    export const v2Length: (vector: Vector2, decimalPlaces?: number) => number;
    export const v3Length: (vector: Vector3, decimalPlaces?: number) => number;
    export const v2SetLength: (v2: Vector2, newLength: number, decimalPlaces?: number) => Vector2;

    export const vNormalize: (v: Vector, decimalPlaces?: number) => Vector;
    export const v2Normalize: (v2: Vector2, decimalPlaces?: number) => Vector2;
    export const v3Normalize: (v3: Vector3, decimalPlaces?: number) => Vector3;

    export const vDotProduct: (vector1: Vector, vector2: Vector, decimalPlaces?: number) => number;
    export const v2DotProduct: (vector1: Vector2, vector2: Vector2, decimalPlaces?: number) => number;
    export const v3DotProduct: (vector1: Vector3, vector2: Vector3, decimalPlaces?: number) => number;

    export const v3CrossProduct: (vector1: Vector3, vector2: Vector3, decimalPlaces?: number) => Vector3;

    export const mSum: (matrix1: Matrix, matrix2: Matrix, decimalPlaces?: number) => Matrix;
    export const m2Sum: (matrix1: Matrix2, matrix2: Matrix2, decimalPlaces?: number) => Matrix2;
    export const m3Sum: (matrix1: Matrix3, matrix2: Matrix3, decimalPlaces?: number) => Matrix3;

    export const mSub: (matrix1: Matrix, matrix2: Matrix, decimalPlaces?: number) => Matrix;
    export const m2Sub: (matrix1: Matrix2, matrix2: Matrix2, decimalPlaces?: number) => Matrix2;
    export const m3Sub: (matrix1: Matrix3, matrix2: Matrix3, decimalPlaces?: number) => Matrix3;

    export const mMulScalar: (m: Matrix, scalar: number, decimalPlaces?: number) => Matrix;
    export const m2MulScalar: (m2: Matrix2, scalar: number, decimalPlaces?: number) => Matrix2;
    export const m3MulScalar: (m3: Matrix3, scalar: number, decimalPlaces?: number) => Matrix3;
    export const mDivideScalar: (m: Matrix, scalar: number, decimalPlaces?: number) => Matrix;
    export const m2DivideScalar: (m2: Matrix2, scalar: number, decimalPlaces?: number) => Matrix2;
    export const m3DivideScalar: (m3: Matrix3, scalar: number, decimalPlaces?: number) => Matrix3;

    export const mTranspose: (m: Matrix) => Matrix;
    export const m2Transpose: (m2: Matrix2) => Matrix;
    export const m3Transpose: (m3: Matrix3) => Matrix;

    export const mMul: (matrix1: Matrix, matrix2: Matrix, decimalPlaces?: number) => Matrix;
    export const mMulVector: (matrix: Matrix, vector: Vector, decimalPlaces?: number) => Vector;

    export const mReset: (m: Matrix, defaultValue?: number) => Matrix;
    export const m2Reset: (m2: Matrix2, defaultValue?: number) => Matrix2;
    export const m3Reset: (m3: Matrix3, defaultValue?: number) => Matrix3;

    export const m2Rotation: (angleRad: number) => Matrix2;
    export const v2Rotate: (angleRad: number, vector: Vector2) => Vector2;
    export const m3RotationX: (angleRad: number) => Matrix3;
    export const v3RotateX: (angleRad: number, vector: Vector3) => Vector3;
    export const m3RotationY: (angleRad: number) => Matrix3;
    export const v3RotateY: (angleRad: number, vector: Vector3) => Vector3;
    export const m3RotationZ: (angleRad: number) => Matrix3;
    export const v3RotateZ: (angleRad: number, vector: Vector3) => Vector3;

    export const m2Scale: (scaleVector: Vector2) => Matrix2;
    export const v2Scale: (scaleVector: Vector2, vector: Vector2) => Vector2;
    export const m3Scale: (scaleVector: Vector3) => Matrix3;
    export const v3Scale: (scaleVector: Vector3, vector: Vector3) => Vector3;

    export const m3Determinant: (m3: Matrix3) => number;
    export const m2Determinant: (m2: Matrix2) => number;
    export const mDeterminant: (matrix: Matrix) => number;
    export const mMinor: (m: Matrix, row: number, col: number) => number;

    export const m2Inverse: (m2: Matrix2, decimalPlaces?: number) => (Matrix2 | null);
    export const m2Adjugate: (m2: Matrix2) => Matrix2;

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

    export const equationSystem2: (equation1: Vector3, equation2: Vector3, decimalPlaces?: number) => Vector2 | null;

    global {
        interface Window {
            TCMath: {
                v2: typeof v2;
                v3: typeof v3;
                vN: typeof vN;

                m2x2: typeof m2x2;
                m3x3: typeof m3x3;
                mNxM: typeof mNxM;

                identity2: typeof identity2;
                identity3: typeof identity3;
                identityN: typeof identityN;

                vSum: typeof vSum;
                v2Sum: typeof v2Sum;
                v3Sum: typeof v3Sum;

                vSub: typeof vSub;
                v2Sub: typeof v2Sub;
                v3Sub: typeof v3Sub;

                vMulScalar: typeof vMulScalar;
                v2MulScalar: typeof v2MulScalar;
                v3MulScalar: typeof v3MulScalar;

                vDivideScalar: typeof vDivideScalar;
                v2DivideScalar: typeof v2DivideScalar;
                v3DivideScalar: typeof v3DivideScalar;

                vLength: typeof vLength;
                v2Length: typeof v2Length;
                v3Length: typeof v3Length;
                v2SetLength: typeof v2SetLength;

                vNormalize: typeof vNormalize;
                v2Normalize: typeof v2Normalize;
                v3Normalize: typeof v3Normalize;

                vDotProduct: typeof vDotProduct;
                v2DotProduct: typeof v2DotProduct;
                v3DotProduct: typeof v3DotProduct;
                v3CrossProduct: typeof v3CrossProduct;

                mSum: typeof mSum;
                m2Sum: typeof m2Sum;
                m3Sum: typeof m3Sum;

                mSub: typeof mSub;
                m2Sub: typeof m2Sub;
                m3Sub: typeof m3Sub;

                mMulScalar: typeof mMulScalar;
                m2MulScalar: typeof m2MulScalar;
                m3MulScalar: typeof m3MulScalar;

                mDivideScalar: typeof mDivideScalar;
                m2DivideScalar: typeof m2DivideScalar;
                m3DivideScalar: typeof m3DivideScalar;

                mTranspose: typeof mTranspose;
                m2Transpose: typeof m2Transpose;
                m3Transpose: typeof m3Transpose;

                mMul: typeof mMul;
                mMulVector: typeof mMulVector;

                mReset: typeof mReset;
                m2Reset: typeof m2Reset;
                m3Reset: typeof m3Reset;

                m2Rotation: typeof m2Rotation;
                v2Rotate: typeof v2Rotate;
                m3RotationX: typeof m3RotationX;
                v3RotateX: typeof v3RotateX;
                m3RotationY: typeof m3RotationY;
                v3RotateY: typeof v3RotateY;
                m3RotationZ: typeof m3RotationZ;
                v3RotateZ: typeof v3RotateZ;

                m2Determinant: typeof m2Determinant;
                m3Determinant: typeof m3Determinant;
                mDeterminant: typeof mDeterminant;
                mMinor:typeof mMinor;
                m2Inverse: typeof m2Inverse;
                m2Adjugate: typeof m2Adjugate;

                m2Scale: typeof m2Scale;
                v2Scale: typeof v2Scale;
                m3Scale: typeof m3Scale;
                v3Scale: typeof v3Scale;

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

                equationSystem2: typeof equationSystem2;
            };
        }
    }
}