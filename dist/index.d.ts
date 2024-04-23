import { LABColor } from '../types/types';

declare module 'mz-math' {

    export type Vector2 = [number, number];
    export type Vector3 = [number, number, number];
    export type Vector4 = [number, number, number, number];
    export type Vector = number[];

    export type Matrix2 = Vector2[];
    export type Matrix3 = Vector3[];
    export type Matrix4 = Vector4[];
    export type Matrix = Vector[];

    export type HSLColor = [number, number, number];
    export type RGBColor = [number, number, number];
    export type LABColor = [number, number, number];

    export const v2: (defaultValue?: number) => Vector2;
    export const v3: (defaultValue?: number) => Vector3;
    export const v4: (defaultValue?: number) => Vector4;
    export const vN: (N: number, defaultValue?: number) => Vector;
    export const v2FromPolarCoords: (distance: number, angleRad: number) => Vector2;

    export const m2x2: (defaultValue?: number) => Matrix2;
    export const m3x3: (defaultValue?: number) => Matrix3;
    export const m4x4: (defaultValue?: number) => Matrix4;
    export const mNxM: (N: number, M: number, defaultValue?: number) => Matrix;

    export const identity2: () => Matrix2;
    export const identity3: () => Matrix3;
    export const identity4: () => Matrix4;
    export const identityN: (N: number) => Matrix;

    export const vEqual: (vector1: Vector, vector2: Vector) => boolean;
    export const mEqual: (matrix1: Matrix, matrix2: Matrix) => boolean;

    export const mDeepCopy: (m: Matrix) => Matrix;
    export const m2DeepCopy: (m2: Matrix2) => Matrix2;
    export const m3DeepCopy: (m3: Matrix3) => Matrix3;

    export const mAppendRow: (m: Matrix, row: Vector) => Matrix;
    export const m2AppendRow: (m2: Matrix2, row: Vector2) => Matrix2;
    export const m3AppendRow: (m3: Matrix3, row: Vector3) => Matrix3;
    export const mPrependRow: (m: Matrix, row: Vector) => Matrix;
    export const m2PrependRow: (m2: Matrix2, row: Vector2) => Matrix2;
    export const m3PrependRow: (m3: Matrix3, row: Vector3) => Matrix3;
    export const mAppendCol: (m: Matrix, col: Vector) => Matrix;
    export const mPrependCol: (m: Matrix, col: Vector) => Matrix;
    export const mDelLastRow: (m: Matrix) => Matrix;
    export const mDelFirstRow: (m: Matrix) => Matrix;
    export const mDelLastColumn: (m: Matrix) => Matrix;
    export const mDelFirstColumn: (m: Matrix) => Matrix;
    export const mGetFirstColumn: (m: Matrix) => Vector;
    export const mGetLastColumn: (m: Matrix) => Vector;
    export const mGetColumn: (m: Matrix, colIndex: number) => Vector;

    export const vSum: (vector1: Vector, vector2: Vector, decimalPlaces?: number) => Vector;
    export const v2Sum: (vector1: Vector2, vector2: Vector2, decimalPlaces?: number) => Vector2;
    export const v3Sum: (vector1: Vector3, vector2: Vector3, decimalPlaces?: number) => Vector3;

    export const vSub: (vector1: Vector, vector2: Vector, decimalPlaces?: number) => Vector;
    export const v2Sub: (vector1: Vector2, vector2: Vector2, decimalPlaces?: number) => Vector2;
    export const v3Sub: (vector1: Vector3, vector2: Vector3, decimalPlaces?: number) => Vector3;

    export const vMulScalar: (v: Vector, scalar: number, decimalPlaces?: number) => Vector;
    export const v2MulScalar: (v2: Vector2, scalar: number, decimalPlaces?: number) => Vector2;
    export const v3MulScalar: (v3: Vector3, scalar: number, decimalPlaces?: number) => Vector3;

