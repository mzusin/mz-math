export type Vector2 = [number, number];
export type Vector3 = [number, number, number];
export type Vector4 = [number, number, number, number];
export type Vector = number[];

export type Matrix2 = Vector2[];
export type Matrix3 = Vector3[];
export type Matrix4 = Vector4[];
export type Matrix = Vector[];

export type HSLColor = [number, number, number]; // [hue, saturation, lightness] [0-360, 0-100, 0-100]
export type RGBColor = [number, number, number]; // [r, g, b] [0, 255, 0, 255, 0, 255]

export interface IBBox {
    x: number;
    y: number;
    w: number;
    h: number;
    x2: number;
    y2: number;
}

export interface IRect {
    x: number;
    y: number;
    w: number;
    h: number;
}

export interface ICircle {
    cx: number;
    cy: number;
    r: number;
}

export type IPolygon = Vector2[];