import { v2Length, v3Length, v2Sum, v3Sum, v2Sub, v3Sub, v2MulScalar, v3MulScalar, v2SetLength } from '../src/vector';

describe('Vector Sum', () => {
    test('{1,2} + {3,4}', () => {
        const v1 = { x: 1, y: 2 };
        const v2 = { x: 3, y: 4 };
        expect(v2Sum(v1, v2)).toStrictEqual({ x: 4, y: 6 });
    });

    test('{-1,-2} + {3,4}', () => {
        const v1 = { x: -1, y: -2 };
        const v2 = { x: 3, y: 4 };
        expect(v2Sum(v1, v2)).toStrictEqual({ x: 2, y: 2 });
    });

    test('{1,2} + {3,4} + {5,6}', () => {
        const v1 = { x: 1, y: 2 };
        const v2 = { x: 3, y: 4 };
        const v3 = { x: 5, y: 6 };
        expect(v2Sum(v1, v2, v3)).toStrictEqual({ x: 9, y: 12 });
    });

    test('{1,2} + {3,4} + {5,6} + {7,8}', () => {
        const v1 = { x: 1, y: 2 };
        const v2 = { x: 3, y: 4 };
        const v3 = { x: 5, y: 6 };
        const v4 = { x: 7, y: 8 };
        expect(v2Sum(v1, v2, v3, v4)).toStrictEqual({ x: 16, y: 20 });
    });

    test('{1,2,3} + {3,4,4}', () => {
        const v1 = { x: 1, y: 2, z: 3 };
        const v2 = { x: 3, y: 4, z: 4 };
        expect(v3Sum(v1, v2)).toStrictEqual({ x: 4, y: 6, z: 7 });
    });

    test('{1,2,3} + {3,4,4} + {7,8,9}', () => {
        const v1 = { x: 1, y: 2, z: 3 };
        const v2 = { x: 3, y: 4, z: 4 };
        const v3 = { x: 7, y: 8, z: 9 };
        expect(v3Sum(v1, v2, v3)).toStrictEqual({ x: 11, y: 14, z: 16 });
    });

    test('{1,2,3} + {3,4,4} + {7,8,9} + {10,11,12}', () => {
        const v1 = { x: 1, y: 2, z: 3 };
        const v2 = { x: 3, y: 4, z: 4 };
        const v3 = { x: 7, y: 8, z: 9 };
        const v4 = { x: 10, y: 11, z: 12 };
        expect(v3Sum(v1, v2, v3, v4)).toStrictEqual({ x: 21, y: 25, z: 28 });
    });
});

describe('Vector Sub', () => {
    test('{1,2} - {3,4}', () => {
        const v1 = { x: 1, y: 2 };
        const v2 = { x: 3, y: 4 };
        expect(v2Sub(v1, v2)).toStrictEqual({ x: -2, y: -2 });
    });

    test('{-1,-2} - {3,4}', () => {
        const v1 = { x: -1, y: -2 };
        const v2 = { x: 3, y: 4 };
        expect(v2Sub(v1, v2)).toStrictEqual({ x: -4, y: -6 });
    });

    test('{1,2} - {3,4} - {5,6}', () => {
        const v1 = { x: 1, y: 2 };
        const v2 = { x: 3, y: 4 };
        const v3 = { x: 5, y: 6 };
        expect(v2Sub(v1, v2, v3)).toStrictEqual({ x: -7, y: -8 });
    });

    test('{1,2} - {3,4} - {5,6} - {7,8}', () => {
        const v1 = { x: 1, y: 2 };
        const v2 = { x: 3, y: 4 };
        const v3 = { x: 5, y: 6 };
        const v4 = { x: 7, y: 8 };
        expect(v2Sub(v1, v2, v3, v4)).toStrictEqual({ x: -14, y: -16 });
    });

    test('{1,2,3} - {3,4,4}', () => {
        const v1 = { x: 1, y: 2, z: 3 };
        const v2 = { x: 3, y: 4, z: 4 };
        expect(v3Sub(v1, v2)).toStrictEqual({ x: -2, y: -2, z: -1 });
    });

    test('{1,2,3} - {3,4,4} - {7,8,9}', () => {
        const v1 = { x: 1, y: 2, z: 3 };
        const v2 = { x: 3, y: 4, z: 4 };
        const v3 = { x: 7, y: 8, z: 9 };
        expect(v3Sub(v1, v2, v3)).toStrictEqual({ x: -9, y: -10, z: -10 });
    });

    test('{1,2,3} - {3,4,4} - {7,8,9} - {10,11,12}', () => {
        const v1 = { x: 1, y: 2, z: 3 };
        const v2 = { x: 3, y: 4, z: 4 };
        const v3 = { x: 7, y: 8, z: 9 };
        const v4 = { x: 10, y: 11, z: 12 };
        expect(v3Sub(v1, v2, v3, v4)).toStrictEqual({ x: -19, y: -21, z: -22 });
    });
});