    export const vDivideScalar: (v: Vector, scalar: number, decimalPlaces?: number) => Vector;
    export const v2DivideScalar: (v2: Vector2, scalar: number, decimalPlaces?: number) => Vector2;
    export const v3DivideScalar: (v3: Vector3, scalar: number, decimalPlaces?: number) => Vector3;

    export const vLength: (vector: Vector, decimalPlaces?: number) => number;
    export const v2Length: (vector: Vector2, decimalPlaces?: number) => number;
    export const v3Length: (vector: Vector3, decimalPlaces?: number) => number;
    export const v2SetLength: (v2: Vector2, newLength: number, decimalPlaces?: number) => Vector2;

    export const vDistance: (vector1: Vector, vector2: Vector, decimalPlaces?: number) => number;
    export const v2Distance: (vector1: Vector2, vector2: Vector2, decimalPlaces?: number) => number;
    export const v3Distance: (vector1: Vector3, vector2: Vector3, decimalPlaces?: number) => number;

    export const vNormalize: (v: Vector, decimalPlaces?: number) => Vector;
    export const v2Normalize: (v2: Vector2, decimalPlaces?: number) => Vector2;
    export const v3Normalize: (v3: Vector3, decimalPlaces?: number) => Vector3;

    export const vDotProduct: (vector1: Vector, vector2: Vector, decimalPlaces?: number) => number;
    export const v2DotProduct: (vector1: Vector2, vector2: Vector2, decimalPlaces?: number) => number;
    export const v3DotProduct: (vector1: Vector3, vector2: Vector3, decimalPlaces?: number) => number;

    export const v3CrossProduct: (vector1: Vector3, vector2: Vector3, decimalPlaces?: number) => Vector3;

    export const v2GetNormal: (vector1: Vector2, vector2: Vector2, decimalPlaces?: number) => Vector2;

    export const mSum: (matrix1: Matrix, matrix2: Matrix, decimalPlaces?: number) => Matrix;
    export const m2Sum: (matrix1: Matrix2, matrix2: Matrix2, decimalPlaces?: number) => Matrix2;
    export const m3Sum: (matrix1: Matrix3, matrix2: Matrix3, decimalPlaces?: number) => Matrix3;

    export const mSub: (matrix1: Matrix, matrix2: Matrix, decimalPlaces?: number) => Matrix;
    export const m2Sub: (matrix1: Matrix2, matrix2: Matrix2, decimalPlaces?: number) => Matrix2;
    export const m3Sub: (matrix1: Matrix3, matrix2: Matrix3, decimalPlaces?: number) => Matrix3;

    export const mMulScalar: (m: Matrix, scalar: number, decimalPlaces?: number) => Matrix;
    export const m2MulScalar: (m2: Matrix2, scalar: number, decimalPlaces?: number) => Matrix2;
    export const m3MulScalar: (m3: Matrix3, scalar: number, decimalPlaces?: number) => Matrix3;
    export const mDivideScalar: (m: Matrix, scalar: number, decimalPlaces?: number) => Matrix;
    export const m2DivideScalar: (m2: Matrix2, scalar: number, decimalPlaces?: number) => Matrix2;
    export const m3DivideScalar: (m3: Matrix3, scalar: number, decimalPlaces?: number) => Matrix3;

    export const mTranspose: (m: Matrix) => Matrix;
    export const m2Transpose: (m2: Matrix2) => Matrix;
    export const m3Transpose: (m3: Matrix3) => Matrix;

    export const mMul: (matrix1: Matrix, matrix2: Matrix, decimalPlaces?: number) => Matrix;
    export const mMulVector: (matrix: Matrix, vector: Vector, decimalPlaces?: number) => Vector;

    export const mReset: (m: Matrix, defaultValue?: number) => Matrix;
    export const m2Reset: (m2: Matrix2, defaultValue?: number) => Matrix2;
    export const m3Reset: (m3: Matrix3, defaultValue?: number) => Matrix3;

