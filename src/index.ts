import * as vector from './vector';
import * as matrix from './matrix';
import * as format from './format';
import * as angle from './angle';
import * as random from './random';
import * as other from './other';
import * as convert from './convert';
import * as bezierCurve from './bezier-curve';

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

            mTranspose: typeof matrix.mTranspose;
            m2Transpose: typeof matrix.m2Transpose;
            m3Transpose: typeof matrix.m3Transpose;

            mMul: typeof matrix.mMul;
            mMulVector: typeof matrix.mMulVector;

            mReset: typeof matrix.mReset;
            m2Reset: typeof matrix.m2Reset;
            m3Reset: typeof matrix.m3Reset;

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
        }
    }
}

window.TCMath = window.TCMath || {
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

    mTranspose: matrix.mTranspose,
    m2Transpose: matrix.m2Transpose,
    m3Transpose: matrix.m3Transpose,

    mMul: matrix.mMul,
    mMulVector: matrix.mMulVector,

    mReset: matrix.mReset,
    m2Reset: matrix.m2Reset,
    m3Reset: matrix.m3Reset,

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
};