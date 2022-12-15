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