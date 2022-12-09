import { IVector2, IVector3 } from './interfaces';
export declare const v2Sum: (...vectors: IVector2[]) => IVector2;
export declare const v3Sum: (...vectors: IVector3[]) => IVector3;
export declare const v2Sub: (...vectors: IVector2[]) => IVector2;
export declare const v3Sub: (...vectors: IVector3[]) => IVector3;
export declare const v2Length: (vector: IVector2, decimalPlaces?: number) => number;
export declare const v3Length: (vector: IVector3, decimalPlaces?: number) => number;
