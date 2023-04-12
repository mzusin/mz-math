import * as vector from './main/vector';
import * as matrix from './main/matrix';
import * as matrixTransformations from './main/matrix-transformations';
import * as format from './main/format';
import * as angle from './main/angle';
import * as random from './main/random';
import * as other from './main/other';
import * as convert from './main/convert';
import * as bezierCurve from './main/bezier-curve';
import * as equations from './main/equations';
import * as pathMovement from './main/path-movement';
import * as color from './main/color';
import * as physics from './main/physics';
import * as id from './main/id';
import * as shapes from './main/shapes';

const api = {
    ...vector,
    ...matrix,
    ...matrixTransformations,
    ...format,
    ...angle,
    ...random,
    ...other,
    ...convert,
    ...bezierCurve,
    ...equations,
    ...pathMovement,
    ...color,
    ...physics,
    ...id,
    ...shapes,
};

declare global {
    interface Window {
        mzMath: typeof api,
    }
}

window.mzMath = window.mzMath || api;

export * from './main/vector';
export * from './main/matrix';
export * from './main/matrix-transformations';
export * from './main/format';
export * from './main/angle';
export * from './main/random';
export * from './main/other';
export * from './main/convert';
export * from './main/bezier-curve';
export * from './main/equations';
export * from './main/path-movement';
export * from './main/color';
export * from './main/physics';
export * from './main/id';
export * from './main/shapes';