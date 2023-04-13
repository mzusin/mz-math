# Derivatives of Polynomials

To take derivatives of a polynomial, you can use **dxPolynomial()** function.
The polynomial is represented as an array, where each element is [coefficient, power]. For example, **y = 3x+2** is represented as **[[3, 1], [2, 0]]**.

```js
import { dxPolynomial } from 'mz-math';

const x = 10;

// y = 3x+2
const polynomial = [[3, 1], [2, 0]];

const decimalPlaces = 2; // optional

const result = dxPolynomial(x, polynomial, decimalPlaces);
```