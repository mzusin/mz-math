import { Vector2, Vector3 } from '../../types';

/**
 * Bézier Curves
 * t in range [0, 1]
 * linear: (1 - t) + t
 * square: (1 - t)^2 + 2*(1 - t) + t^2
 * cubic:  (1 - t)^3 + 3*(1 - t)^2 + 3*(1 - t) * t^2 + t^3
 */

/*
extrema() {
    const result = {};
    let roots = [];

    this.dims.forEach(
      function (dim) {
        let mfn = function (v) {
          return v[dim];
        };
        let p = this.dpoints[0].map(mfn);
        result[dim] = utils.droots(p);
        if (this.order === 3) {
          p = this.dpoints[1].map(mfn);
          result[dim] = result[dim].concat(utils.droots(p));
        }
        result[dim] = result[dim].filter(function (t) {
          return t >= 0 && t <= 1;
        });
        roots = roots.concat(result[dim].sort(utils.numberSort));
      }.bind(this)
    );

    result.values = roots.sort(utils.numberSort).filter(function (v, idx) {
      return roots.indexOf(v) === idx;
    });

    return result;
  }
 */

/**
 * Get the bounding box of a quadratic Bézier curve
 */
export const getQBezierCurveBBox = () => {

    /*
     const extrema = this.extrema(),
      result = {};
        this.dims.forEach(
          function (d) {
            result[d] = utils.getminmax(this, d, extrema[d]);
          }.bind(this)
        );
        return result;
     */
};

// -------------------- GET POINT ON CURVE --------------------------

/**
 * Get a point on a quadratic Bézier curve as a function of time.
 */
export const v2QuadraticBezierCurve = (
    t: number,
    startControlPoint: Vector2,
    centerControlPoint: Vector2,
    endControlPoint: Vector2
) : Vector2 => {

    const temp1 = Math.pow(1 - t, 2);
    const temp2 = (1 - t) * 2 * t;
    const temp3 = t * t;

    return [
        temp1 * startControlPoint[0] + temp2 * centerControlPoint[0] + temp3 * endControlPoint[0],
        temp1 * startControlPoint[1] + temp2 * centerControlPoint[1] + temp3 * endControlPoint[1],
    ];
};

export const v3QuadraticBezierCurve = (
    t: number,
    startControlPoint: Vector3,
    centerControlPoint: Vector3,
    endControlPoint: Vector3
) : Vector3 => {

    const temp1 = Math.pow(1 - t, 2);
    const temp2 = (1 - t) * 2 * t;
    const temp3 = t * t;

    return [
        temp1 * startControlPoint[0] + temp2 * centerControlPoint[0] + temp3 * endControlPoint[0],
        temp1 * startControlPoint[1] + temp2 * centerControlPoint[1] + temp3 * endControlPoint[1],
        temp1 * startControlPoint[2] + temp2 * centerControlPoint[2] + temp3 * endControlPoint[2],
    ];
};

/**
 * Get a point on a cubic Bézier curve as a function of time.
 */
export const v2CubicBezierCurve = (
    t: number,
    startControlPoint: Vector2,
    center1ControlPoint: Vector2,
    center2ControlPoint: Vector2,
    endControlPoint: Vector2
) : Vector2 => {

    const temp1 = Math.pow(1 - t, 3);
    const temp2 = Math.pow(1 - t, 2) * 3 * t;
    const temp3 = (1 - t) * 3 * t * t;
    const temp4 = t * t * t;

    return [
        temp1 * startControlPoint[0] + temp2 * center1ControlPoint[0] + temp3 * center2ControlPoint[0] + temp4 * endControlPoint[0],
        temp1 * startControlPoint[1] + temp2 * center1ControlPoint[1] + temp3 * center2ControlPoint[1] + temp4 * endControlPoint[1],
    ];
};

export const v3CubicBezierCurve = (
    t: number,
    startControlPoint: Vector3,
    center1ControlPoint: Vector3,
    center2ControlPoint: Vector3,
    endControlPoint: Vector3
) : Vector3 => {

    const temp1 = Math.pow(1 - t, 3);
    const temp2 = Math.pow(1 - t, 2) * 3 * t;
    const temp3 = (1 - t) * 3 * t * t;
    const temp4 = t * t * t;

    return [
        temp1 * startControlPoint[0] + temp2 * center1ControlPoint[0] + temp3 * center2ControlPoint[0] + temp4 * endControlPoint[0],
        temp1 * startControlPoint[1] + temp2 * center1ControlPoint[1] + temp3 * center2ControlPoint[1] + temp4 * endControlPoint[1],
        temp1 * startControlPoint[2] + temp2 * center1ControlPoint[2] + temp3 * center2ControlPoint[2] + temp4 * endControlPoint[2],
    ];
};
