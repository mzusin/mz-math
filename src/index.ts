import { v2Sum, v3Sum } from './vector';

declare global {
    interface Window {
        TCMath: {
            v2Sum: typeof v2Sum,
        }
    }
}

window.TCMath = window.TCMath || {
    v2Sum,
    v3Sum,
};