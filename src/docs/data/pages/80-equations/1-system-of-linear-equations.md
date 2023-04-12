# System of linear Equations

**System of 2 linear equations**

Using the **equationSystem2** function, you can solve a system of 2 linear equations. It receives **2 vectors** of equation parameters and an optional **decimalPlaces** parameter.

If the system of equations has no solution, then **null** is returned.

For example:
```js
import { equationSystem2, Vector2, Vector3 } from 'mz-math';

// 3x + 2y = 7 
// -6x + 6y = 6

const equation1: Vector3 = [3, 2, 7];
const equation2: Vector3 = [-6, 6, 6];
const result: Vector2|null = equationSystem2(equation1, equation2); // [1, 2] i.e. x=1, y=2
```

**System of 3 linear equations**

Using the **equationSystem3** function, you can solve a system of 3 linear equations. It receives **3 vectors** of equation parameters and an optional **decimalPlaces** parameter.

If the system of equations has no solution, then **null** is returned.

For example:
```js
import { equationSystem3, Vector3, Vector } from 'mz-math';

// 2x + y + 2z = -2
// -2x + 2y -z = -5
// 4x + y + 2x = 0

const equation1: Vector = [2, 1, 2, -2];
const equation2: Vector = [-2, 2, -1, -5];
const equation3: Vector = [4, 1, 2, 0];
const result: Vector3|null = equationSystem3(equation1, equation2, equation3); // [1, -2, -1] i.e. x=1, y=-2, z=-1
```

**System of N linear equations**

Using the **equationSystemN** function, you can solve a system of N linear equations. It receives a matrix of equation parameters, and an optional **decimalPlaces** parameter.

If the system of equations has no solution, then **null** is returned.

For example:
```js
import { equationSystem, Vector } from 'mz-math';

/*
y + z - 2w = -3
x + 2y - z = 2
2x + 4y + z - 3w = -2
x - 4y - 7z - w = -19
 */

const parameters: Matrix = [
  [0, 1, 1, -2, -3],
  [1, 2, -1, 0, 2],
  [2, 4, 1, -3, -2],
  [1, -4, -7, -1, -19],
];

const result: Vector|null = equationSystemN(parameters, 2); // round to 2 decimal places

// The result: [-1, 2, 1, 3] i.e. x = -1, y = 2, z = 1, w = 3
```
