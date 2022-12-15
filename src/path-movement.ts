import { Vector2 } from './types';

export const circularMovement = (center: Vector2, angle: number, radius: number): Vector2 => {
    angle = angle % Math.PI * 2;

    return [
        center[0] + Math.cos(angle) * radius,
        center[1] + Math.sin(angle) * radius
    ];
};