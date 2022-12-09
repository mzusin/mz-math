import { IVector2, IVector3 } from './interfaces';
/**
 * Get a point on a quadratic Bézier curve as a function of time.
 */
export declare const v2QuadraticBezierCurve: (t: number, startControlPoint: IVector2, centerControlPoint: IVector2, endControlPoint: IVector2) => IVector2;
export declare const v3QuadraticBezierCurve: (t: number, startControlPoint: IVector3, centerControlPoint: IVector3, endControlPoint: IVector3) => IVector3;
/**
 * Get a point on a cubic Bézier curve as a function of time.
 */
export declare const v2CubicBezierCurve: (t: number, startControlPoint: IVector2, center1ControlPoint: IVector2, center2ControlPoint: IVector2, endControlPoint: IVector2) => IVector2;
export declare const v3CubicBezierCurve: (t: number, startControlPoint: IVector3, center1ControlPoint: IVector3, center2ControlPoint: IVector3, endControlPoint: IVector3) => IVector3;
