import { ICircle, IPolygon, IRect, Matrix2, Vector2 } from '../types';
import { mod } from './other';
import { v2GetNormal, v2DotProduct } from './linear-algebra/vector';

/**
 * Rectangles collision detection.
 * Rectangles should not be rotated.
 * The algorithm works by ensuring there is no gap between any of the 4 sides of the rectangles.
 * Any gap means a collision does not exist.
 * Returns true if collision is detected.
 */
export const rectCollide = (rect1: IRect, rect2: IRect) : boolean => {
    return rect1.x <= rect2.x + rect2.w &&
            rect1.x + rect1.w >= rect2.x &&
            rect1.y <= rect2.y + rect2.h &&
            rect1.h + rect1.y >= rect2.y;
};

/**
 * Circles collision detection.
 * This algorithm works by taking the center points of the two circles
 * and ensuring the distance between the center points
 * are less than the two radii added together.
 * Returns true if collision is detected.
 */
export const circleCollide = (circle1: ICircle, circle2: ICircle) => {
    const dx = Math.abs(circle1.cx - circle2.cx);
    const dy = Math.abs(circle1.cy - circle2.cy);
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance <= circle1.r + circle2.r;
};

//-------------------- SAT Collision detection -------------------------

const getEdges = (poly: IPolygon) : Matrix2[] => {
    const edges: Matrix2[] = [];

    for(let i= 0; i<poly.length; i++){
        const nextIndex = mod(i + 1, poly.length);
        const edge: Matrix2 = [poly[i], poly[nextIndex]];
        edges.push(edge);
    }

    return edges;
};

export const convexPolygonsCollide = (poly1: IPolygon, poly2: IPolygon): boolean => {
    const edges: Matrix2[] = [];

    // collect polygon edges, and combine then into a single array
    edges.push(...getEdges(poly1));
    edges.push(...getEdges(poly2));

    // for each edge, find the normal vector and project both polygons onto it
    for (const edge of edges) {
        const normal = v2GetNormal(edge[0], edge[1]);
        const p1Proj = projectPolygon(poly1, normal);
        const p2Proj = projectPolygon(poly2, normal);

        // Check if the projections overlap
        const isOverlap = p1Proj.max >= p2Proj.min && p2Proj.max >= p1Proj.min;

        // Check if the projections overlap; if not, the polygons do not collide
        if (!isOverlap) return false;
    }

    // If all tests pass, the polygons overlap and collide
    return true;
};

/**
 * Project every polygon point onto the normal.
 * Then find min and max.
 */
const projectPolygon = (polygon: IPolygon, normal: Vector2): { min: number, max: number } => {
    let min = Infinity;
    let max = -Infinity;

    // Project each vertex of the polygon onto the axis
    for (const vertex of polygon) {
        const projection = v2DotProduct(vertex, normal);
        min = Math.min(min, projection);
        max = Math.max(max, projection);
    }

    return { min, max };
};