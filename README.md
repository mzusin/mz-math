# A collection of typescript-based math helpers

## TypeScript Usage

To use the library with TypeScript, you need to install the module from npm:

```
npm install toolcool-math
```

The import any function like **v2Sum**:
```js
import { v2Sum } from 'toolcool-math';

const v1 = { x: 1, y: 2 };
const v2 = { x: 3, y: 4 };
const sum = v2Sum(v1, v2); // { x: 4, y: 6 }
```

## Browser Usage

Any function can also be used in the browser using the **tc-math.min.js** file. All functions are located in the **TCMath** namespace:

```html
<script src="tc-math.min.js"></script>
<script>
    // vector sum example -----------------
    console.log(TCMath.v2Sum({ x: 1, y: 2 }, { x: 3, y: 4 }));
</script>
```

## Vectors Sum

To add vectors, the v2Sum and v3Sum functions are used. They can accept any number of vectors as input.

**2D Vector**
```js
import { v2Sum } from 'toolcool-math';

const v1 = { x: 1, y: 2 };
const v2 = { x: 3, y: 4 };
const sum = v2Sum(v1, v2); // { x: 4, y: 6 }

const v1 = { x: 1, y: 2 };
const v2 = { x: 3, y: 4 };
const v3 = { x: 5, y: 6 };
const sum = v2Sum(v1, v2, v3); // { x: 9, y: 12 }

const v1 = { x: 1, y: 2 };
const v2 = { x: 3, y: 4 };
const v3 = { x: 5, y: 6 };
const v4 = { x: 7, y: 8 };
const sum = v2Sum(v1, v2, v3, v4); // { x: 16, y: 20 }
```

**3D Vector**
```js
import { v3Sum } from 'toolcool-math';

const v1 = { x: 1, y: 2, z: 3 };
const v2 = { x: 3, y: 4, z: 4 };
const sum = v3Sum(v1, v2); // { x: 4, y: 6, z: 7 }

const v1 = { x: 1, y: 2, z: 3 };
const v2 = { x: 3, y: 4, z: 4 };
const v3 = { x: 7, y: 8, z: 9 };
const v2 = { x: 3, y: 4, z: 4 };
const sum = v3Sum(v1, v2, v3); // { x: 11, y: 14, z: 16 }

const v1 = { x: 1, y: 2, z: 3 };
const v2 = { x: 3, y: 4, z: 4 };
const v3 = { x: 7, y: 8, z: 9 };
const v4 = { x: 10, y: 11, z: 12 };
const sum = v3Sum(v1, v2, v3, v4); // { x: 21, y: 25, z: 28 }
```