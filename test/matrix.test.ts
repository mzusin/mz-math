import {
    m2MulScalar,
    m3MulScalar,
    mMulScalar,
    mSum,
    m2Sum,
    m2Sub,
    m3Sum,
    m3Sub,
    mSub,
    m2Transpose,
    m3Transpose,
    mTranspose,
    mMul,
    mMulVector,
    m2Reset,
    m3Reset,
    mReset,
    m2x2,
    m3x3,
    mNxM,
    mEqual,
    identity2,
    identity3,
    identityN,
    m2Determinant,
    m3Determinant,
    mDeterminant,
    m2Inverse,
    m3Inverse,
    mInverse,
    m2DivideScalar,
    m3DivideScalar,
    mDivideScalar,
    mMinor,
    m2Adjugate,
    m3Adjugate,
    mAdjugate,
    m2DeepCopy,
    m3DeepCopy,
    mDeepCopy,
    m2AppendRow,
    m3AppendRow,
    mAppendRow,
    m2PrependRow,
    m3PrependRow,
    mPrependRow,
    mAppendCol
} from '../src/matrix';
import { Matrix, Matrix2, Matrix3, Vector3 } from '../src/types';

describe('Matrix Sum', () => {
    test(`[
            [1, 2],
            [3, 4],
        ] + [
            [5, 6],
            [7, 8],
        ]`, () => {
        const matrix1: Matrix2 = [
            [1, 2],
            [3, 4],
        ];
        const matrix2: Matrix2 = [
            [5, 6],
            [7, 8],
        ];

        expect(m2Sum(matrix1, matrix2)).toStrictEqual([
            [6, 8],
            [10, 12],
        ]);
    });

    test(`[
            [1, 2, 10],
            [3, 4, 20],
        ] + [
            [5, 6, 30],
            [7, 8, 40],
        ]`, () => {
        const matrix1: Matrix3 = [
            [1, 2, 10],
            [3, 4, 20],
        ];
        const matrix2: Matrix3 = [
            [5, 6, 30],
            [7, 8, 40],
        ];

        expect(m3Sum(matrix1, matrix2)).toStrictEqual([
            [6, 8, 40],
            [10, 12, 60],
        ]);
    });

    test(`[
            [1.9123, 2.1232],
            [3.1432, 4.2453],
        ] + [
            [5.2345, 6.345634],
            [7.2345, 8.254234],
        ] with 2 decimal places`, () => {
        const matrix1: Matrix2 = [
            [1.9123, 2.1232],
            [3.1432, 4.2453],
        ];
        const matrix2: Matrix2 = [
            [5.2345, 6.345634],
            [7.2345, 8.254234],
        ];

        expect(m2Sum(matrix1, matrix2, 2)).toStrictEqual([
            [7.15, 8.47],
            [10.38, 12.5],
        ]);
    });

    test(`[
            [1.0245234, 2.23452345, 10.09093456],
            [3.245, 4.6234, 20.98137],
        ] + [
            [5.3248567, 6.9285, 30],
            [7.34678, 8.83456, 40.153455],
        ] with 3 decimal places`, () => {
        const matrix1: Matrix3 = [
            [1.0245234, 2.23452345, 10.09093456],
            [3.245, 4.6234, 20.98137],
        ];
        const matrix2: Matrix3 = [
            [5.3248567, 6.9285, 30],
            [7.34678, 8.83456, 40.153455],
        ];

        expect(m3Sum(matrix1, matrix2, 2)).toStrictEqual([
            [6.35, 9.16, 40.09],
            [10.59, 13.46, 61.13],
        ]);
    });

    test(`[
            [1, 2, 3, 4],
            [5, 6, 7, 8],
        ] + [
            [9,  10, 11, 12],
            [13, 14, 15, 16],
        ]`, () => {
        const matrix1: Matrix = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
        ];
        const matrix2: Matrix = [
            [9,  10, 11, 12],
            [13, 14, 15, 16],
        ];

        expect(mSum(matrix1, matrix2)).toStrictEqual([
            [10, 12, 14, 16],
            [18, 20, 22, 24],
        ]);
    });
});

