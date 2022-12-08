export const setDecimalPlaces = (num: number, decimalPlaces: number | undefined = Infinity) => {
    if(decimalPlaces === Infinity) return num;

    if(decimalPlaces < 0){
        decimalPlaces = 0;
    }

    const coefficient = 10 ** decimalPlaces;
    return Math.round(num * coefficient) / coefficient;
};