    export const m2Translation: (position: Vector2, decimalPlaces?: number) => Matrix2;
    export const m3Translation: (position: Vector3, decimalPlaces?: number) => Matrix3;
    export const m2TranslationH: (position: Vector3, decimalPlaces?: number) => Matrix3;
    export const m3TranslationH: (position: Vector4, decimalPlaces?: number) => Matrix4;

    export const m2Rotation: (angleRad: number, isClockwise?: boolean, decimalPlaces?: number) => Matrix2;
    export const m2RotationH: (angleRad: number, isClockwise?: boolean, decimalPlaces?: number) => Matrix3;
    export const v2Rotate: (angleRad: number, vector: Vector2, isClockwise?: boolean, decimalPlaces?: number) => Vector2;
    export const v2RotateH: (angleRad: number, vector: Vector3, isClockwise?: boolean, decimalPlaces?: number) => Vector3;
    export const m2RotationAroundPointH: (angleRad: number, transformOrigin: Vector3, isClockwise?: boolean, decimalPlaces?: number) => Matrix3;
    export const m2RotateAroundPointH: (angleRad: number, transformOrigin: Vector3, position: Vector3, isClockwise?: boolean, decimalPlaces?: number) => Vector3;

    export const m3RotationX: (angleRad: number, isClockwise?: boolean, decimalPlaces?: number) => Matrix3;
    export const m3RotationXH: (angleRad: number, isClockwise?: boolean, decimalPlaces?: number) => Matrix4;
    export const v3RotateX: (angleRad: number, vector: Vector3, isClockwise?: boolean, decimalPlaces?: number) => Vector3;
    export const m3RotationY: (angleRad: number, isClockwise?: boolean, decimalPlaces?: number) => Matrix3;
    export const m3RotationYH: (angleRad: number, isClockwise?: boolean, decimalPlaces?: number) => Matrix4;
    export const v3RotateY: (angleRad: number, vector: Vector3, isClockwise?: boolean, decimalPlaces?: number) => Vector3;
    export const m3RotationZ: (angleRad: number, isClockwise?: boolean, decimalPlaces?: number) => Matrix3;
    export const m3RotationZH: (angleRad: number, isClockwise?: boolean, decimalPlaces?: number) => Matrix4;
    export const v3RotateZ: (angleRad: number, vector: Vector3, isClockwise?: boolean, decimalPlaces?: number) => Vector3;

    export const m2Scale: (scaleVector: Vector2) => Matrix2;
    export const m2ScaleH: (scaleVector: Vector3) => Matrix3;
    export const v2Scale: (scaleVector: Vector2, vector: Vector2) => Vector2;
    export const m2ScaleX: (scale: number) => Matrix2;
    export const m2ScaleXH: (scale: number) => Matrix3;
    export const m2ScaleY: (scale: number) => Matrix2;
    export const m2ScaleYH: (scale: number) => Matrix3;
    export const m3Scale: (scaleVector: Vector3) => Matrix3;
    export const m3ScaleH: (scaleVector: Vector4) => Matrix4;
    export const v3Scale: (scaleVector: Vector3, vector: Vector3) => Vector3;
    export const m3ScaleX: (scale: number) => Matrix3;
    export const m3ScaleXH: (scale: number) => Matrix4;
    export const m3ScaleY: (scale: number) => Matrix3;
    export const m3ScaleYH: (scale: number) => Matrix4;
    export const m3ScaleZ: (scale: number) => Matrix3;
    export const m3ScaleZH: (scale: number) => Matrix4;
    export const m2ScaleAtPointHMatrix: (scaleVector: Vector3, transformOrigin: Vector3, decimalPlaces?: number) => Matrix3;
    export const m2ScaleAtPointH: (scaleVector: Vector3, transformOrigin: Vector3, point: Vector3, decimalPlaces?: number) => Vector3;