describe('Matrix Subtraction', () => {
    test(`[
            [1, 2],
            [3, 4],
        ] - [
            [5, 6],
            [7, 8],
        ]`, () => {
        const matrix1: Matrix2 = [
            [1, 2],
            [3, 4],
        ];
        const matrix2: Matrix2 = [
            [5, 6],
            [7, 8],
        ];

        expect(m2Sub(matrix1, matrix2)).toStrictEqual([
            [-4, -4],
            [-4, -4],
        ]);
    });

    test(`[
            [1.36839, 2.99384],
            [3.98734, 4.140235],
        ] - [
            [5.23453, 6.35675367],
            [7.3456, 8.32452345],
        ] with 2 decimal places`, () => {
        const matrix1: Matrix2 = [
            [1.36839, 2.99384],
            [3.98734, 4.140235],
        ];
        const matrix2: Matrix2 = [
            [5.23453, 6.35675367],
            [7.3456, 8.32452345],
        ];

        expect(m2Sub(matrix1, matrix2, 2)).toStrictEqual([
            [-3.87, -3.36],
            [-3.36, -4.18],
        ]);
    });

    test(`[
            [1.234535, 2.2345],
            [3.3253, 4.3456],
        ] - [
            [5.235345, 6.3654356],
            [7.484567, 8.23524],
        ] with 2 decimal places`, () => {
        const matrix1: Matrix2 = [
            [1.234535, 2.2345],
            [3.3253, 4.3456],
        ];
        const matrix2: Matrix2 = [
            [5.235345, 6.3654356],
            [7.484567, 8.23524],
        ];

        expect(m2Sub(matrix1, matrix2, 2)).toStrictEqual([
            [-4, -4.13],
            [-4.16, -3.89],
        ]);
    });

    test(`[
            [1, 2, 10],
            [3, 4, 20],
        ] - [
            [5, 6, 30],
            [7, 8, 40],
        ]`, () => {
        const matrix1: Matrix3 = [
            [1, 2, 10],
            [3, 4, 20],
        ];
        const matrix2: Matrix3 = [
            [5, 6, 30],
            [7, 8, 40],
        ];

        expect(m3Sub(matrix1, matrix2)).toStrictEqual([
            [-4, -4, -20],
            [-4, -4, -20],
        ]);
    });

    test(`[
            [1.152334, 2.34563456, 10.098234523],
            [3.23453245, 4.3456125, 20.2353245],
        ] - [
            [5.2345, 6.83567, 30.73457],
            [7.7346, 8.83456, 40.23632],
        ] with 2 decimal places`, () => {
        const matrix1: Matrix3 = [
            [1.152334, 2.34563456, 10.098234523],
            [3.23453245, 4.3456125, 20.2353245],
        ];
        const matrix2: Matrix3 = [
            [5.2345, 6.83567, 30.73457],
            [7.7346, 8.83456, 40.23632],
        ];

        expect(m3Sub(matrix1, matrix2, 2)).toStrictEqual([
            [-4.08, -4.49, -20.64],
            [-4.5, -4.49, -20],
        ]);
    });

    test(`[
            [1, 2, 3, 4],
            [5, 6, 7, 8],
        ] - [
            [9,  10, 11, 12],
            [13, 14, 15, 16],
        ]`, () => {
        const matrix1: Matrix = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
        ];
        const matrix2: Matrix = [
            [9,  10, 11, 12],
            [13, 14, 15, 16],
        ];

        expect(mSub(matrix1, matrix2)).toStrictEqual([
            [-8, -8, -8, -8],
            [-8, -8, -8, -8],
        ]);
    });
});

