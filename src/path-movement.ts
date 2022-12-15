import { Vector2 } from './types';

export const circleMovement = (center: Vector2, angle: number, radius: number): Vector2 => {
    angle = angle % Math.PI * 2;

    return [
        center[0] + Math.cos(angle) * radius,
        center[1] + Math.sin(angle) * radius
    ];
};

export const ellipseMovement = (center: Vector2, angle: number, radius1: number, radius2: number): Vector2 => {
    angle = angle % Math.PI * 2;

    return [
        center[0] + Math.cos(angle) * radius1,
        center[1] + Math.sin(angle) * radius2
    ];
};

/**
 * Sine Wave (Sinusoid)
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