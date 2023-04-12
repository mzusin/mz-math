## TypeScript Usage

To use the library with TypeScript, you need to install the module from npm:

```shell
npm install mz-math
```

Or using Yarn:

```shell
yarn add mz-svg
```

The import any function like **v2Sum**:
```js
import { v2Sum, Vector2 } from 'mz-math';

const v1: Vector2 = [1, 2];
const v2: Vector2 = [3, 4];
const sum = v2Sum(v1, v2); // [4, 6]
```