describe('Multiply matrix by scalar', () => {
    test(`[
            [1, 2],
            [3, 4],
        ] multiply by 5`, () => {
        const m2: Matrix2 = [
            [1, 2],
            [3, 4],
        ];

        expect(m2MulScalar(m2, 5)).toStrictEqual([
            [5, 10],
            [15, 20],
        ]);
    });

    test(`[
            [0, 0],
            [0, 0],
        ] multiply by 5`, () => {
        const m2: Matrix2 = [
            [0, 0],
            [0, 0],
        ];

        expect(m2MulScalar(m2, 5)).toStrictEqual([
            [0, 0],
            [0, 0],
        ]);
    });

    test(`[
            [1.12345, 12.66746776],
            [15.74432, -12.345345],
        ] multiply by 10 with 2 decimal places`, () => {
        const m2: Matrix2 = [
            [1.12345, 12.66746776],
            [15.74432, -12.345345],
        ];

        expect(m2MulScalar(m2, 10, 2)).toStrictEqual([
            [11.23, 126.67],
            [157.44, -123.45],
        ]);
    });

    test(`[
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ] multiply by 2`, () => {
        const m3: Matrix3 = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];

        expect(m3MulScalar(m3, 2)).toStrictEqual([
            [2, 4, 6],
            [8, 10, 12],
            [14, 16, 18],
        ]);
    });

    test(`[
            [1, 2, 3],
            [4, 5, 6],
        ] multiply by 2`, () => {
        const m3: Matrix3 = [
            [1, 2, 3],
            [4, 5, 6],
        ];

        expect(m3MulScalar(m3, 2)).toStrictEqual([
            [2, 4, 6],
            [8, 10, 12],
        ]);
    });

    test(`[
            [1, 2, 3],
            [4, 5, 6],
        ] multiply by 1.5123123 with 1 decimal place`, () => {
        const m3: Matrix3 = [
            [1, 2, 3],
            [4, 5, 6],
        ];

        expect(m3MulScalar(m3, 1.5123123, 1)).toStrictEqual([
            [1.5, 3, 4.5],
            [6, 7.6, 9.1],
        ]);
    });

    test(`[
            [1, 2, 3, 4],
            [5, 6, 7, 8],
        ] multiply by 5`, () => {
        const m: Matrix = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
        ];

        expect(mMulScalar(m, 5)).toStrictEqual([
            [5, 10, 15, 20],
            [25, 30, 35, 40],
        ]);
    });
});

describe('Divide matrix by scalar', () => {
    test(`[
            [1, 2],
            [3, 4],
        ] divide by 5`, () => {
        const m2: Matrix2 = [
            [1, 2],
            [3, 4],
        ];

        expect(m2DivideScalar(m2, 5)).toStrictEqual([
            [0.2, 0.4],
            [0.6, 0.8],
        ]);
    });

    test(`[
            [0, 0],
            [0, 0],
        ] divide by 5`, () => {
        const m2: Matrix2 = [
            [0, 0],
            [0, 0],
        ];

        expect(m2DivideScalar(m2, 5)).toStrictEqual([
            [0, 0],
            [0, 0],
        ]);
    });

    test(`[
            [1.12345, 12.66746776],
            [15.74432, -12.345345],
        ] divide by 10 with 2 decimal places`, () => {
        const m2: Matrix2 = [
            [0.112345, 1.266746776],
            [1.574432, -1.2345345],
        ];

        expect(m2DivideScalar(m2, 10, 2)).toStrictEqual([
            [0.01, 0.13],
            [0.16, -0.12],
        ]);
    });

    test(`[
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ] divide by 2`, () => {
        const m3: Matrix3 = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];

        expect(m3DivideScalar(m3, 2)).toStrictEqual([
            [0.5, 1, 1.5],
            [2, 2.5, 3],
            [3.5, 4, 4.5],
        ]);
    });

    test(`[
            [1, 2, 3],
            [4, 5, 6],
        ] divide by 2`, () => {
        const m3: Matrix3 = [
            [1, 2, 3],
            [4, 5, 6],
        ];

        expect(m3DivideScalar(m3, 2)).toStrictEqual([
            [0.5, 1, 1.5],
            [2, 2.5, 3],
        ]);
    });

    test(`[
            [1, 2, 3],
            [4, 5, 6],
        ] divide by 1.5123123 with 1 decimal place`, () => {
        const m3: Matrix3 = [
            [1, 2, 3],
            [4, 5, 6],
        ];

        expect(m3DivideScalar(m3, 1.5123123, 1)).toStrictEqual([
            [0.7, 1.3, 2],
            [2.6, 3.3, 4],
        ]);
    });

    test(`[
            [1, 2, 3, 4],
            [5, 6, 7, 8],
        ] divide by 5`, () => {
        const m: Matrix = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
        ];

        expect(mDivideScalar(m, 5)).toStrictEqual([
            [0.2, 0.4, 0.6, 0.8],
            [1, 1.2, 1.4, 1.6],
        ]);
    });
});

