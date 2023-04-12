## Node.js Usage

The library can also be used in Node.js.

```shell
npm install mz-math
```

```js
const { setDecimalPlaces } = require('mz-math/dist/mz-math.node.cjs');

const rounded = setDecimalPlaces(Math.PI, 2);
console.log(rounded);
```
