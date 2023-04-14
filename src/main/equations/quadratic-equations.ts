import { Vector } from '../../types';
import { setDecimalPlaces } from '../format';
import { linearEquation } from './linear-equations';
import { isNumber } from '../other';

/**
 * Quadratic Equation.
 * ax^2 + bx + c = d
 */
export const quadraticEquation = (equation: Vector, decimalPlaces = Infinity) : Vector => {
    const a = equation[0];
    const b = equation[1];
    const c = equation[2];
    const d = equation[3];

    if(a === 0){
        // it's a linear equation -------------------------------------------
        const res = linearEquation([b, c, d], decimalPlaces);
        if(isNumber(res)) return [res];
        return [];
    }

    const diff = c - d;

    const discriminant = b * b - (4 * a * diff);

    if(discriminant < 0){
        return []; // no results
    }

    if(discriminant === 0){
        return [ setDecimalPlaces(-b / (2 * a), decimalPlaces) ]; // 1 result
    }

    // if(determinant > 0) ---> 2 results
    const t1 = 2 * a;
    const t2 = Math.sqrt(discriminant);

    return [
        setDecimalPlaces((-b + t2) / t1, decimalPlaces),
        setDecimalPlaces((-b - t2) / t1, decimalPlaces),
    ];
};