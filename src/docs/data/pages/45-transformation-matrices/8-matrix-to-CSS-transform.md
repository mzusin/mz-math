# Matrix to CSS transform

The functions below help to convert the matrix to the following CSS functions: [matrix()](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix) and [matrix3d()](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d).

```js
import { Matrix3, m2hToCSS } from 'mz-math';

// 2d matrix in homogeneous coordinates
const mat: Matrix3 = [
  [1, 2, 0],
  [3, 4, 0],
  [0, 0, 1],
];
const str1 = m2hToCSS(mat); // matrix(1, 3, 2, 4, 0, 4)
```

It can be used as:

```css
.box{
  transform: matrix(1, 3, 2, 4, 0, 4);
}
```

[matrix3d()](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d) representation:

```js
import { Matrix3, m2hToCSS3d } from 'mz-math';

// 2d matrix in homogeneous coordinates
const mat: Matrix3 = [
  [1, 2, 0],
  [3, 4, 0],
  [0, 0, 1],
];
const str1 = m2hToCSS3d(mat); // matrix3d(1, 3, 0, 0, 2, 4, 0, 0, 0, 0, 1, 0, 0, 4, 0, 1)
```

Non-homogeneous coordinates version:

```js
import { Matrix2, m2ToCSS } from 'mz-math';

// 2d matrix in homogeneous coordinates
const mat: Matrix2 = [
  [1, 2],
  [3, 4],
];
const str1 = m2ToCSS(mat); // matrix(1, 3, 2, 4, 0, 0)
```

3D matrix in homogeneous coordinates:

```js
import { Matrix4, m3hToCSS3d } from 'mz-math';

// 2d matrix in homogeneous coordinates
const mat: Matrix4 = [
  [1, 0, 0, 10],
  [0, 1, 0, 20],
  [0, 0, 1, 30],
  [0, 0, 0, 1],
];
const str1 = m3hToCSS3d(mat); 
/*
matrix3d(
      1, 0, 0, 10,
      0, 1, 0, 20,
      0, 0, 1, 30,
      0, 0, 0, 1
)
 */
```

[Matrix to CSS transform example (rotation)](https://github.com/mzusin/mz-math/blob/main/examples/matrix-to-css-rotation.html)