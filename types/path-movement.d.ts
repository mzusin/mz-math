import { Vector2 } from './types';
export declare const circleMovement: (center: Vector2, angle: number, radius: number) => Vector2;
/**
 * Circle Movement After Mouse.
 * Mouse Positions:
 * - pageX/Y coordinates are relative to the top left corner of the whole rendered page (including parts hidden by scrolling),
 * - screenX and screenY: Relative to the top left of the physical screen/monitor, this reference point only moves if you increase or decrease the number of monitors or the monitor resolution.
 * - clientX/Y coordinates are relative to the top left corner of the visible part of the page, "seen" through browser window.
 * - offsetX and offsetY are relative to the parent container,
 */
export declare const circleMovementAfterMouse: (mouse: Vector2, center: Vector2, radius: number) => Vector2;
export declare const ellipseMovement: (center: Vector2, angle: number, radius1: number, radius2: number) => Vector2;
/**
 * Sine Wave (Sinusoid)
 * amplitude = the peak deviation of the function from zero
 * frequency = number of cycles
 * phase = specifies (in radians) where in its cycle the oscillation is at t = 0.
 * think of it as "shifting" the starting point of the function to the right (positive p) or left (negative)
 */
export declare const sineWaveMovement: (x: number, amplitude: number, frequency: number, phase: number) => Vector2;