describe('Multiply vector by scalar', () => {
    test('{ x: 1, y: 2 } * 2 => { x: 2, y: 4 }', () => {
        expect(v2MulScalar({ x: 1, y: 2 }, 2)).toStrictEqual({ x: 2, y: 4 });
    });

    test('{ x: 1, y: 2 } * 0.5 => { x: 0.5, y: 1 }', () => {
        expect(v2MulScalar({ x: 1, y: 2 }, 0.5)).toStrictEqual({ x: 0.5, y: 1 });
    });

    test('{ x: 1, y: 2 } * Math.PI => { x: 3.141592653589793, y: 6.283185307179586 }', () => {
        expect(v2MulScalar({ x: 1, y: 2 }, Math.PI)).toStrictEqual({ x: 3.141592653589793, y: 6.283185307179586 });
    });

    test('{ x: 1, y: 2 } * Math.PI with 2 decimal places => { x: 3.14, y: 6.28 }', () => {
        expect(v2MulScalar({ x: 1, y: 2 }, Math.PI, 2)).toStrictEqual({ x: 3.14, y: 6.28 });
    });

    test('{ x: 1, y: 2, z: 3 } * 2 => { x: 2, y: 4, z: 6 }', () => {
        expect(v3MulScalar({ x: 1, y: 2, z: 3 }, 2)).toStrictEqual({ x: 2, y: 4, z: 6 });
    });

    test('{ x: 1, y: 2, z: 3 } * 0.5 => { x: 0.5, y: 1, z: 1.5 }', () => {
        expect(v3MulScalar({ x: 1, y: 2, z: 3 }, 0.5)).toStrictEqual({ x: 0.5, y: 1, z: 1.5 });
    });

    test('{ x: 1, y: 2, z: 3 } * Math.PI => { x: 3.141592653589793, y: 6.283185307179586, z: 9.42477796076938 }', () => {
        expect(v3MulScalar({ x: 1, y: 2, z: 3 }, Math.PI)).toStrictEqual({ x: 3.141592653589793, y: 6.283185307179586, z: 9.42477796076938 });
    });

    test('{ x: 1, y: 2, z: 3 } * Math.PI with 2 decimal places => { x: 3.14, y: 6.28, z: 9.42 }', () => {
        expect(v3MulScalar({ x: 1, y: 2, z: 3 }, Math.PI, 2)).toStrictEqual({ x: 3.14, y: 6.28, z: 9.42 });
    });
});

describe('Get Vector Length', () => {
    test('Length of {1,2} with 2 decimal places', () => {
        expect(v2Length({ x: 1, y: 2 })).toStrictEqual(2.23606797749979);
    });

    test('Length of {1,2} with 2 decimal places', () => {
        expect(v2Length({ x: 1, y: 2 }, 2)).toStrictEqual(2.24);
    });

    test('Length of {1,2,3}', () => {
        expect(v3Length({ x: 1, y: 2, z: 3 })).toStrictEqual(3.7416573867739413);
    });

    test('Length of {1,2,3} with 2 decimal places', () => {
        expect(v3Length({ x: 1, y: 2, z: 3 }, 2)).toStrictEqual(3.74);
    });
});

describe('Set Vector Length', () => {
    test('Set length of { x: 1, y: 2 } to be 10 => { x: 4.4721359549995805, y: 8.94427190999916 } ', () => {
        expect(v2SetLength({ x: 1, y: 2 }, 10)).toStrictEqual({ x: 4.4721359549995805, y: 8.94427190999916 });
    });

    test('Set length of { x: 1, y: 2 } to be 10 with 2 decimal places => { x: 4.47, y: 8.94 }', () => {
        expect(v2SetLength({ x: 1, y: 2 }, 10, 2)).toStrictEqual({ x: 4.47, y: 8.94 });
    });

    test('Set length of { x: 1, y: 2 } to be 0 => { x: 0, y: 0 }', () => {
        expect(v2SetLength({ x: 1, y: 2 }, 0)).toStrictEqual({ x: 0, y: 0 });
    });

    test('Set length of { x: 1, y: 2 } to be -1 => { x: -0.44721359549995804, y: -0.8944271909999159 }', () => {
        expect(v2SetLength({ x: 1, y: 2 }, -1)).toStrictEqual({ x: -0.44721359549995804, y: -0.8944271909999159 });
    });
});