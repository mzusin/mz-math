import { ICircle, IPolygon, IRect } from '../types';
/**
 * Rectangles collision detection.
 * Rectangles should not be rotated.
 * The algorithm works by ensuring there is no gap between any of the 4 sides of the rectangles.
 * Any gap means a collision does not exist.
 * Returns true if collision is detected.
 */
export declare const rectCollide: (rect1: IRect, rect2: IRect) => boolean;
/**
 * Circles collision detection.
 * This algorithm works by taking the center points of the two circles
 * and ensuring the distance between the center points
 * are less than the two radii added together.
 * Returns true if collision is detected.
 */
export declare const circleCollide: (circle1: ICircle, circle2: ICircle) => boolean;
export declare const convexPolygonsCollide: (poly1: IPolygon, poly2: IPolygon) => boolean;
