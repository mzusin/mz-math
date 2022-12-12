import * as vector from './vector';
import * as matrix from './matrix';
import * as format from './format';
import * as angle from './angle';
import * as random from './random';
import * as other from './other';
import * as convert from './convert';
import * as bezierCurve from './bezier-curve';
import * as equations from './equations';

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

    mDeepCopy: matrix.mDeepCopy,
    m2DeepCopy: matrix.m2DeepCopy,
    m3DeepCopy: matrix.m3DeepCopy,

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
    m3Inverse: matrix.m3Inverse,
    mInverse: matrix.mInverse,

    m2Adjugate: matrix.m2Adjugate,
    m3Adjugate: matrix.m3Adjugate,
    mAdjugate: matrix.mAdjugate,
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
    equationSystem3: equations.equationSystem3,
    equationSystemN: equations.equationSystemN,
};

declare global {
    interface Window {
        TCMath: typeof api,
    }
}

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