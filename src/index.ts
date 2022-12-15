import * as vector from './vector';
import * as matrix from './matrix';
import * as matrixTransformations from './matrix-transformations';
import * as format from './format';
import * as angle from './angle';
import * as random from './random';
import * as other from './other';
import * as convert from './convert';
import * as bezierCurve from './bezier-curve';
import * as equations from './equations';
import * as pathMovement from './path-movement';

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
};

declare global {
    interface Window {
        TCMath: typeof api,
    }
}

window.TCMath = window.TCMath || api;

export * from './vector';
export * from './matrix';
export * from './matrix-transformations';
export * from './format';
export * from './angle';
export * from './random';
export * from './other';
export * from './convert';
export * from './bezier-curve';
export * from './equations';
export * from './path-movement';