    export const m2ReflectionOrigin: () => Matrix2;
    export const m2ReflectionOriginH: () => Matrix3;
    export const m2ReflectionX: () => Matrix2;
    export const m2ReflectionY: () => Matrix2;
    export const m2ReflectionYX: () => Matrix2;
    export const m2ReflectionYmX: () => Matrix2;

    export const m3ReflectionOrigin: () => Matrix3;
    export const m3ReflectionOriginH: () => Matrix4;
    export const m3ReflectionYZ: () => Matrix3;
    export const m3ReflectionYZH: () => Matrix4;
    export const m3ReflectionXZ: () => Matrix3;
    export const m3ReflectionXZH: () => Matrix4;
    export const m3ReflectionXY: () => Matrix3;
    export const m3ReflectionXYH: () => Matrix4;

    export const m2ShearingY: (factor: number) => Matrix2;
    export const m2ShearingX: (factor: number) => Matrix2;

    export const m3Determinant: (m3: Matrix3) => number;
    export const m2Determinant: (m2: Matrix2) => number;
    export const mDeterminant: (matrix: Matrix) => number;
    export const mMinor: (m: Matrix, row: number, col: number) => number;

    export const m2Inverse: (m2: Matrix2, decimalPlaces?: number) => (Matrix2 | null);
    export const m3Inverse: (m3: Matrix3, decimalPlaces?: number) => (Matrix3 | null);
    export const mInverse: (m: Matrix, decimalPlaces?: number) => (Matrix | null);
    export const isSingularMatrix: (m: Matrix) => boolean;

    export const m2Adjugate: (m2: Matrix2) => Matrix2;
    export const m3Adjugate: (m3: Matrix3) => Matrix3 | null;
    export const mAdjugate: (m: Matrix) => Matrix | null;

    export const getV2Angle: (v2: Vector2, decimalPlaces?: number) => number;
    export const setV2Angle: (v2: Vector2, newAngleRad: number, decimalPlaces?: number) => Vector2;
    export const getV2AngleInEllipse: (v2: Vector2, radii: Vector2, decimalPlaces?: number) => number;
    export const radiansToDegrees: (radians: number, decimalPlaces?: number) => number;
    export const degreesToRadians: (degrees: number, decimalPlaces?: number) => number;
    export const getVNAngleBetween: (vector1: Vector, vector2: Vector, decimalPlaces?: number) => number;
    export const getV2AngleBetween: (vector1: Vector2, vector2: Vector2, decimalPlaces?: number) => number;
    export const getV3AngleBetween: (vector1: Vector3, vector2: Vector3, decimalPlaces?: number) => number;
    export const getAnglesSub: (angleDegrees1: number, angleDegrees2: number, decimalPlaces?: number) => number;
    export const isAngleBetween: (angleDegrees: number, startAngleDegrees: number, endAngleDegrees: number) => boolean;
    export const isClockwise: (angle1Deg: number, angle2Deg: number, startAngleDeg?: number) => boolean;
    export const getAnglesDistance: (angle1Deg: number, angle2Deg: number, startAngleDeg?: number, decimalPlaces?: number) => number;
    export const percentToAngle: (percent: number, startAngleDeg: number, endAngleDeg: number, circleStartAngle?: number) => number;

    export const getCircleCircumference: (radius: number, decimalPlaces?: number) => number;
    export const getEllipseCircumference: (radius1: number, radius2: number, decimalPlaces?: number) => number;
    export const isAngleInCircleArc: (startAngleDeg: number, endAngleDeg: number, currentDegrees: number) => boolean;

    export const setDecimalPlaces: (num: number, decimalPlaces?: number | undefined) => number;

    export const getRandom: (min: number, max: number, decimalPlaces?: number) => number;
    export const getRandomInt: (min: number, max: number) => number;
    export const getRandomBoolean: () => boolean;
    export const getRandomItemFromArray: (array: any[]) => any;

