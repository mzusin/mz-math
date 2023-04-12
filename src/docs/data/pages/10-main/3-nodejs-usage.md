## Node.js Usage

The library can also be used in Node.js.

```shell
npm install mz-math
```

Or using Yarn:

```shell
yarn add mz-svg
```

Call any mzMath API or function:

```js
const { setDecimalPlaces } = require('mz-math');

const rounded = setDecimalPlaces(Math.PI, 2);
console.log(rounded);
```
