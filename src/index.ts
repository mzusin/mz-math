import * as vector from './main/linear-algebra/vector';
import * as matrix from './main/linear-algebra/matrix';
import * as matrixTransformations from './main/linear-algebra/matrix-transformations';
import * as format from './main/format';
import * as angle from './main/angle';
import * as random from './main/random';
import * as other from './main/other';
import * as convert from './main/convert';
import * as bezierCurve from './main/bezier-curves/bezier-curve';
import * as equations from './main/equations/linear-equations';
import * as pathMovement from './main/path-movement';
import * as color from './main/color';
import * as physics from './main/physics';
import * as id from './main/id';
import * as derivative from './main/derivative';
import * as collisions from './main/collision-detection';
import * as animation from './main/animation';
import * as circleEllipse from './main/circle-ellipse';
import * as sequence from './main/sequence';

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
    ...derivative,
    ...collisions,
    ...animation,
    ...circleEllipse,
    ...sequence,
};

declare global {
    interface Window {
        mzMath: typeof api,
    }
}

window.mzMath = window.mzMath || api;

export * from './main/linear-algebra/vector';
export * from './main/linear-algebra/matrix';
export * from './main/linear-algebra/matrix-transformations';
export * from './main/format';
export * from './main/angle';
export * from './main/random';
export * from './main/other';
export * from './main/convert';
export * from './main/bezier-curves/bezier-curve';
export * from './main/equations/linear-equations';
export * from './main/path-movement';
export * from './main/color';
export * from './main/physics';
export * from './main/id';
export * from './main/derivative';
export * from './main/collision-detection';
export * from './main/animation';
export * from './main/circle-ellipse';
export * from './main/sequence';