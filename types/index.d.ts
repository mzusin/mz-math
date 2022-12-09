import * as vector from './vector';
import * as format from './format';
import * as angle from './angle';
import * as random from './random';
declare global {
    interface Window {
        TCMath: {
            v2Sum: typeof vector.v2Sum;
            v3Sum: typeof vector.v3Sum;
            v2Length: typeof vector.v2Length;
            v3Length: typeof vector.v3Length;
            getV2Angle: typeof angle.getV2Angle;
            radiansToDegrees: typeof angle.radiansToDegrees;
            degreesToRadians: typeof angle.degreesToRadians;
            setDecimalPlaces: typeof format.setDecimalPlaces;
            getRandom: typeof random.getRandom;
            getRandomInt: typeof random.getRandomInt;
            getRandomBoolean: typeof random.getRandomBoolean;
        };
    }
}
