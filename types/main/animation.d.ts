export interface IAnimationProps {
    duration?: number;
    callback: (result: IAnimationResult) => void;
    restartOnResize?: boolean;
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
    getResizeObserver: () => ResizeObserver | undefined;
}
export declare const animate: (props: IAnimationProps) => IAnimationResult;
