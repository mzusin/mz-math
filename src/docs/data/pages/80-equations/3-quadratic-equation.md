# Quadratic Equation

Using the **quadraticEquation()** function, you can solve a quadratic equation.

```js
import { quadraticEquation, Vector } from 'mz-math';

const equation: Vector = [-4, 28, -49, 0]; // -4x^2 + 28x - 49 = 0
const decimalPlaces = 2; // optional

// 1 result
const result: Vector = quadraticEquation(equation, decimalPlaces); // [3.5]
```

```js
import { quadraticEquation, Vector } from 'mz-math';

const equation: Vector = [1, -1, 0, 0]; // x^2 - x = 0
const decimalPlaces = 2; // optional

// 2 results
const result: Vector = quadraticEquation(equation, decimalPlaces); // [1, 0]
```

```js
import { quadraticEquation, Vector } from 'mz-math';

const equation: Vector = [3, -4, 94, 0]; // 3x^2 - 4x + 94 = 0
const decimalPlaces = 2; // optional

// no results
const result: Vector = quadraticEquation(equation, decimalPlaces); // [] 
```

```js
import { quadraticEquation, Vector } from 'mz-math';

const equation: Vector = [1, 0, -10, 39]; // x^2 - 10 = 39
const decimalPlaces = 2; // optional

// 2 results
const result: Vector = quadraticEquation(equation, decimalPlaces); // [7, -7]
```