    export const mod: (n: number, m: number) => number;
    export const convertRange: (x: number, a: number, b: number, c: number, d: number) => number;
    export const doRangesOverlap: (a: number, b: number, c: number, d: number) => boolean;
    export const isNumber: (value: any) => boolean;

    export const stringToNumber: (value: string, defaultNumber: number) => number;

    export const v2QuadraticBezierCurve: (t: number, startControlPoint: Vector2, centerControlPoint: Vector2, endControlPoint: Vector2, decimalPlaces?: number) => Vector2;
    export const v3QuadraticBezierCurve: (t: number, startControlPoint: Vector3, centerControlPoint: Vector3, endControlPoint: Vector3, decimalPlaces?: number) => Vector3;
    export const v2CubicBezierCurve: (t: number, startControlPoint: Vector2, center1ControlPoint: Vector2, center2ControlPoint: Vector2, endControlPoint: Vector2, decimalPlaces?: number) => Vector2;
    export const v3CubicBezierCurve: (t: number, startControlPoint: Vector3, center1ControlPoint: Vector3, center2ControlPoint: Vector3, endControlPoint: Vector3, decimalPlaces?: number) => Vector3;
    export const v2QuadraticBezierCurveTangent: (t: number, startControlPoint: Vector2, centerControlPoint: Vector2, endControlPoint: Vector2, decimalPlaces?: number) => Vector2;
    export const v3QuadraticBezierCurveTangent: (t: number, startControlPoint: Vector3, centerControlPoint: Vector3, endControlPoint: Vector3, decimalPlaces?: number) => Vector3;
    export const v2CubicBezierCurveTangent: (t: number, startControlPoint: Vector2, center1ControlPoint: Vector2, center2ControlPoint: Vector2, endControlPoint: Vector2, decimalPlaces?: number) => Vector2;
    export const v3CubicBezierCurveTangent: (t: number, startControlPoint: Vector3, center1ControlPoint: Vector3, center2ControlPoint: Vector3, endControlPoint: Vector3, decimalPlaces?: number) => Vector3;
    export const v2QuadraticBezierCurveNormal: (t: number, startControlPoint: Vector2, centerControlPoint: Vector2, endControlPoint: Vector2, decimalPlaces?: number) => Vector2;
    export const v2CubicBezierCurveNormal: (t: number, startControlPoint: Vector2, center1ControlPoint: Vector2, center2ControlPoint: Vector2, endControlPoint: Vector2, decimalPlaces?: number) => Vector2;
    export const v2QuadraticBezierCurveExtrema: (startControlPoint: Vector2, centerControlPoint: Vector2, endControlPoint: Vector2, decimalPlaces?: number) => Vector;
    export const v2CubicBezierCurveExtrema: (startControlPoint: Vector2, center1ControlPoint: Vector2, center2ControlPoint: Vector2, endControlPoint: Vector2, decimalPlaces?: number) => Vector2 | null;

    export interface IBBox {
        x: number;
        y: number;
        w: number;
        h: number;
        x2: number;
        y2: number;
    }

    export const v2QuadraticBezierBBox: (startControlPoint: Vector2, centerControlPoint: Vector2, endControlPoint: Vector2, decimalPlaces?: number) => IBBox;
    export const v2CubicBezierBBox: (startControlPoint: Vector2, center1ControlPoint: Vector2, center2ControlPoint: Vector2, endControlPoint: Vector2, decimalPlaces?: number) => IBBox;

    export const linearEquation: (equation: Vector2, decimalPlaces?: number) => number;
    export const linearEquationSystem2: (equation1: Vector3, equation2: Vector3, decimalPlaces?: number) => Vector2 | null;
    export const linearEquationSystem3: (equation1: Vector, equation2: Vector, equation3: Vector, decimalPlaces?: number) => Vector3 | null;
    export const linearEquationSystemN: (equations: Matrix, decimalPlaces?: number) => Vector | null;
    export const quadraticEquation: (equation: Vector, decimalPlaces?: number) => Vector;
    export const getLinearEquationBy2Points: (point1: Vector2, point2: Vector2) => Vector2;

