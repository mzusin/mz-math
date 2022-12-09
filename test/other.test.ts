import { mod } from '../src/other';

describe('Modulo', () => {
    test('-21 % 4 => 3', () => {
        expect(mod(-21, 4)).toStrictEqual(3);
    });

    test('7 % 3 => 1', () => {
        expect(mod(7, 3)).toStrictEqual(1);
    });

    test('5 % 2 => 1', () => {
        expect(mod(5, 2)).toStrictEqual(1);
    });

    test('-10 % -20 => -10', () => {
        expect(mod(10, -20)).toStrictEqual(-10);
    });

    test('-871 % -20 => -11', () => {
        expect(mod(-871, -20)).toStrictEqual(-11);
    });
});