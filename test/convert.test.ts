import { stringToNumber } from '../src/main/convert';

describe('String to Number', () => {
    test('If undefined is provided => return the default value', () => {
        expect(stringToNumber(undefined, 10)).toStrictEqual(10);
    });

    test('If null is provided => return the default value', () => {
        expect(stringToNumber(null, 10)).toStrictEqual(10);
    });

    test('If 0 is provided => return 0', () => {
        expect(stringToNumber(0, 10)).toStrictEqual(0);
    });

    test('If "0" is provided => return 0', () => {
        expect(stringToNumber('0', 10)).toStrictEqual(0);
    });

    test('If "10.1234" is provided => return 10.1234', () => {
        expect(stringToNumber('10.1234', 10)).toStrictEqual(10.1234);
    });

    test('If "aaa" is provided => return the default value', () => {
        expect(stringToNumber('aaa', 20)).toStrictEqual(20);
    });
});