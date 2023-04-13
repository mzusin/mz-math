import { Vector2 } from '../types';
/**
 * Circle Equation
 * x^2 + y^2 = radius^2
 * ----------------------
 * Circle Parametric Equation
 * x(t) = radius * cos(t)
 * y(t) = radius * sin(t)
 * t is the parameter = angle
 */
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
/**
 * Ellipse Equation
 * (x - centerX)^2 / (radius1^2) + (y - centerY)^2 / (radius2^2) = 1
 * -----------------------------------------------------------------
 * Ellipse Parametric Equation
 * x(t) = radius1 * cos(t)
 * y(t) = radius2 * sin(t)
 * t is the parameter = angle
 */
export declare const ellipseMovement: (center: Vector2, angle: number, radius1: number, radius2: number) => Vector2;
/**
 * Sine Wave Equation (Sinusoid)
 * -----------------------------
 * const y = amplitude * Math.sin(2 * Math.PI * frequency * x + phase);
 * amplitude = the peak deviation of the function from zero
 * frequency = number of cycles
 * phase = specifies (in radians) where in its cycle the oscillation is at t = 0.
 * think of it as "shifting" the starting point of the function to the right (positive p) or left (negative)
 */
export declare const sineWaveMovement: (x: number, amplitude: number, frequency: number, phase: number) => Vector2;
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
export declare const lissajousCurve: (width: number, height: number, t: number, k: number, n: number, m: number, p: number) => Vector2;
