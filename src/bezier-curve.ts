import { IVector2, IVector3 } from './interfaces';

/**
 * Get a point on a quadratic Bézier curve as a function of time.
 */
export const v2QuadraticBezierCurve = (
    t: number,
    startControlPoint: IVector2,
    centerControlPoint: IVector2,
    endControlPoint: IVector2
) : IVector2 => {

    const temp1 = Math.pow(1 - t, 2);
    const temp2 = (1 - t) * 2 * t;
    const temp3 = t * t;

    return {
        x: temp1 * startControlPoint.x + temp2 * centerControlPoint.x + temp3 * endControlPoint.x,
        y: temp1 * startControlPoint.y + temp2 * centerControlPoint.y + temp3 * endControlPoint.y,
    }
};

export const v3QuadraticBezierCurve = (
    t: number,
    startControlPoint: IVector3,
    centerControlPoint: IVector3,
    endControlPoint: IVector3
) : IVector3 => {

    const temp1 = Math.pow(1 - t, 2);
    const temp2 = (1 - t) * 2 * t;
    const temp3 = t * t;

    return {
        x: temp1 * startControlPoint.x + temp2 * centerControlPoint.x + temp3 * endControlPoint.x,
        y: temp1 * startControlPoint.y + temp2 * centerControlPoint.y + temp3 * endControlPoint.y,
        z: temp1 * startControlPoint.z + temp2 * centerControlPoint.z + temp3 * endControlPoint.z,
    }
};

/**
 * Get a point on a cubic Bézier curve as a function of time.
 */
export const v2CubicBezierCurve = (
    t: number,
    startControlPoint: IVector2,
    center1ControlPoint: IVector2,
    center2ControlPoint: IVector2,
    endControlPoint: IVector2
) : IVector2 => {

    const temp1 = Math.pow(1 - t, 3);
    const temp2 = Math.pow(1 - t, 2) * 3 * t;
    const temp3 = (1 - t) * 3 * t * t;
    const temp4 = t * t * t;

    return {
        x: temp1 * startControlPoint.x + temp2 * center1ControlPoint.x + temp3 * center2ControlPoint.x + temp4 * endControlPoint.x,
        y: temp1 * startControlPoint.y + temp2 * center1ControlPoint.y + temp3 * center2ControlPoint.y + temp4 * endControlPoint.y,
    }
};

export const v3CubicBezierCurve = (
    t: number,
    startControlPoint: IVector3,
    center1ControlPoint: IVector3,
    center2ControlPoint: IVector3,
    endControlPoint: IVector3
) : IVector3 => {

    const temp1 = Math.pow(1 - t, 3);
    const temp2 = Math.pow(1 - t, 2) * 3 * t;
    const temp3 = (1 - t) * 3 * t * t;
    const temp4 = t * t * t;

    return {
        x: temp1 * startControlPoint.x + temp2 * center1ControlPoint.x + temp3 * center2ControlPoint.x + temp4 * endControlPoint.x,
        y: temp1 * startControlPoint.y + temp2 * center1ControlPoint.y + temp3 * center2ControlPoint.y + temp4 * endControlPoint.y,
        z: temp1 * startControlPoint.z + temp2 * center1ControlPoint.z + temp3 * center2ControlPoint.z + temp4 * endControlPoint.z,
    }
};
