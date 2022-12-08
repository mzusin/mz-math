import { v2Sum, v3Sum } from '../src/vector';

describe('Vector Sum', () => {
    test('{1,2} + {3,4}', () => {
        const v1 = { x: 1, y: 2 };
        const v2 = { x: 3, y: 4 };
        expect(v2Sum(v1, v2)).toStrictEqual({ x: 4, y: 6 });
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

    test('{1,2,3} + {4,5,6}', () => {
        const v1 = { x: 1, y: 2, z: 3 };
        const v2 = { x: 3, y: 4, z: 4 };
        expect(v3Sum(v1, v2)).toStrictEqual({ x: 4, y: 6, z: 7 });
    });

    test('{1,2,3} + {4,5,6} + {7,8,9}', () => {
        const v1 = { x: 1, y: 2, z: 3 };
        const v2 = { x: 3, y: 4, z: 4 };
        const v3 = { x: 7, y: 8, z: 9 };
        expect(v3Sum(v1, v2, v3)).toStrictEqual({ x: 11, y: 14, z: 16 });
    });

    test('{1,2,3} + {4,5,6} + {7,8,9} + {10,11,12}', () => {
        const v1 = { x: 1, y: 2, z: 3 };
        const v2 = { x: 3, y: 4, z: 4 };
        const v3 = { x: 7, y: 8, z: 9 };
        const v4 = { x: 10, y: 11, z: 12 };
        expect(v3Sum(v1, v2, v3, v4)).toStrictEqual({ x: 21, y: 25, z: 28 });
    });
});