describe('Matrix Transpose', () => {
    test(`Transpose [
            [0, 0],
            [0, 0],
        ]`, () => {
        const m2: Matrix2 = [
            [0, 0],
            [0, 0],
        ];

        expect(m2Transpose(m2)).toStrictEqual([
            [0, 0],
            [0, 0],
        ]);
    });

    test(`Transpose [
            [1, -2],
            [3, 0],
            [7, 5],
        ]`, () => {
        const m2: Matrix2 = [
            [1, -2],
            [3, 0],
            [7, 5],
        ];

        expect(m2Transpose(m2)).toStrictEqual([
            [1, 3, 7],
            [-2, 0, 5],
        ]);
    });

    test(`Transpose [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ]`, () => {
        const m3: Matrix3 = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ];

        expect(m3Transpose(m3)).toStrictEqual([
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ]);
    });

    test(`Transpose [
            [1, 3, 7],
            [-2, 0, 5],
        ]`, () => {
        const m3: Matrix3 = [
            [1, 3, 7],
            [-2, 0, 5],
        ];

        expect(m3Transpose(m3)).toStrictEqual([
            [1, -2],
            [3, 0],
            [7, 5],
        ]);
    });

    test(`Transpose [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
        ]`, () => {
        const m: Matrix = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
        ];

        expect(mTranspose(m)).toStrictEqual([
            [1, 5],
            [2, 6],
            [3, 7],
            [4, 8],
        ]);
    });

    test(`Transpose [
            [1, 5],
            [2, 6],
            [3, 7],
            [4, 8],
        ]`, () => {
        const m: Matrix = [
            [1, 5],
            [2, 6],
            [3, 7],
            [4, 8],
        ];

        expect(mTranspose(m)).toStrictEqual([
            [1, 2, 3, 4],
            [5, 6, 7, 8],
        ]);
    });

    test(`Transpose [
           [-1, 5],
           [Math.PI, 3],
        ]`, () => {
        const m2: Matrix2 = [
            [-1, 5],
            [Math.PI, 3],
        ];

        expect(m2Transpose(m2)).toStrictEqual([
            [-1, Math.PI],
            [5, 3],
        ]);
    });
});

describe('Matrix Multiplication', () => {

    test(`Multiply [
            [2, -2],
            [5, 3],
        ] and [
            [-1, 4],
            [7, -6],
        ]`, () => {

        const matrix1: Matrix2 = [
            [2, -2],
            [5, 3],
        ];

        const matrix2: Matrix2 = [
            [-1, 4],
            [7, -6],
        ];

        expect(mMul(matrix1, matrix2)).toStrictEqual([
            [-16, 20],
            [16, 2],
        ]);
    });

    test(`Multiply [
            [0, 3, 5],
            [5, 5, 2],
        ] and [
            [3, 4],
            [3, -2],
            [4, -2],
        ]`, () => {

        const matrix1: Matrix3 = [
            [0, 3, 5],
            [5, 5, 2],
        ];

        const matrix2: Matrix2 = [
            [3, 4],
            [3, -2],
            [4, -2],
        ];

        expect(mMul(matrix1, matrix2)).toStrictEqual([
            [29, -16],
            [38, 6],
        ]);
    });

    test(`Multiply [
            [2.092345, -2.2345234],
            [5.56745, 3.235479],
        ] and [
            [-1.46874567, 4.23453245],
            [7.234505, -6.93245],
        ] with 2 decimal places`, () => {

        const matrix1: Matrix2 = [
            [2.092345, -2.2345234],
            [5.56745, 3.235479],
        ];

        const matrix2: Matrix2 = [
            [-1.46874567, 4.23453245],
            [7.234505, -6.93245],
        ];

        expect(mMul(matrix1, matrix2, 2)).toStrictEqual([
            [-19.24, 24.35],
            [15.23, 1.15],
        ]);
    });

    test(`Multiply matrix by vector: [
            [0, 3, 5],
            [5, 5, 2],
        ] and [3, 4, 3]`, () => {

        const matrix: Matrix3 = [
            [0, 3, 5],
            [5, 5, 2],
        ];

        const vector: Vector3 = [3, 4, 3];

        expect(mMulVector(matrix, vector)).toStrictEqual([27, 41]);
    });
});

