# Get Circle & Ellipse Circumference

The isAngleInCircleArc() function checks whether a given angle falls within a circular arc defined by a start angle and an end angle. It considers the possibility of the arc crossing the 360-degree mark and handles it accordingly.

```js
import { isAngleInCircleArc } from 'mz-math';

const startAngleDeg = 0;
const endAngleDeg = 90; 
const currentDegrees = 45;

const isInAcr = isAngleInCircleArc(startAngleDeg, endAngleDeg, currentDegrees); // true
```

```js
import { isAngleInCircleArc } from 'mz-math';

const startAngleDeg = 0;
const endAngleDeg = 90; 
const currentDegrees = 180;

const isInAcr = isAngleInCircleArc(startAngleDeg, endAngleDeg, currentDegrees); // false
```
