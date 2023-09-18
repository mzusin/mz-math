# mzMath - a collection of TypeScript-based math helpers 🚀

![GitHub package.json version](https://img.shields.io/github/package-json/v/mzusin/mz-math)
[![NPM](https://img.shields.io/badge/npm-math-brightgreen)](https://www.npmjs.com/package/mz-math)

This project is a collection of TypeScript math helpers and utilities for the browser and Node.js. The modular approach allows to select only the required functions. It works well with all modern bundlers and supports **tree shaking** 🌲. The library is built using immutable/pure functions. 

## Documentation 🔖
### Main 
- [Typescript Usage](https://math.mzsoft.org/pages/typescript-usage.html)
- [Browser Usage](https://math.mzsoft.org/pages/browser-usage.html)
- [Node.js Usage](https://math.mzsoft.org/pages/nodejs-usage.html)
### Vectors 
- [Vectors](https://math.mzsoft.org/pages/vectors.html)
- [Vectors Sum](https://math.mzsoft.org/pages/vectors-sum.html)
- [Vectors Subtraction](https://math.mzsoft.org/pages/vectors-subtraction.html)
- [Multiply by Scalar](https://math.mzsoft.org/pages/multiply-vector-by-scalar.html)
- [Divide by Scalar](https://math.mzsoft.org/pages/divide-vector-by-scalar.html)
- [Vector Length](https://math.mzsoft.org/pages/vector-length.html)
- [Normalized (Unit) Vector](https://math.mzsoft.org/pages/normalize-vector.html)
- [Dot Product](https://math.mzsoft.org/pages/dot-product.html)
- [Cross Product](https://math.mzsoft.org/pages/cross-product.html)
- [Distance Between Vectors](https://math.mzsoft.org/pages/distance-between-vectors.html)
- [Vector Initialization](https://math.mzsoft.org/pages/vector-initialization.html)
- [Vectors Equality](https://math.mzsoft.org/pages/vectors-equality.html)
- [Get Normal](https://math.mzsoft.org/pages/get-normal.html)
### Matrix 
- [Matrix](https://math.mzsoft.org/pages/matrix.html)
- [Matrix Sum](https://math.mzsoft.org/pages/matrix-sum.html)
- [Matrix Subtraction](https://math.mzsoft.org/pages/matrix-subtraction.html)
- [Multiply By Scalar](https://math.mzsoft.org/pages/multiply-by-scalar.html)
- [Divide By Scalar](https://math.mzsoft.org/pages/divide-by-scalar.html)
- [Matrix Transposition](https://math.mzsoft.org/pages/matrix-transposition.html)
- [Matrix Multiplication](https://math.mzsoft.org/pages/matrix-multiplication.html)
- [Multiply Matrix By Vector](https://math.mzsoft.org/pages/multiply-matrix-by-vector.html)
- [Matrix Determinant](https://math.mzsoft.org/pages/matrix-determinant.html)
- [Inverse Matrix](https://math.mzsoft.org/pages/inverse-matrix.html)
- [Matrix Singularity](https://math.mzsoft.org/pages/matrix-singularity.html)
- [Adjugate Matrix](https://math.mzsoft.org/pages/adjugate-matrix.html)
- [Get Matrix Minor](https://math.mzsoft.org/pages/get-matrix-minor.html)
### Matrix Manipulation 
- [Matrix Initialization](https://math.mzsoft.org/pages/matrix-initialization.html)
- [Matrix Equality](https://math.mzsoft.org/pages/matrix-equality.html)
- [Matrix Deep Copy](https://math.mzsoft.org/pages/matrix-deep-copy.html)
- [Append Or Prepend Row](https://math.mzsoft.org/pages/append-or-prepend-row.html)
- [Append Or Prepend Column](https://math.mzsoft.org/pages/append-or-prepend-column.html)
- [Remove Row Or Column](https://math.mzsoft.org/pages/remove-row-or-column.html)
- [Get Column](https://math.mzsoft.org/pages/get-column.html)
- [Reset Matrix](https://math.mzsoft.org/pages/reset-matrix.html)
### Transformation Matrices 
- [Translation Matrix](https://math.mzsoft.org/pages/translation-matrix.html)
- [Rotation Matrix](https://math.mzsoft.org/pages/rotation-matrix.html)
- [Rotate Around Point](https://math.mzsoft.org/pages/rotate-around-point.html)
- [Scale And Stretch Matrix](https://math.mzsoft.org/pages/scale-and-stretch-matrix.html)
- [Scale Around Point](https://math.mzsoft.org/pages/scale-around-point.html)
- [Reflection Matrix](https://math.mzsoft.org/pages/reflection-matrix.html)
- [Shearing Matrix](https://math.mzsoft.org/pages/shearing-matrix.html)
- [Matrix To Css Transform](https://math.mzsoft.org/pages/matrix-to-CSS-transform.html)
### Angles 
- [Vector Angle](https://math.mzsoft.org/pages/vector-angle.html)
- [Angle Between Vectors](https://math.mzsoft.org/pages/angle-between-vectors.html)
- [Degrees And Radians](https://math.mzsoft.org/pages/degrees-and-radians.html)
- [Angles Distance](https://math.mzsoft.org/pages/angles-distance.html)
- [Is Angle Between](https://math.mzsoft.org/pages/is-angle-between.html)
- [Is Clockwise](https://math.mzsoft.org/pages/is-clockwise.html)
- [Percent To Angle](https://math.mzsoft.org/pages/percent-to-angle.html)
### Random 
- [Get Random Number In Range](https://math.mzsoft.org/pages/get-random-number-in-range.html)
- [Get Random Integer](https://math.mzsoft.org/pages/get-random-integer.html)
- [Get Random Boolean](https://math.mzsoft.org/pages/get-random-boolean.html)
- [Get Random Item From Array](https://math.mzsoft.org/pages/get-random-item-from-array.html)
- [Random Id Or Guid](https://math.mzsoft.org/pages/random-id-or-GUID.html)
### Bezier Curve 
- [Get Point On Quadratic Bezier Curve](https://math.mzsoft.org/pages/get-point-on-quadratic-bezier-curve.html)
- [Get Point On Cubic Bezier Curve](https://math.mzsoft.org/pages/get-point-on-cubic-bezier-curve.html)
- [Tangent](https://math.mzsoft.org/pages/tangent.html)
- [Normal](https://math.mzsoft.org/pages/normal.html)
- [Extrema](https://math.mzsoft.org/pages/extrema.html)
- [Bounding Box](https://math.mzsoft.org/pages/bounding-box.html)
### Equations 
- [Linear Equation](https://math.mzsoft.org/pages/linear-equation.html)
- [System Of Linear Equations](https://math.mzsoft.org/pages/system-of-linear-equations.html)
- [Quadratic Equation](https://math.mzsoft.org/pages/quadratic-equation.html)
- [Get Linear Equation By 2 Points](https://math.mzsoft.org/pages/get-linear-equation-by-2-points.html)
### Path Movement 
- [Circle Movement](https://math.mzsoft.org/pages/circle-movement.html)
- [Ellipse Movement](https://math.mzsoft.org/pages/ellipse-movement.html)
- [Sine Wave Movement](https://math.mzsoft.org/pages/sine-wave-movement.html)
- [Lissajous Curve](https://math.mzsoft.org/pages/lissajous-curve.html)
### Color 
- [Color](https://math.mzsoft.org/pages/color.html)
- [Random Color](https://math.mzsoft.org/pages/random-color.html)
- [Convert Colors](https://math.mzsoft.org/pages/convert-colors.html)
- [Shift Colors](https://math.mzsoft.org/pages/shift-colors.html)
### Linear Interpolation 
- [Lerp](https://math.mzsoft.org/pages/lerp.html)
- [General Case](https://math.mzsoft.org/pages/general-case.html)
### Derivatives 
- [Polynomial](https://math.mzsoft.org/pages/polynomial.html)
- [Trigonometric Functions](https://math.mzsoft.org/pages/trigonometric-functions.html)
- [Bezier Curves](https://math.mzsoft.org/pages/bezier-curves.html)
### Collision Detection 
- [Rectangles Collision](https://math.mzsoft.org/pages/rectangles-collision.html)
- [Circles Collision](https://math.mzsoft.org/pages/circles-collision.html)
- [Convex Polygons Collision](https://math.mzsoft.org/pages/convex-polygons-collision.html)
### Animation 
- [Animation](https://math.mzsoft.org/pages/animation.html)
- [Get Animation Data](https://math.mzsoft.org/pages/get-animation-data.html)
### Circle And Ellipse 
- [Circumference](https://math.mzsoft.org/pages/circumference.html)
- [Is Angle In Circle Arc](https://math.mzsoft.org/pages/is-angle-in-circle-arc.html)
### Sequence 
- [Natural Numbers Sequence Sum](https://math.mzsoft.org/pages/natural-numbers-sequence-sum.html)
- [Arithmetic Sequence Sum](https://math.mzsoft.org/pages/arithmetic-sequence-sum.html)
### Other 
- [Set Decimal Places](https://math.mzsoft.org/pages/set-decimal-places.html)
- [Convert String To Number](https://math.mzsoft.org/pages/convert-string-to-number.html)
- [Square In Circle](https://math.mzsoft.org/pages/square-in-circle.html)
- [Modulo](https://math.mzsoft.org/pages/modulo.html)
- [Convert Range](https://math.mzsoft.org/pages/convert-range.html)
- [Check If Ranges Overlap](https://math.mzsoft.org/pages/check-if-ranges-overlap.html)
- [Check If Value Is Number](https://math.mzsoft.org/pages/check-if-value-is-number.html)
- [Polar To Cartesian](https://math.mzsoft.org/pages/polar-to-cartesian.html)
------------------------------


























































































































































































































































































































































































































































































































































































```                                                                        
 _______  _______  _______  _______ _________         
(       )/ ___   )(       )(  ___  )\__   __/|\     /|
| () () |\/   )  || () () || (   ) |   ) (   | )   ( |
| || || |    /   )| || || || (___) |   | |   | (___) |
| |(_)| |   /   / | |(_)| ||  ___  |   | |   |  ___  |
| |   | |  /   /  | |   | || (   ) |   | |   | (   ) |
| )   ( | /   (_/\| )   ( || )   ( |   | |   | )   ( |
|/     \|(_______/|/     \||/     \|   )_(   |/     \|
```  































































































































































































































































































































