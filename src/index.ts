import * as vector from './vector';
import * as format from './format';
import * as angle from './angle';
import * as random from './random';
import * as other from './other';
import * as convert from './convert';
import * as bezierCurve from './bezier-curve';

declare global {
    interface Window {
        TCMath: {
            v2Sum: typeof vector.v2Sum;
            v3Sum: typeof vector.v3Sum;
            v2Sub: typeof vector.v2Sub;
            v3Sub: typeof vector.v3Sub;
            v2MulScalar: typeof vector.v2MulScalar;
            v3MulScalar: typeof vector.v3MulScalar;
            v2Length: typeof vector.v2Length;
            v3Length: typeof vector.v3Length;
            v2SetLength: typeof vector.v2SetLength;
            v2Normalize: typeof vector.v2Normalize;
            v3Normalize: typeof vector.v3Normalize;
            v2DotProduct: typeof vector.v2DotProduct;
            v3DotProduct: typeof vector.v3DotProduct;

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
    v2Sum: vector.v2Sum,
    v3Sum: vector.v3Sum,
    v2Sub: vector.v2Sub,
    v3Sub: vector.v3Sub,
    v2MulScalar: vector.v2MulScalar,
    v3MulScalar: vector.v3MulScalar,
    v2Length: vector.v2Length,
    v3Length: vector.v3Length,
    v2SetLength: vector.v2SetLength,
    v2Normalize: vector.v2Normalize,
    v3Normalize: vector.v3Normalize,
    v2DotProduct: vector.v2DotProduct,
    v3DotProduct: vector.v3DotProduct,

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