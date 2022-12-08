export const setDecimalPlaces = (num: number, decimalPlaces: number | undefined = Infinity) => {
    if(decimalPlaces === Infinity) return num;

    const coefficient = 10 ** decimalPlaces;
    return Math.round(num * coefficient) / coefficient;
};