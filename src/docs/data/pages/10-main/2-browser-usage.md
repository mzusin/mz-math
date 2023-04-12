## Browser Usage

The library can also be used directly in browsers without TypeScript. First, download the [mz-math.min.js](https://github.com/mzusin/mz-math/blob/main/dist/mz-math.min.js) file from the GitHub repository. Then use the **mzMath** global namespace to call any API or function.

```html
<script src="mz-math.min.js"></script>
<script>
    const sum = mzMath.v2Sum([1, 2], [3, 4]);
    console.log(sum);
</script>
```

The library is also available on the [jsDelivr CND](https://cdn.jsdelivr.net/npm/mz-math/dist/mz-math.min.js):

```html
<script src="https://cdn.jsdelivr.net/npm/mz-math/dist/mz-math.min.js"></script>
<script>
    const sum = mzMath.v2Sum([1, 2], [3, 4]);
    console.log(sum);
</script>
```