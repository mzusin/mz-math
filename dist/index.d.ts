declare module 'toolcool-math/angle' {
  import { Vector2 } from 'toolcool-math/types';
  export const getV2Angle: (v2: Vector2, decimalPlaces?: number) => number;
  export const setV2Angle: (v2: Vector2, newAngleRad: number, decimalPlaces?: number) => Vector2;
  export const radiansToDegrees: (radians: number, decimalPlaces?: number) => number;
  export const degreesToRadians: (degrees: number, decimalPlaces?: number) => number;

}
declare module 'toolcool-math/bezier-curve' {
  import { Vector2, Vector3 } from 'toolcool-math/types';
  /**
   * Get a point on a quadratic Bézier curve as a function of time.
   */
  export const v2QuadraticBezierCurve: (t: number, startControlPoint: Vector2, centerControlPoint: Vector2, endControlPoint: Vector2) => Vector2;
  export const v3QuadraticBezierCurve: (t: number, startControlPoint: Vector3, centerControlPoint: Vector3, endControlPoint: Vector3) => Vector3;
  /**
   * Get a point on a cubic Bézier curve as a function of time.
   */
  export const v2CubicBezierCurve: (t: number, startControlPoint: Vector2, center1ControlPoint: Vector2, center2ControlPoint: Vector2, endControlPoint: Vector2) => Vector2;
  export const v3CubicBezierCurve: (t: number, startControlPoint: Vector3, center1ControlPoint: Vector3, center2ControlPoint: Vector3, endControlPoint: Vector3) => Vector3;

}
declare module 'toolcool-math/convert' {
  export const stringToNumber: (value: string | undefined | null | number, defaultNumber: number) => number;

}
declare module 'toolcool-math/format' {
  export const setDecimalPlaces: (num: number, decimalPlaces?: number | undefined) => number;

}
declare module 'toolcool-math/index' {
  import * as vector from 'toolcool-math/vector';
  import * as matrix from 'toolcool-math/matrix';
  import * as format from 'toolcool-math/format';
  import * as angle from 'toolcool-math/angle';
  import * as random from 'toolcool-math/random';
  import * as other from 'toolcool-math/other';
  import * as convert from 'toolcool-math/convert';
  import * as bezierCurve from 'toolcool-math/bezier-curve';
  global {
      interface Window {
          TCMath: {
              v2: typeof vector.v2;
              v3: typeof vector.v3;
              vN: typeof vector.vN;
              m2x2: typeof matrix.m2x2;
              m3x3: typeof matrix.m3x3;
              mNxM: typeof matrix.mNxM;
              identity2: typeof matrix.identity2;
              identity3: typeof matrix.identity3;
              identityN: typeof matrix.identityN;
              vEqual: typeof vector.vEqual;
              mEqual: typeof matrix.mEqual;
              vSum: typeof vector.vSum;
              v2Sum: typeof vector.v2Sum;
              v3Sum: typeof vector.v3Sum;
              vSub: typeof vector.vSub;
              v2Sub: typeof vector.v2Sub;
              v3Sub: typeof vector.v3Sub;
              vMulScalar: typeof vector.vMulScalar;
              v2MulScalar: typeof vector.v2MulScalar;
              v3MulScalar: typeof vector.v3MulScalar;
              vLength: typeof vector.vLength;
              v2Length: typeof vector.v2Length;
              v3Length: typeof vector.v3Length;
              v2SetLength: typeof vector.v2SetLength;
              vNormalize: typeof vector.vNormalize;
              v2Normalize: typeof vector.v2Normalize;
              v3Normalize: typeof vector.v3Normalize;
              vDotProduct: typeof vector.vDotProduct;
              v2DotProduct: typeof vector.v2DotProduct;
              v3DotProduct: typeof vector.v3DotProduct;
              v3CrossProduct: typeof vector.v3CrossProduct;
              mSum: typeof matrix.mSum;
              m2Sum: typeof matrix.m2Sum;
              m3Sum: typeof matrix.m3Sum;
              mSub: typeof matrix.mSub;
              m2Sub: typeof matrix.m2Sub;
              m3Sub: typeof matrix.m3Sub;
              mMulScalar: typeof matrix.mMulScalar;
              m2MulScalar: typeof matrix.m2MulScalar;
              m3MulScalar: typeof matrix.m3MulScalar;
              mTranspose: typeof matrix.mTranspose;
              m2Transpose: typeof matrix.m2Transpose;
              m3Transpose: typeof matrix.m3Transpose;
              mMul: typeof matrix.mMul;
              mMulVector: typeof matrix.mMulVector;
              mReset: typeof matrix.mReset;
              m2Reset: typeof matrix.m2Reset;
              m3Reset: typeof matrix.m3Reset;
              m2Rotation: typeof matrix.m2Rotation;
              v2Rotate: typeof matrix.v2Rotate;
              m3RotationX: typeof matrix.m3RotationX;
              v3RotateX: typeof matrix.v3RotateX;
              m3RotationY: typeof matrix.m3RotationY;
              v3RotateY: typeof matrix.v3RotateY;
              m3RotationZ: typeof matrix.m3RotationZ;
              v3RotateZ: typeof matrix.v3RotateZ;
              m2Determinant: typeof matrix.m2Determinant;
              m2Inverse: typeof matrix.m2Inverse;
              m2Adjugate: typeof matrix.m2Adjugate;
              m2Scale: typeof matrix.m2Scale;
              v2Scale: typeof matrix.v2Scale;
              m3Scale: typeof matrix.m3Scale;
              v3Scale: typeof matrix.v3Scale;
              getV2Angle: typeof angle.getV2Angle;
              setV2Angle: typeof angle.setV2Angle;
              radiansToDegrees: typeof angle.radiansToDegrees;
              degreesToRadians: typeof angle.degreesToRadians;
              setDecimalPlaces: typeof format.setDecimalPlaces;
              getRandom: typeof random.getRandom;
              getRandomInt: typeof random.getRandomInt;
              getRandomBoolean: typeof random.getRandomBoolean;
              getRandomItemFromArray: typeof random.getRandomItemFromArray;
              mod: typeof other.mod;
              convertRange: typeof other.convertRange;
              doRangesOverlap: typeof other.doRangesOverlap;
              isNumber: typeof other.isNumber;
              stringToNumber: typeof convert.stringToNumber;
              v2QuadraticBezierCurve: typeof bezierCurve.v2QuadraticBezierCurve;
              v3QuadraticBezierCurve: typeof bezierCurve.v3QuadraticBezierCurve;
              v2CubicBezierCurve: typeof bezierCurve.v2CubicBezierCurve;
              v3CubicBezierCurve: typeof bezierCurve.v3CubicBezierCurve;
          };
      }
  }

}
declare module 'toolcool-math/matrix' {
  import { Matrix2, Matrix3, Matrix, Vector, Vector2, Vector3 } from 'toolcool-math/types';
  export const mSum: (matrix1: Matrix, matrix2: Matrix, decimalPlaces?: number) => Matrix;
  export const m2Sum: (matrix1: Matrix2, matrix2: Matrix2, decimalPlaces?: number) => Matrix2;
  export const m3Sum: (matrix1: Matrix3, matrix2: Matrix3, decimalPlaces?: number) => Matrix3;
  export const mSub: (matrix1: Matrix, matrix2: Matrix, decimalPlaces?: number) => Matrix;
  export const m2Sub: (matrix1: Matrix2, matrix2: Matrix2, decimalPlaces?: number) => Matrix2;
  export const m3Sub: (matrix1: Matrix3, matrix2: Matrix3, decimalPlaces?: number) => Matrix3;
  export const mMulScalar: (m: Matrix, scalar: number, decimalPlaces?: number) => Matrix;
  export const m2MulScalar: (m2: Matrix2, scalar: number, decimalPlaces?: number) => Matrix2;
  export const m3MulScalar: (m3: Matrix3, scalar: number, decimalPlaces?: number) => Matrix3;
  export const mTranspose: (m: Matrix) => Matrix;
  export const m2Transpose: (m2: Matrix2) => Matrix;
  export const m3Transpose: (m3: Matrix3) => Matrix;
  export const mReset: (m: Matrix, defaultValue?: number) => Matrix;
  export const m2Reset: (m2: Matrix2, defaultValue?: number) => Matrix2;
  export const m3Reset: (m3: Matrix3, defaultValue?: number) => Matrix3;
  export const m2x2: (defaultValue?: number) => Matrix2;
  export const m3x3: (defaultValue?: number) => Matrix3;
  export const mNxM: (N: number, M: number, defaultValue?: number) => Matrix;
  export const identity2: () => Matrix2;
  export const identity3: () => Matrix3;
  /**
   * Identity Matrix (I).
   * M x I = I x M = M for any matrix M.
   */
  export const identityN: (N: number) => Matrix;
  /**
   * Matrix Multiplication.
   * - Matrix multiplication is not commutative: M1 x M2 !== M2 x M1
   * - Matrix multiplication is associative: A x (B x C) = (A x B) x C.
   * - A x (B + C) = A x B + A x C
   */
  export const mMul: (matrix1: Matrix, matrix2: Matrix, decimalPlaces?: number) => Matrix;
  export const mMulVector: (matrix: Matrix, vector: Vector, decimalPlaces?: number) => Vector;
  export const mEqual: (matrix1: Matrix, matrix2: Matrix) => boolean;
  export const m2Rotation: (angleRad: number) => Matrix2;
  export const v2Rotate: (angleRad: number, vector: Vector2) => Vector2;
  /**
   * Rotation around the X axis.
   */
  export const m3RotationX: (angleRad: number) => Matrix3;
  export const v3RotateX: (angleRad: number, vector: Vector3) => Vector3;
  /**
   * Rotation around the Y axis.
   */
  export const m3RotationY: (angleRad: number) => Matrix3;
  export const v3RotateY: (angleRad: number, vector: Vector3) => Vector3;
  /**
   * Rotation around the Z axis.
   */
  export const m3RotationZ: (angleRad: number) => Matrix3;
  export const v3RotateZ: (angleRad: number, vector: Vector3) => Vector3;
  export const m2Scale: (scaleVector: Vector2) => Matrix2;
  export const v2Scale: (scaleVector: Vector2, vector: Vector2) => Vector2;
  export const m3Scale: (scaleVector: Vector3) => Matrix3;
  export const v3Scale: (scaleVector: Vector3, vector: Vector3) => Vector3;
  /**
   * Calculate determinant for NxN matrix.
   * Matrix should be square.

  export const mDeterminant = (matrix: Matrix): number => {
      if(matrix.length === 0) return 1;

      if(matrix.length !== matrix[0].length){
          throw new Error('The matrix must be square.');
      }

      if(matrix.length === 1) return matrix[0][0];
      if(matrix.length === 2) return m2Determinant(matrix as Matrix2);
  }; */
  /**
   * Calculate determinant for 2x2 matrix.
   * Matrix should be square.
   */
  export const m2Determinant: (m2: Matrix2) => number;
  /**
   * Calculate determinant for 3x3 matrix.
   * Matrix should be square.

  export const m3Determinant = (m3: Matrix3): number => {
      if(m3.length !== m3[0].length){
          throw new Error('The matrix must be square.');
      }
  }; */
  export const m2Adjugate: (m2: Matrix2) => Matrix2;
  /**
   * Square matrix A (nxn) is invertible is there is another square matrix B (nxn) so AxB = BxA = I
   * For A (2x2) matrix, the inverse is:
   * (1 / (determinant(A))) * adj(A)
   * Singular Matrix = a square matrix that does not have a matrix inverse. A matrix is singular iff its determinant is 0.
   */
  export const m2Inverse: (m2: Matrix2, decimalPlaces?: number) => (Matrix2 | null);

}
declare module 'toolcool-math/other' {
  export const mod: (n: number, m: number) => number;
  /**
   * Convert range [a, b] to [c, d].
   * f(x) = (d - c) * (x - a) / (b - a) + c
   */
  export const convertRange: (x: number, a: number, b: number, c: number, d: number) => number;
  /**
   * Check if 2 ranges [a,b] and [c,d] overlap.
   */
  export const doRangesOverlap: (a: number, b: number, c: number, d: number) => boolean;
  export const isNumber: (value: any) => boolean;

}
declare module 'toolcool-math/random' {
  /**
   * Returns a random number in the [min,max] range.
   */
  export const getRandom: (min: number, max: number, decimalPlaces?: number) => number;
  /**
   * Returns a random integer number in the [min,max] range.
   */
  export const getRandomInt: (min: number, max: number) => number;
  export const getRandomBoolean: () => boolean;
  export const getRandomItemFromArray: (array: any[]) => any;

}
declare module 'toolcool-math/types' {
  export type Vector2 = [number, number];
  export type Vector3 = [number, number, number];
  export type Vector = number[];
  export type Matrix2 = Vector2[];
  export type Matrix3 = Vector3[];
  export type Matrix = Vector[];

}
declare module 'toolcool-math/vector' {
  import { Vector, Vector2, Vector3 } from 'toolcool-math/types';
  export const vSum: (vector1: Vector, vector2: Vector, decimalPlaces?: number) => Vector;
  export const v2Sum: (vector1: Vector2, vector2: Vector2, decimalPlaces?: number) => Vector2;
  export const v3Sum: (vector1: Vector3, vector2: Vector3, decimalPlaces?: number) => Vector3;
  export const vSub: (vector1: Vector, vector2: Vector, decimalPlaces?: number) => Vector;
  export const v2Sub: (vector1: Vector2, vector2: Vector2, decimalPlaces?: number) => Vector2;
  export const v3Sub: (vector1: Vector3, vector2: Vector3, decimalPlaces?: number) => Vector3;
  export const vMulScalar: (v: Vector, scalar: number, decimalPlaces?: number) => Vector;
  export const v2MulScalar: (v2: Vector2, scalar: number, decimalPlaces?: number) => Vector2;
  export const v3MulScalar: (v3: Vector3, scalar: number, decimalPlaces?: number) => Vector3;
  export const vLength: (vector: Vector, decimalPlaces?: number) => number;
  export const v2Length: (vector: Vector2, decimalPlaces?: number) => number;
  export const v3Length: (vector: Vector3, decimalPlaces?: number) => number;
  export const v2SetLength: (v2: Vector2, newLength: number, decimalPlaces?: number) => Vector2;
  /**
   * Normalization creates a unit vector, which is a vector of length 1.
   */
  export const vNormalize: (v: Vector, decimalPlaces?: number) => Vector;
  export const v2Normalize: (v2: Vector2, decimalPlaces?: number) => Vector2;
  export const v3Normalize: (v3: Vector3, decimalPlaces?: number) => Vector3;
  export const vDotProduct: (vector1: Vector, vector2: Vector, decimalPlaces?: number) => number;
  export const v2DotProduct: (vector1: Vector2, vector2: Vector2, decimalPlaces?: number) => number;
  export const v3DotProduct: (vector1: Vector3, vector2: Vector3, decimalPlaces?: number) => number;
  export const v3CrossProduct: (vector1: Vector3, vector2: Vector3, decimalPlaces?: number) => Vector3;
  export const v2: (defaultValue?: number) => Vector2;
  export const v3: (defaultValue?: number) => Vector3;
  export const vN: (N: number, defaultValue?: number) => Vector;
  export const vEqual: (vector1: Vector, vector2: Vector) => boolean;

}
declare module 'toolcool-math' {
  import main = require('toolcool-math/src/index');
  export = main;
}