    export const m2ToCSS: (m: Matrix2) => string;
    export const m2hToCSS: (m: Matrix3) => string;
    export const m2hToCSS3d: (m: Matrix3) => string;
    export const m3hToCSS3d: (m: Matrix4) => string;

    export const circleMovement: (center: Vector2, angle: number, radius: number) => Vector2;
    export const circleMovementAfterMouse: (mouse: Vector2, center: Vector2, radius: number) => Vector2;
    export const ellipseMovement: (center: Vector2, angle: number, radius1: number, radius2: number) => Vector2;
    export const ellipseMovementAfterMouse: (mouse: Vector2, center: Vector2, radii: Vector2) => Vector2;
    export const sineWaveMovement: (x: number, amplitude: number, frequency: number, phase: number) => Vector2;
    export const lissajousCurve: (width: number, height: number, t: number, k: number, n: number, m: number, p: number) => Vector2;

    export const getRandomRGBColor: () => RGBColor;
    export const getRandomHexColor: () => string;
    export const getRandomHSLColor: () => HSLColor;
    export const getRandomHSLColorWithHue: (h: number) => HSLColor;
    export const getRandomHSLColorWithSaturation: (s: number) => HSLColor;
    export const getRandomHSLColorWithLightness: (l: number) => HSLColor;
    export const getRandomGrayscaleHSLColor: () => HSLColor;
    export const getRandomHSLColorWithinRanges: (hueStart?: number, hueEnd?: number, saturationStart?: number, saturationEnd?: number, lightStart?: number, lightEnd?: number) => HSLColor;

    export const rgbToHsl: (rgb: RGBColor, decimalPlaces?: number) => HSLColor;
    export const hslToRgb: (hsl: HSLColor, decimalPlaces?: number) => RGBColor;
    export const hslToHex: (hsl: HSLColor) => string;
    export const rgbToHex: (rgb: RGBColor) => string;
    export const hexToRgb: (hex: string) => RGBColor | null;
    export const rgbToLab: (rgb: RGBColor, decimalPlaces?: number) => LABColor;
    export const labToRgb: (lab: LABColor, decimalPlaces?: number) => RGBColor;

    export const getShiftedHue: (color: HSLColor, shift?: number) => HSLColor;
    export const getShiftedLightness: (color: HSLColor, shift?: number) => HSLColor;
    export const getShiftedSaturation: (color: HSLColor, shift?: number) => HSLColor;

    export const getColorsDelta: (rgbA: RGBColor, rgbB: RGBColor, decimalPlaces?: number) => number;

    export const guid: () => string;
    export const newId: () => string;

    export const getSquareInCircleSide: (radius: number, decimalPlaces?: number) => number;

    export const dxPolynomial: (x: number, polynomial: number[][], decimalPlaces?: number) => number;
    export const dxV2QuadraticBezierCurve: (t: number, startControlPoint: Vector2, centerControlPoint: Vector2, endControlPoint: Vector2, decimalPlaces?: number) => Vector2;
    export const dxV3QuadraticBezierCurve: (t: number, startControlPoint: Vector3, centerControlPoint: Vector3, endControlPoint: Vector3, decimalPlaces?: number) => Vector3;
    export const dxV2CubicBezierCurve: (t: number, startControlPoint: Vector2, center1ControlPoint: Vector2, center2ControlPoint: Vector2, endControlPoint: Vector2, decimalPlaces?: number) => Vector2;
    export const dxV3CubicBezierCurve: (t: number, startControlPoint: Vector3, center1ControlPoint: Vector3, center2ControlPoint: Vector3, endControlPoint: Vector3, decimalPlaces?: number) => Vector3;
    export const dxSin: (x: number, decimalPlaces?: number) => number;
    export const dxCos: (x: number, decimalPlaces?: number) => number;
    export const dxTan: (x: number, decimalPlaces?: number) => number;
    export const dxCot: (x: number, decimalPlaces?: number) => number;
    export const dxArcSin: (x: number, decimalPlaces?: number) => number;
    export const dxArcCos: (x: number, decimalPlaces?: number) => number;
    export const dxArcTan: (x: number, decimalPlaces?: number) => number;
    export const dxArcCot: (x: number, decimalPlaces?: number) => number;