describe('Reset Matrix', () => {
    test(`Reset [
          [1, 2],
        ]`, () => {
        const m2: Matrix2 = [
            [1, 2],
        ];

        expect(m2Reset(m2)).toStrictEqual([
            [0, 0],
        ]);
    });

    test(`Reset [
          [1, 2],
          [3, 4],
        ]`, () => {
        const m2: Matrix2 = [
          [1, 2],
          [3, 4],
        ];

        expect(m2Reset(m2)).toStrictEqual([
            [0, 0],
            [0, 0],
        ]);
    });

    test(`Reset [
          [1, 2],
          [3, 4],
        ] with value 10`, () => {
        const m2: Matrix2 = [
            [1, 2],
            [3, 4],
        ];

        expect(m2Reset(m2, 10)).toStrictEqual([
            [10, 10],
            [10, 10],
        ]);
    });

    test(`Reset [
          [1, 2, 3],
          [4, 5, 6],
        ]`, () => {
        const m3: Matrix3 = [
            [1, 2, 3],
            [4, 5, 6],
        ];

        expect(m3Reset(m3)).toStrictEqual([
            [0, 0, 0],
            [0, 0, 0],
        ]);
    });

    test(`Reset [
          [1, 2, 3],
          [4, 5, 6],
        ] with 1.5`, () => {
        const m3: Matrix3 = [
            [1, 2, 3],
            [4, 5, 6],
        ];

        expect(m3Reset(m3, 1.5)).toStrictEqual([
            [1.5, 1.5, 1.5],
            [1.5, 1.5, 1.5],
        ]);
    });

    test(`Reset [
          [1, 2, 3, 5, 6],
        ]`, () => {
        const m: Matrix = [
            [1, 2, 3, 5, 6],
        ];

        expect(mReset(m)).toStrictEqual([
            [0, 0, 0, 0, 0]
        ]);
    });

    test(`Reset [
          [1, 2, 3, 5, 6],
        ] with 100`, () => {
        const m: Matrix = [
            [1, 2, 3, 5, 6],
        ];

        expect(mReset(m, 100)).toStrictEqual([
            [100, 100, 100, 100, 100]
        ]);
    });
});

describe('Matrix Initialization Helpers', () => {

    test(`m2x2`, () => {
        expect(m2x2()).toStrictEqual([
            [0, 0],
            [0, 0],
        ]);
    });

    test(`m2x2 with default value 10`, () => {
        expect(m2x2(10)).toStrictEqual([
            [10, 10],
            [10, 10],
        ]);
    });

    test(`m3x3`, () => {
        expect(m3x3()).toStrictEqual([
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ]);
    });

    test(`m3x3 with default value 1`, () => {
        expect(m3x3(1)).toStrictEqual([
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1],
        ]);
    });

    test(`mNxM with N=1 and M=5`, () => {
        expect(mNxM(1, 5)).toStrictEqual([
            [0, 0, 0, 0, 0],
        ]);
    });

    test(`mNxM with N=2 and M=3 and default value = 1`, () => {
        expect(mNxM(2, 3, 1)).toStrictEqual([
            [1, 1, 1],
            [1, 1, 1],
        ]);
    });

    test(`identity2`, () => {
        expect(identity2()).toStrictEqual([
            [1, 0],
            [0, 1],
        ]);
    });

    test(`identity3`, () => {
        expect(identity3()).toStrictEqual([
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1],
        ]);
    });

    test(`identityN, N = 1`, () => {
        expect(identityN(1)).toStrictEqual([
            [1],
        ]);
    });

    test(`identityN, N = 2`, () => {
        expect(identityN(2)).toStrictEqual([
            [1, 0],
            [0, 1],
        ]);
    });

    test(`identityN, N = 3`, () => {
        expect(identityN(3)).toStrictEqual([
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1],
        ]);
    });

    test(`identityN, N = 4`, () => {
        expect(identityN(4)).toStrictEqual([
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1],
        ]);
    });
});

