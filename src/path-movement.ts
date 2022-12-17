import { Vector2 } from './types';
import { v2Sub } from './vector';
import { getV2Angle } from './angle';
import { convertRange } from './other';

/**
 * Circle Equation
 * x^2 + y^2 = radius^2
 * ----------------------
 * Circle Parametric Equation
 * x(t) = radius * cos(t)
 * y(t) = radius * sin(t)
 * t is the parameter = angle
 */
export const circleMovement = (center: Vector2, angle: number, radius: number): Vector2 => {
    angle = angle % Math.PI * 2;

    return [
        center[0] + Math.cos(angle) * radius,
        center[1] + Math.sin(angle) * radius
    ];
};

/**
 * Circle Movement After Mouse.
 * Mouse Positions:
 * - pageX/Y coordinates are relative to the top left corner of the whole rendered page (including parts hidden by scrolling),
 * - screenX and screenY: Relative to the top left of the physical screen/monitor, this reference point only moves if you increase or decrease the number of monitors or the monitor resolution.
 * - clientX/Y coordinates are relative to the top left corner of the visible part of the page, "seen" through browser window.
 * - offsetX and offsetY are relative to the parent container,
 */
export const circleMovementAfterMouse = (
    mouse: Vector2,
    center: Vector2,
    radius: number
): Vector2 => {

    const vector = v2Sub(mouse, center);

    let angle = getV2Angle(vector);

    // convert the angle from the range [0, Math.PI*2] to the range [0, Math.PI]
    angle = convertRange(angle, 0, Math.PI*2, 0, Math.PI);

    return circleMovement(center, angle, radius);
};

/**
 * Ellipse Equation
 * (x - centerX)^2 / (radius1^2) + (y - centerY)^2 / (radius2^2) = 1
 * -----------------------------------------------------------------
 * Ellipse Parametric Equation
 * x(t) = radius1 * cos(t)
 * y(t) = radius2 * sin(t)
 * t is the parameter = angle
 */
export const ellipseMovement = (center: Vector2, angle: number, radius1: number, radius2: number): Vector2 => {
    angle = angle % Math.PI * 2;

    return [
        center[0] + Math.cos(angle) * radius1,
        center[1] + Math.sin(angle) * radius2
    ];
};

/**
 * Sine Wave Equation (Sinusoid)
 * -----------------------------
 * const y = amplitude * Math.sin(2 * Math.PI * frequency * x + phase);
 * amplitude = the peak deviation of the function from zero
 * frequency = number of cycles
 * phase = specifies (in radians) where in its cycle the oscillation is at t = 0.
 * think of it as "shifting" the starting point of the function to the right (positive p) or left (negative)
 */
export const sineWaveMovement = (x: number, amplitude: number, frequency: number, phase: number) : Vector2 => {
    /*
    example values:
    const amplitude = 50;
    const frequency = 0.005;
    const phase = 0;
    x: [0, 1000]
     */
    const y = amplitude * Math.sin(2 * Math.PI * frequency * x + phase);

    return [x, y];
};

/**
 * Lissajous curve (Lissajous figure or Bowditch curve)
 * Parametric equation #1
 * f(t) = A * sin(k * t + m)
 * f(t) = B * sin(n * t)
 * 0 <= m <= PI/2
 * k, n >= 1
 * -----------------------
 * Parametric equation #2
 * f(t) = A * cos(k * t - m)
 * f(t) = B * cos(n * t - p)
 * -----------------------------
 * Shapes:
 * k = 1, n = 1, m = 0, p = 0 ---> line
 * A = B,  k = 1, n = 1, m = PI/2, p = PI/2 ----> circle
 * A != B, k = 1, n = 1, m = PI/2, p = PI/2 ----> ellipse
 * k = 2, n = 2, m = PI/2, p = PI/2 ----> section of a parabola
 */
export const lissajousCurve = (
    width: number,
    height: number,
    t: number,
    k: number,
    n: number,
    m: number,
    p: number
) :Vector2 => {
    return [
        width * Math.cos(k * t - m),
        height * Math.cos(n * t - p),
    ];
};
