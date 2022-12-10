import {
    m2MulScalar, m3MulScalar, mMulScalar,
    mSum, m2Sum, m2Sub, m3Sum, m3Sub, mSub,
    m2Transpose, m3Transpose, mTranspose,
    mMul, mMulVector, m2Reset, m3Reset, mReset,
    m2x2, m3x3, mNxM, mEqual, identity2, identity3, identityN, m2Determinant, m2Inverse
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

    test(`Determinant of [
                [5, 3],
                [-1, 4],
            ] => 23`, () => {
        expect(m2Determinant(
            [
                [5, 3],
                [-1, 4],
            ]
        )).toStrictEqual(23);
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

});
