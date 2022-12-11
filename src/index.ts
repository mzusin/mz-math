import * as vector from './vector';
import * as matrix from './matrix';
import * as format from './format';
import * as angle from './angle';
import * as random from './random';
import * as other from './other';
import * as convert from './convert';
import * as bezierCurve from './bezier-curve';
import * as equations from './equations';

declare global {
    interface Window {
        TCMath: {
            v2: typeof vector.v2;
            v3: typeof vector.v3;
            vN: typeof vector.vN;
            m2x2: typeof matrix.m2x2;
            m3x3: typeof matrix.m3x3;
            mNxM: typeof matrix.mNxM;
            identity2: typeof matrix.identity2;
            identity3: typeof matrix.identity3;
            identityN: typeof matrix.identityN;

            vEqual: typeof vector.vEqual;
            mEqual: typeof matrix.mEqual;

            vSum: typeof vector.vSum;
            v2Sum: typeof vector.v2Sum;
            v3Sum: typeof vector.v3Sum;

            vSub: typeof vector.vSub;
            v2Sub: typeof vector.v2Sub;
            v3Sub: typeof vector.v3Sub;

            vMulScalar: typeof vector.vMulScalar,
            v2MulScalar: typeof vector.v2MulScalar;
            v3MulScalar: typeof vector.v3MulScalar;

            vLength: typeof vector.vLength;
            v2Length: typeof vector.v2Length;
            v3Length: typeof vector.v3Length;
            v2SetLength: typeof vector.v2SetLength;

            vNormalize: typeof vector.vNormalize,
            v2Normalize: typeof vector.v2Normalize;
            v3Normalize: typeof vector.v3Normalize;

            vDotProduct: typeof vector.vDotProduct;
            v2DotProduct: typeof vector.v2DotProduct;
            v3DotProduct: typeof vector.v3DotProduct;
            v3CrossProduct: typeof vector.v3CrossProduct;

            mSum: typeof matrix.mSum;
            m2Sum: typeof matrix.m2Sum;
            m3Sum: typeof matrix.m3Sum;

            mSub: typeof matrix.mSub;
            m2Sub: typeof matrix.m2Sub;
            m3Sub: typeof matrix.m3Sub;

            mMulScalar: typeof matrix.mMulScalar;
            m2MulScalar: typeof matrix.m2MulScalar;
            m3MulScalar: typeof matrix.m3MulScalar;

            mDivideScalar: typeof matrix.mDivideScalar;
            m2DivideScalar: typeof matrix.m2DivideScalar;
            m3DivideScalar: typeof matrix.m3DivideScalar;

            mTranspose: typeof matrix.mTranspose;
            m2Transpose: typeof matrix.m2Transpose;
            m3Transpose: typeof matrix.m3Transpose;

            mMul: typeof matrix.mMul;
            mMulVector: typeof matrix.mMulVector;

            mReset: typeof matrix.mReset;
            m2Reset: typeof matrix.m2Reset;
            m3Reset: typeof matrix.m3Reset;

            m2Rotation: typeof matrix.m2Rotation;
            v2Rotate: typeof matrix.v2Rotate;
            m3RotationX: typeof matrix.m3RotationX;
            v3RotateX: typeof matrix.v3RotateX;
            m3RotationY: typeof matrix.m3RotationY;
            v3RotateY: typeof matrix.v3RotateY;
            m3RotationZ: typeof matrix.m3RotationZ;
            v3RotateZ: typeof matrix.v3RotateZ;

            m2Determinant: typeof matrix.m2Determinant;
            m3Determinant: typeof matrix.m3Determinant;
            mDeterminant: typeof matrix.mDeterminant;
            m2Inverse: typeof matrix.m2Inverse;
            m2Adjugate: typeof matrix.m2Adjugate;
            mMinor: typeof matrix.mMinor;

            m2Scale: typeof matrix.m2Scale;
            v2Scale: typeof matrix.v2Scale;
            m3Scale: typeof matrix.m3Scale;
            v3Scale: typeof matrix.v3Scale;

            getV2Angle: typeof angle.getV2Angle;
            setV2Angle: typeof angle.setV2Angle;
            radiansToDegrees: typeof angle.radiansToDegrees;
            degreesToRadians: typeof angle.degreesToRadians;

            setDecimalPlaces: typeof format.setDecimalPlaces;

            getRandom: typeof random.getRandom;
            getRandomInt: typeof random.getRandomInt;
            getRandomBoolean: typeof random.getRandomBoolean;
            getRandomItemFromArray: typeof random.getRandomItemFromArray;

            mod: typeof other.mod;
            convertRange: typeof other.convertRange;
            doRangesOverlap: typeof other.doRangesOverlap;
            isNumber: typeof other.isNumber;

            stringToNumber: typeof convert.stringToNumber;

            v2QuadraticBezierCurve: typeof bezierCurve.v2QuadraticBezierCurve;
            v3QuadraticBezierCurve: typeof bezierCurve.v3QuadraticBezierCurve;
            v2CubicBezierCurve: typeof bezierCurve.v2CubicBezierCurve;
            v3CubicBezierCurve: typeof bezierCurve.v3CubicBezierCurve;

            equationSystem2: typeof equations.equationSystem2;
        }
    }
}

