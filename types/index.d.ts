import { v2Sum } from './vector';
declare global {
    interface Window {
        TCMath: {
            v2Sum: typeof v2Sum;
        };
    }
}
