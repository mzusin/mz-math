# Linear Equation

Using the **linearEquation()** function, you can solve a simple linear equation.

```js
import { linearEquation, Vector3 } from 'mz-math';

const equation: Vector3 = [1, 3, 5]; // x + 3 = 5
const decimalPlaces = 2; // optional

const result: number = linearEquation(equation, decimalPlaces); // 2
```