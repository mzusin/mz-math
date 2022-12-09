declare module 'toolcool-math' {

    export interface IVector2 {
        x: number;
        y: number;
    }
    export interface IVector3 {
        x: number;
        y: number;
        z: number;
    }

    export const v2Sum: (...vectors: IVector2[]) => IVector2;
    export const v3Sum: (...vectors: IVector3[]) => IVector3;
    export const v2Length: (vector: IVector2, decimalPlaces?: number) => number;
    export const v3Length: (vector: IVector3, decimalPlaces?: number) => number;

    export const getV2Angle: (v2: IVector2, decimalPlaces?: number) => number;
    export const setV2Angle: (v2: IVector2, newAngleRad: number, decimalPlaces?: number) => IVector2;
    export const radiansToDegrees: (radians: number, decimalPlaces?: number) => number;
    export const degreesToRadians: (degrees: number, decimalPlaces?: number) => number;

    export const setDecimalPlaces: (num: number, decimalPlaces?: number | undefined) => number;

    export const getRandom: (min: number, max: number, decimalPlaces?: number) => number;
    export const getRandomInt: (min: number, max: number) => number;
    export const getRandomBoolean: () => boolean;

    export const mod: (n: number, m: number) => number;

    global {
        interface Window {
            TCMath: {
                v2Sum: typeof v2Sum;
                v3Sum: typeof v3Sum;
                v2Length: typeof v2Length;
                v3Length: typeof v3Length;

                getV2Angle: typeof getV2Angle;
                setV2Angle: typeof setV2Angle;
                radiansToDegrees: typeof radiansToDegrees;
                degreesToRadians: typeof degreesToRadians;

                setDecimalPlaces: typeof setDecimalPlaces;

                getRandom: typeof getRandom;
                getRandomInt: typeof getRandomInt;
                getRandomBoolean: typeof getRandomBoolean;

                mod: typeof mod;
            };
        }
    }
}