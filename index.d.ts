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

    global {
        interface Window {
            TCMath: {
                v2Sum: typeof v2Sum;
            };
        }
    }
}