# Temperature Conversions

These functions allow conversion between different temperature scales. They accept a temperature value in one scale and return the equivalent temperature in another scale, with optional rounding to a specified number of decimal places.

```js
import { celsiusToFahrenheit } from 'mz-math';

const fahrenheit = celsiusToFahrenheit(0); // 32

const fahrenheitRoundedTo2 = celsiusToFahrenheit(32.698034, 2); // 90.86;
```

```js
import { celsiusToKelvin } from 'mz-math';

const kelvin = celsiusToKelvin(-273.15); // 0
```

```js
import { fahrenheitToCelsius } from 'mz-math';

const celsius = fahrenheitToCelsius(32); // 0
```

```js
import { fahrenheitToKelvin } from 'mz-math';

const kelvin = fahrenheitToKelvin(32); // 273.15
```

```js
import { kelvinToCelsius } from 'mz-math';

const celsius = kelvinToCelsius(273.15); // 0
```

```js
import { kelvinToFahrenheit } from 'mz-math';

const fahrenheit = kelvinToFahrenheit(273.15); // 32
```
