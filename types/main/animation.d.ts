export interface IAnimationProps {
    duration?: number;
    callback: (result: IAnimationResult) => void;
}
export interface IAnimationResult {
    start: () => void;
    stop: () => void;
    pause: () => void;
    resume: () => void;
    restart: () => void;
    isAnimating: () => boolean;
    getStartTime: () => number | undefined;
    getElapsedTime: () => number | undefined;
    getPercent: () => number | undefined;
}
export declare const animate: (props: IAnimationProps) => IAnimationResult;