describe('Matrix Equality', () => {

    test(`[
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0],
            ] and [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0],
            ] => true`, () => {
        expect(mEqual(
            [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0],
            ],
            [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0],
            ]
        )).toStrictEqual(true);
    });

    test(`[
                [1, 0, 0],
                [0, 0, 0],
                [0, 0, 0],
            ] and [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 1],
            ] => false`, () => {
        expect(mEqual(
            [
                [1, 0, 0],
                [0, 0, 0],
                [0, 0, 0],
            ],
            [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 1],
            ]
        )).toStrictEqual(false);
    });

    test(`[
                [1, 1, 1],
                [0, 0, 0],
            ] and [
                [1, 1, 1],
                [0, 0, 0],
            ] => false`, () => {
        expect(mEqual(
            [
                [1, 1, 1],
                [0, 0, 0],
            ],
            [
                [1, 1, 1],
                [0, 0, 0],
            ]
        )).toStrictEqual(true);
    });

    test(`[
                [0, 0],
                [0, 0],
            ] and [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 1],
            ] => false`, () => {
        expect(mEqual(
            [
                [0, 0],
                [0, 0],
            ],
            [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 1],
            ]
        )).toStrictEqual(false);
    });

});

describe('Matrix Determinant', () => {

    test(`Determinant of empty matrix should be 1`, () => {
        expect(mDeterminant(
            []
        )).toStrictEqual(1);
    });

    test(`Determinant of matrix with 1 element should be equal to this element`, () => {
        expect(mDeterminant(
            [[15]]
        )).toStrictEqual(15);
    });

    test(`Determinant of [
                [5, 3],
                [-1, 4],
            ] => 16`, () => {
        expect(m2Determinant(
            [
                [5, 3],
                [-1, 4],
            ]
        )).toStrictEqual(23);
    });

    test(`Determinant of [
                [4, -1, 1],
                [4, 5, 3],
                [-2, 0, 0],
            ] => 23`, () => {
        expect(m3Determinant(
            [
                [4, -1, 1],
                [4, 5, 3],
                [-2, 0, 0],
            ]
        )).toStrictEqual(16);
    });

    test(`Determinant of [
                [4, 3, 2, 2],
                [0, 1, -3, 3],
                [0, -1, 3, 3],
                [0, 3, 1, 1]
            ] => -240`, () => {
        expect(mDeterminant(
            [
                [4, 3, 2, 2],
                [0, 1, -3, 3],
                [0, -1, 3, 3],
                [0, 3, 1, 1]
            ]
        )).toStrictEqual(-240);
    });

    test(`Minor of [
                [4, 3, 2, 2],
                [0, 1, -3, 3],
                [0, -1, 3, 3],
                [0, 3, 1, 1]
            ] for [0, 0] => -60`, () => {
        expect(mMinor(
            [
                [4, 3, 2, 2],
                [0, 1, -3, 3],
                [0, -1, 3, 3],
                [0, 3, 1, 1]
            ], 0, 0
        )).toStrictEqual(-60);
    });

});

