# Convex Polygons Collision

This function **convexPolygonsCollide()** returns true if the convex polygons collide. It implements Separating Axis Theorem (SAT).

```ts
import { convexPolygonsCollide } from 'mz-math';

const poly1: Vector2[] = [[0, 0], [10, 0], [5, 10]];
const poly2: Vector2[] = [[5, 5], [15, 5], [10, 15]];

const isCollide = convexPolygonsCollide(poly1, poly2); // true
```

**IPolygon** type is defined as follows:

```ts
export type IPolygon = Vector2[];
```