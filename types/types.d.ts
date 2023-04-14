export type Vector2 = [number, number];
export type Vector3 = [number, number, number];
export type Vector4 = [number, number, number, number];
export type Vector = number[];
export type Matrix2 = Vector2[];
export type Matrix3 = Vector3[];
export type Matrix4 = Vector4[];
export type Matrix = Vector[];
export type HSLColor = [number, number, number];
export type RGBColor = [number, number, number];
export interface IBBox {
    x: number;
    y: number;
    w: number;
    h: number;
    x2: number;
    y2: number;
}
