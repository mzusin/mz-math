# Rectangles Collision

This function **rectCollide()** returns true if the rectangles collide.

```ts
import { rectCollide } from 'mz-math';

const rect1 = { x: 0, y: 0, w: 10, h: 10 };
const rect2 = { x: 5, y: 5, w: 10, h: 10 };

const isCollide = rectCollide(rect1, rect2); // true
```

**IRect** TypeScript interface is defined as follows:

```ts
export interface IRect {
    x: number;
    y: number;
    w: number;
    h: number;
}
```