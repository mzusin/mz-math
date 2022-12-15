import { Vector, Vector2, Vector3 } from './types';
export declare const getV2Angle: (v2: Vector2, decimalPlaces?: number) => number;
export declare const setV2Angle: (v2: Vector2, newAngleRad: number, decimalPlaces?: number) => Vector2;
export declare const radiansToDegrees: (radians: number, decimalPlaces?: number) => number;
export declare const degreesToRadians: (degrees: number, decimalPlaces?: number) => number;
/**
 * Returns the range [0, Math.PI]
 */
export declare const getVNAngleBetween: (vector1: Vector, vector2: Vector, decimalPlaces?: number) => number;
export declare const getV2AngleBetween: (vector1: Vector2, vector2: Vector2, decimalPlaces?: number) => number;
export declare const getV3AngleBetween: (vector1: Vector3, vector2: Vector3, decimalPlaces?: number) => number;
