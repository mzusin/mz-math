export const stringToNumber = (value: string|undefined|null|number, defaultNumber: number) => {
    if(value === undefined || value === null) return defaultNumber;
    const res = Number(value) ?? defaultNumber;
    return isNaN(res) ? defaultNumber : res;
};