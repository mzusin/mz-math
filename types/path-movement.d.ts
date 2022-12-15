import { Vector2 } from './types';
export declare const circleMovement: (center: Vector2, angle: number, radius: number) => Vector2;
export declare const ellipseMovement: (center: Vector2, angle: number, radius1: number, radius2: number) => Vector2;
/**
 * Sine Wave (Sinusoid)
 * amplitude = the peak deviation of the function from zero
 * frequency = number of cycles
 * phase = specifies (in radians) where in its cycle the oscillation is at t = 0.
 * think of it as "shifting" the starting point of the function to the right (positive p) or left (negative)
 */
export declare const sineWaveMovement: (x: number, amplitude: number, frequency: number, phase: number) => Vector2;