describe('Matrix Inverse', () => {

    test(`Inverse of [
                [3, 5],
                [-7, 2],
            ] with 3 decimal places`, () => {
        expect(m2Inverse(
            [
                [3, 5],
                [-7, 2],
            ], 3
        )).toStrictEqual([
            [0.049, -0.122],
            [0.171, 0.073],
        ]);
    });

    test(`Inverse of [
                 [1, -1],
                 [-1, 1] doesn't exist - The determinant is 0, the matrix is not invertible,
            ]`, () => {
        expect(m2Inverse(
            [
                [1, -1],
                [-1, 1],
            ]
        )).toStrictEqual(null);
    });

    test(`Inverse of [
                [3, -4],
                [2, -5],
            ] with 3 decimal places`, () => {
        expect(m2Inverse(
            [
                [3, -4],
                [2, -5],
            ], 3
        )).toStrictEqual([
            [0.714, -0.571],
            [0.286, -0.429],
        ]);
    });

    test(`Inverse of [
                [-1, -2, 2],
                [2, 1, 1],
                [3, 4, 5]
            ]`, () => {
        expect(m3Inverse(
            [
                [-1, -2, 2],
                [2, 1, 1],
                [3, 4, 5]
            ]
        )).toStrictEqual([
            [0.043478260869565216, 0.782608695652174, -0.17391304347826086],
            [-0.30434782608695654, -0.4782608695652174, 0.21739130434782608],
            [0.21739130434782608, -0.08695652173913043, 0.13043478260869565]
        ]);
    });

    test(`Inverse of [
                [-1, -2, 2],
                [2, 1, 1],
                [3, 4, 5]
            ] with 2 decimal places`, () => {
        expect(m3Inverse(
            [
                [-1, -2, 2],
                [2, 1, 1],
                [3, 4, 5]
            ], 2
        )).toStrictEqual([
            [0.04, 0.78, -0.17],
            [-0.30, -0.48, 0.22],
            [0.22, -0.09, 0.13]
        ]);
    });

    test(`Inverse of [
                [1, 1, 1, -1],
                [1, 1, -1, 1],
                [1, -1, 1, 1],
                [-1, 1, 1, 1],
            ]`, () => {
        expect(mInverse(
            [
                [1, 1, 1, -1],
                [1, 1, -1, 1],
                [1, -1, 1, 1],
                [-1, 1, 1, 1],
            ]
        )).toStrictEqual([
            [0.25, 0.25, 0.25, -0.25],
            [0.25, 0.25, -0.25, 0.25],
            [0.25, -0.25, 0.25, 0.25],
            [-0.25, 0.25, 0.25, 0.25],
        ]);
    });

});

describe('Matrix Adjugate', () => {

    test(`Adjugate of [
                [3, 5],
                [-7, 2],
            ]`, () => {
        expect(m2Adjugate(
            [
                [3, 5],
                [-7, 2],
            ]
        )).toStrictEqual([
            [2, -5],
            [7, 3],
        ]);
    });

    test(`Adjugate of [
                [3, 5, 1],
                [-7, 2, 5],
                [1, 2, 3],
            ]`, () => {
        expect(m3Adjugate(
            [
                [3, 5, 1],
                [-7, 2, 5],
                [1, 2, 3],
            ]
        )).toStrictEqual([
            [-4, -13, 23],
            [26, 8, -22],
            [-16, -1, 41],
        ]);
    });

    test(`Adjugate of [
                [1, 1, 1, -1],
                [1, 1, -1, 1],
                [1, -1, 1, 1],
                [-1, 1, 1, 1],
            ]`, () => {
        expect(mAdjugate(
            [
                [1, 1, 1, -1],
                [1, 1, -1, 1],
                [1, -1, 1, 1],
                [-1, 1, 1, 1],
            ]
        )).toStrictEqual([
            [-4, -4, -4, 4],
            [-4, -4, 4, -4],
            [-4, 4, -4, -4],
            [4, -4, -4, -4],
        ]);
    });

});

