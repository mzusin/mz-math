import { rectCollide, circleCollide, convexPolygonsCollide } from '../src/main/collision-detection';
import { Vector2 } from '../types/types';

describe('Collision Detection', () => {

    describe('rectCollide()', () => {
        const rect1 = { x: 0, y: 0, w: 10, h: 10 };
        const rect2 = { x: 5, y: 5, w: 10, h: 10 };
        const rect3 = { x: 15, y: 15, w: 10, h: 10 };

        test('should detect collision when two rectangles overlap', () => {
            expect(rectCollide(rect1, rect2)).toBe(true);
        });

        test('should not detect collision when two rectangles do not overlap', () => {
            expect(rectCollide(rect1, rect3)).toBe(false);
        });

        test('should detect collision when two rectangles share a side', () => {
            const rect4 = { x: 0, y: 10, w: 10, h: 10 };
            expect(rectCollide(rect1, rect4)).toBe(true);
        });

        test('should detect collision when two rectangles touch at a corner', () => {
            const rect5 = { x: 10, y: 10, w: 10, h: 10 };
            expect(rectCollide(rect1, rect5)).toBe(true);
        });

        test('should detect collision when one rectangle is completely inside the other', () => {
            const rect1 = { x: 0, y: 0, w: 20, h: 20 };
            const rect2 = { x: 5, y: 5, w: 10, h: 10 };
            expect(rectCollide(rect1, rect2)).toBe(true);
            expect(rectCollide(rect2, rect1)).toBe(true);
        });

        test('should detect collision when rectangles share a side and one rectangle is inside the other', () => {
            const rect1 = { x: 0, y: 0, w: 20, h: 20 };
            const rect2 = { x: 0, y: 10, w: 20, h: 10 };
            expect(rectCollide(rect1, rect2)).toBe(true);
            expect(rectCollide(rect2, rect1)).toBe(true);
        });

        test('should detect collision when rectangles touch at a corner and one rectangle is inside the other', () => {
            const rect1 = { x: 0, y: 0, w: 20, h: 20 };
            const rect2 = { x: 20, y: 20, w: 10, h: 10 };
            expect(rectCollide(rect1, rect2)).toBe(true);
            expect(rectCollide(rect2, rect1)).toBe(true);
        });
    });

    describe('circleCollide()', () => {

        test('should detect collision when circles overlap', () => {
            const circle1 = { cx: 0, cy: 0, r: 10 };
            const circle2 = { cx: 5, cy: 5, r: 5 };
            expect(circleCollide(circle1, circle2)).toBe(true);
        });

        test('should not detect collision when circles do not overlap', () => {
            const circle1 = { cx: 0, cy: 0, r: 10 };
            const circle2 = { cx: 20, cy: 20, r: 5 };
            expect(circleCollide(circle1, circle2)).toBe(false);
        });

        test('should detect collision when circles are tangent', () => {
            const circle1 = { cx: 0, cy: 0, r: 10 };
            const circle2 = { cx: 20, cy: 0, r: 10 };
            expect(circleCollide(circle1, circle2)).toBe(true);
        });

        test('should not detect collision when circles are just touching', () => {
            const circle1 = { cx: 0, cy: 0, r: 10 };
            const circle2 = { cx: 20, cy: 0, r: 9 };
            expect(circleCollide(circle1, circle2)).toBe(false);
        });
    });

    describe('convexPolygonsCollide()', () => {

        test('should detect collision when polygons overlap', () => {
            const poly1: Vector2[] = [[0, 0], [10, 0], [5, 10]];
            const poly2: Vector2[] = [[5, 5], [15, 5], [10, 15]];
            expect(convexPolygonsCollide(poly1, poly2)).toBe(true);
        });

        test('should detect collision when polygons intersect', () => {
            const poly1: Vector2[] = [[0, 0], [10, 0], [10, 10]];
            const poly2: Vector2[] = [[5, 5], [15, 5], [10, 15]];
            expect(convexPolygonsCollide(poly1, poly2)).toBe(true);
        });

        test('should detect collision when one polygon is inside the other', () => {
            const poly1: Vector2[] = [[0, 0], [10, 0], [5, 10]];
            const poly2: Vector2[] = [[2, 2], [8, 2], [5, 5], [8, 8], [2, 8]];
            expect(convexPolygonsCollide(poly1, poly2)).toBe(true);
        });

        test('should not detect collision when polygons do not overlap', () => {
            const poly1: Vector2[] = [[0, 0], [10, 0], [5, 10]];
            const poly2: Vector2[] = [[20, 20], [30, 20], [25, 30]];
            expect(convexPolygonsCollide(poly1, poly2)).toBe(false);
        });

        test('should not detect collision when polygons are separated by a gap', () => {
            const poly1: Vector2[] = [[0, 0], [10, 0], [5, 10]];
            const poly2: Vector2[] = [[20, 30], [30, 30], [25, 40]];
            expect(convexPolygonsCollide(poly1, poly2)).toBe(false);
        });

        test('should not detect collision when one polygon is completely outside the other', () => {
            const poly1: Vector2[] = [[0, 0], [10, 0], [5, 10]];
            const poly2: Vector2[] = [[50, 50], [60, 50], [55, 60]];
            expect(convexPolygonsCollide(poly1, poly2)).toBe(false);
        });

        test('should not detect collision when one polygon is completely above the other', () => {
            const poly1: Vector2[] = [[0, 0], [10, 0], [5, 10]];
            const poly2: Vector2[] = [[0, 20], [10, 20], [5, 30]];
            expect(convexPolygonsCollide(poly1, poly2)).toBe(false);
        });

        const rect1: Vector2[] = [[0, 0], [10, 0], [10, 10], [0, 10]];
        const rect2: Vector2[] = [[5, 5], [15, 5], [15, 15], [5, 15]];
        const rect3: Vector2[] = [[15, 15], [25, 15], [25, 25], [15, 25]];

        test('should detect collision when two rectangles overlap', () => {
            expect(convexPolygonsCollide(rect1, rect2)).toBe(true);
        });

        test('should not detect collision when two rectangles do not overlap #1', () => {
            expect(convexPolygonsCollide(rect1, rect3)).toBe(false);
        });

        test('should not detect collision when two rectangles do not overlap #2', () => {
            const rect1: Vector2[] = [[0, 0], [10, 0], [10, 10], [0, 10]];
            const rect3: Vector2[] = [[15, 15], [25, 15], [25, 25], [15, 25]];
            expect(convexPolygonsCollide(rect1, rect3)).toBe(false);
        });

        test('should detect collision when two rectangles share a side', () => {
            const rect4: Vector2[] = [[0, 10], [10, 10], [10, 20], [0, 20]];
            expect(convexPolygonsCollide(rect1, rect4)).toBe(true);
        });

        test('should detect collision when two rectangles touch at a corner', () => {
            const rect5: Vector2[] = [[10, 10], [20, 10], [20, 20], [10, 20]];
            expect(convexPolygonsCollide(rect1, rect5)).toBe(true);
        });

        test('should detect collision when one rectangle is completely inside the other', () => {
            const rect1: Vector2[] = [[0, 0], [20, 0], [20, 20], [0, 20]];
            const rect2: Vector2[] = [[5, 5], [15, 5], [15, 15], [5, 15]];
            expect(convexPolygonsCollide(rect1, rect2)).toBe(true);
            expect(convexPolygonsCollide(rect2, rect1)).toBe(true);
        });

        test('should detect collision when rectangles share a side and one rectangle is inside the other', () => {
            const rect1: Vector2[] = [[0, 0], [20, 0], [20, 20], [0, 20]];
            const rect2: Vector2[] = [[0, 10], [30, 0], [30, 20], [0, 20]];
            expect(convexPolygonsCollide(rect1, rect2)).toBe(true);
            expect(convexPolygonsCollide(rect2, rect1)).toBe(true);
        });

        test('should detect collision when rectangles touch at a corner and one rectangle is inside the other', () => {
            const rect1: Vector2[] = [[0, 0], [20, 0], [20, 20], [0, 20]];
            const rect2: Vector2[] = [[20, 20], [30, 20], [30, 30], [20, 30]];
            expect(convexPolygonsCollide(rect1, rect2)).toBe(true);
            expect(convexPolygonsCollide(rect2, rect1)).toBe(true);
        });

    });
});