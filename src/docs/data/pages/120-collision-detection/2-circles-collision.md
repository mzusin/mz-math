# Circles Collision

This function **circleCollide()** returns true if the circles collide.

```ts
import { circleCollide } from 'mz-math';

const circle1 = { cx: 0, cy: 0, r: 10 };
const circle2 = { cx: 20, cy: 20, r: 5 };

const isCollide = circleCollide(rect1, rect2); // false
```

**ICircle** TypeScript interface is defined as follows:

```ts
export interface ICircle {
    cx: number;
    cy: number;
    r: number;
}
```