describe('Matrix Deep Copy', () => {

    test(`Deep copy of [
                [3, 5],
                [-7, 2],
            ]`, () => {
        expect(m2DeepCopy(
            [
                [3, 5],
                [-7, 2],
            ]
        )).toStrictEqual([
            [3, 5],
            [-7, 2],
        ]);
    });

    test(`Deep copy of [
                [3, 5, 1],
                [-7, 2, 6],
            ]`, () => {
        expect(m3DeepCopy(
            [
                [3, 5, 1],
                [-7, 2, 6],
            ]
        )).toStrictEqual([
            [3, 5, 1],
            [-7, 2, 6],
        ]);
    });

    test(`Deep copy of [
                [1, 0, 1, 2, 4],
                [1, 7, 8, 6, 12],
                [1.5, 8, 12, 3, 1]
            ]`, () => {
        expect(mDeepCopy(
            [
                [1, 0, 1, 2, 4],
                [1, 7, 8, 6, 12],
                [1.5, 8, 12, 3, 1]
            ]
        )).toStrictEqual([
            [1, 0, 1, 2, 4],
            [1, 7, 8, 6, 12],
            [1.5, 8, 12, 3, 1]
        ]);
    });

    test(`Deep copy of []`, () => {
        expect(mDeepCopy(
            []
        )).toStrictEqual([]);
    });

});

describe('Matrix Add Row', () => {

    test(`Append [3, 4] row to [
                [3, 5],
                [-7, 2],
            ]`, () => {
        expect(m2AppendRow(
            [
                [3, 5],
                [-7, 2],
            ], [3, 4]
        )).toStrictEqual([
            [3, 5],
            [-7, 2],
            [3, 4]
        ]);
    });

    test(`Append [3, 4] row to []`, () => {
        expect(m2AppendRow(
            [], [3, 4]
        )).toStrictEqual([
            [3, 4]
        ]);
    });

    test(`Append [7, 8, 9] row to [
                [1, 2, 3],
                [4, 5, 6],
            ]`, () => {
        expect(m3AppendRow(
            [
                [1, 2, 3],
                [4, 5, 6],
            ], [7, 8, 9]
        )).toStrictEqual([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ]);
    });

    test(`Append [9, 10, 11, 12] row to [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
            ]`, () => {
        expect(mAppendRow(
            [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
            ], [9, 10, 11, 12]
        )).toStrictEqual([
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
        ]);
    });

    test(`Prepend [3, 4] row to [
                [3, 5],
                [-7, 2],
            ]`, () => {
        expect(m2PrependRow(
            [
                [3, 5],
                [-7, 2],
            ], [3, 4]
        )).toStrictEqual([
            [3, 4],
            [3, 5],
            [-7, 2],
        ]);
    });

    test(`Prepend [3, 4] row to []`, () => {
        expect(m2PrependRow(
            [], [3, 4]
        )).toStrictEqual([
            [3, 4]
        ]);
    });

    test(`Prepend [7, 8, 9] row to [
                [1, 2, 3],
                [4, 5, 6],
            ]`, () => {
        expect(m3PrependRow(
            [
                [1, 2, 3],
                [4, 5, 6],
            ], [7, 8, 9]
        )).toStrictEqual([
            [7, 8, 9],
            [1, 2, 3],
            [4, 5, 6],
        ]);
    });

    test(`Prepend [9, 10, 11, 12] row to [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
            ]`, () => {
        expect(mPrependRow(
            [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
            ], [9, 10, 11, 12]
        )).toStrictEqual([
            [9, 10, 11, 12],
            [1, 2, 3, 4],
            [5, 6, 7, 8],
        ]);
    });
});

describe('Matrix Add Column', () => {

    test(`Append [3, 4] col to [
                [3, 5],
                [-7, 2],
            ]`, () => {
        expect(mAppendCol(
            [
                [3, 5],
                [-7, 2],
            ], [3, 4]
        )).toStrictEqual([
            [3, 5, 3],
            [-7, 2, 4],
        ]);
    });

    test(`Append [7, 8] col to [
                [1, 2, 3],
                [4, 5, 6],
            ]`, () => {
        expect(mAppendCol(
            [
                [1, 2, 3],
                [4, 5, 6],
            ], [7, 8]
        )).toStrictEqual([
            [1, 2, 3, 7],
            [4, 5, 6, 8],
        ]);
    });

    test(`Append [9, 10] col to [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
            ]`, () => {
        expect(mAppendCol(
            [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
            ], [9, 10]
        )).toStrictEqual([
            [1, 2, 3, 4, 9],
            [5, 6, 7, 8, 10],
        ]);
    });

});
