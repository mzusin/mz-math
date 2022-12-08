import { v2Sum, v3Sum, v2Length, v3Length } from './vector';
declare global {
    interface Window {
        TCMath: {
            v2Sum: typeof v2Sum;
            v3Sum: typeof v3Sum;
            v2Length: typeof v2Length;
            v3Length: typeof v3Length;
        };
    }
}
