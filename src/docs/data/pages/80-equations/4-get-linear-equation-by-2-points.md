# Get linear equation by two points

The **getLinearEquationBy2Points()** function calculates the equation of a line given two points in a 2D space. The equation is in the form of **y = ax + b**, where **'a'** represents the slope of the line and **'b'** represents the y-intercept.

```js
import { getLinearEquationBy2Points, Vector2 } from 'mz-math';

const point1: Vector2 = [2, 3];
const point2: Vector2 = [4, 7];
const result = getLinearEquationBy2Points(point1, point2);

/*
Result:
-------
{
    formula: "y = 2x - 1",
    slope: 2,
    yIntercept: -1,
    xIntercept: undefined,
}
 */
```

```js
import { getLinearEquationBy2Points, Vector2 } from 'mz-math';

const point1: Vector2 = [1, 5];
const point2: Vector2 = [3, 5];
const result = getLinearEquationBy2Points(point1, point2);

/*
Result:
-------
{
    formula: "y = 5",
    slope: 0,
    yIntercept: 5,
    xIntercept: undefined,
}
 */
```

```js
import { getLinearEquationBy2Points, Vector2 } from 'mz-math';

const point1: Vector2 = [2, 3];
const point2: Vector2 = [2, 7];
const result = getLinearEquationBy2Points(point1, point2);

/*
Result:
-------
{
    formula: "x = 2",
    slope: undefined,
    yIntercept: undefined,
    xIntercept: 2,
}
 */
```