const api = {
    v2: vector.v2,
    v3: vector.v3,
    vN: vector.vN,
    m2x2: matrix.m2x2,
    m3x3: matrix.m3x3,
    mNxM: matrix.mNxM,
    identity2: matrix.identity2,
    identity3: matrix.identity3,
    identityN: matrix.identityN,

    vEqual: vector.vEqual,
    mEqual: matrix.mEqual,

    vSum: vector.vSum,
    v2Sum: vector.v2Sum,
    v3Sum: vector.v3Sum,

    vSub: vector.vSub,
    v2Sub: vector.v2Sub,
    v3Sub: vector.v3Sub,

    vMulScalar: vector.vMulScalar,
    v2MulScalar: vector.v2MulScalar,
    v3MulScalar: vector.v3MulScalar,

    vDivideScalar: vector.vDivideScalar,
    v2DivideScalar: vector.v2DivideScalar,
    v3DivideScalar: vector.v3DivideScalar,

    vLength: vector.vLength,
    v2Length: vector.v2Length,
    v3Length: vector.v3Length,
    v2SetLength: vector.v2SetLength,

    vNormalize: vector.vNormalize,
    v2Normalize: vector.v2Normalize,
    v3Normalize: vector.v3Normalize,

    vDotProduct: vector.vDotProduct,
    v2DotProduct: vector.v2DotProduct,
    v3DotProduct: vector.v3DotProduct,
    v3CrossProduct: vector.v3CrossProduct,

    mSum: matrix.mSum,
    m2Sum: matrix.m2Sum,
    m3Sum: matrix.m3Sum,

    mSub: matrix.mSub,
    m2Sub: matrix.m2Sub,
    m3Sub: matrix.m3Sub,

    mMulScalar: matrix.mMulScalar,
    m2MulScalar: matrix.m2MulScalar,
    m3MulScalar: matrix.m3MulScalar,

    mDivideScalar: matrix.mDivideScalar,
    m2DivideScalar: matrix.m2DivideScalar,
    m3DivideScalar: matrix.m3DivideScalar,

    mTranspose: matrix.mTranspose,
    m2Transpose: matrix.m2Transpose,
    m3Transpose: matrix.m3Transpose,

    mMul: matrix.mMul,
    mMulVector: matrix.mMulVector,

    mReset: matrix.mReset,
    m2Reset: matrix.m2Reset,
    m3Reset: matrix.m3Reset,

    m2Rotation: matrix.m2Rotation,
    v2Rotate: matrix.v2Rotate,
    m3RotationX: matrix.m3RotationX,
    v3RotateX: matrix.v3RotateX,
    m3RotationY: matrix.m3RotationY,
    v3RotateY: matrix.v3RotateY,
    m3RotationZ: matrix.m3RotationZ,
    v3RotateZ: matrix.v3RotateZ,

    m2Scale: matrix.m2Scale,
    v2Scale: matrix.v2Scale,
    m3Scale: matrix.m3Scale,
    v3Scale: matrix.v3Scale,

    m2Determinant: matrix.m2Determinant,
    m3Determinant: matrix.m3Determinant,
    mDeterminant: matrix.mDeterminant,
    m2Inverse: matrix.m2Inverse,
    m2Adjugate: matrix.m2Adjugate,
    mMinor: matrix.mMinor,

    getV2Angle: angle.getV2Angle,
    setV2Angle: angle.setV2Angle,
    radiansToDegrees: angle.radiansToDegrees,
    degreesToRadians: angle.degreesToRadians,

    setDecimalPlaces: format.setDecimalPlaces,

    getRandom: random.getRandom,
    getRandomInt: random.getRandomInt,
    getRandomBoolean: random.getRandomBoolean,
    getRandomItemFromArray: random.getRandomItemFromArray,

    mod: other.mod,
    convertRange: other.convertRange,
    doRangesOverlap: other.doRangesOverlap,
    isNumber: other.isNumber,

    stringToNumber: convert.stringToNumber,

    v2QuadraticBezierCurve: bezierCurve.v2QuadraticBezierCurve,
    v3QuadraticBezierCurve: bezierCurve.v3QuadraticBezierCurve,
    v2CubicBezierCurve: bezierCurve.v2CubicBezierCurve,
    v3CubicBezierCurve: bezierCurve.v3CubicBezierCurve,

    equationSystem2: equations.equationSystem2,
};

window.TCMath = window.TCMath || api;

export * from './vector';
export * from './matrix';
export * from './format';
export * from './angle';
export * from './random';
export * from './other';
export * from './convert';
export * from './bezier-curve';
export * from './equations';