    export const linearInterpolation: (x: number, start: Vector2, end: Vector2, decimalPlaces?: number) => number;
    export const lerp: (x: number, start: number, end: number, decimalPlaces?: number) => number;
    export const vLerp: (x: number, start: Vector, end: Vector, decimalPlaces?: number) => Vector;
    export const v3Lerp: (x: number, start: Vector3, end: Vector3, decimalPlaces?: number) => Vector3;
    export const v2Lerp: (x: number, start: Vector2, end: Vector2, decimalPlaces?: number) => Vector2;
    export const mLerp: (x: number, start: Matrix, end: Matrix, decimalPlaces?: number) => Matrix;
    export const m3Lerp: (x: number, start: Matrix3, end: Matrix3, decimalPlaces?: number) => Matrix3;
    export const m2Lerp: (x: number, start: Matrix2, end: Matrix2, decimalPlaces?: number) => Matrix2;

    export interface IRect {
        x: number;
        y: number;
        w: number;
        h: number;
    }

    export interface ICircle {
        cx: number;
        cy: number;
        r: number;
    }

    export type IPolygon = Vector2[];

    export const rectCollide: (rect1: IRect, rect2: IRect) => boolean;
    export const circleCollide: (circle1: ICircle, circle2: ICircle) => boolean;
    export const convexPolygonsCollide: (poly1: IPolygon, poly2: IPolygon) => boolean;

    export interface IAnimationProps {
        duration?: number;
        callback: (result: IAnimationResult) => void;
        restartOnResize?: boolean;
        resizeCallback?: (_entries: ResizeObserverEntry[], _observer: ResizeObserver) => void;
    }
    export interface IAnimationResult {
        start: () => void;
        stop: () => void;
        pause: () => void;
        resume: () => void;
        restart: () => void;
        isAnimating: () => boolean;
        getStartTime: () => number | undefined;
        getElapsedTime: () => number | undefined;
        getPercent: () => number | undefined;
        getResizeObserver: () => ResizeObserver | undefined;
    }
    export const animate: (props: IAnimationProps) => IAnimationResult;

    export const polarToCartesian: (center: Vector2, radii: Vector2, angleInRad: number, decimalPlaces?: number) => Vector2;

    export const naturalNumbersSequenceSum: (n: number) => number;
    export const arithmeticSequenceSum: (n: number, a: number, d: number) => number;

    export const celsiusToFahrenheit: (celsius: number, decimalPlaces?: number) => number;
    export const celsiusToKelvin: (celsius: number, decimalPlaces?: number) => number;
    export const fahrenheitToCelsius: (fahrenheit: number, decimalPlaces?: number) => number;
    export const fahrenheitToKelvin: (fahrenheit: number, decimalPlaces?: number) => number;
    export const kelvinToCelsius: (kelvin: number, decimalPlaces?: number) => number;
    export const kelvinToFahrenheit: (kelvin: number, decimalPlaces?: number) => number;

    export const naturalNumbersSum1ToN: (n: number) => number;
    export const naturalNumbersSumMToN: (m: number, n: number) => number;

    export const factorialIterative: (n: number, start?: number) => number;
    export const factorialRecursive: (n: number, start?: number) => number;
    export const factorialMemoized: (n: number, start?: number) => number;
    export const factorial: (n: number, start?: number) => number;

    export const permutationsWithRepetition: (n: number, r: number) => number;
    export const permutationsWithoutRepetition: (n: number, r: number) => number;
    export const combinationsWithoutRepetition: (n: number, r: number) => number;
}