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
    getStartTime: () => number|undefined;
    getElapsedTime: () => number|undefined;
    getPercent: () => number|undefined;
    getResizeObserver: () => ResizeObserver|undefined;
}

export const animate = (props: IAnimationProps) : IAnimationResult => {

    const _duration = props.duration !== undefined ? props.duration : Infinity;

    let startTime: number|undefined = undefined; // in milliseconds
    let animationId: number|undefined = undefined;

    // the time elapsed since the start of the animation (in milliseconds)
    let elapsed: number|undefined = undefined;
    let previousTimeStamp: number|undefined = undefined;

    let animating = false;
    let observer: ResizeObserver|undefined = undefined;

    // -------------------- COMMANDS ---------------------

    const stop = () => {
        startTime = undefined;
        elapsed = undefined;
        previousTimeStamp = undefined;
        animating = false;

        /*if(observer !== undefined){
            observer.disconnect();
            observer = undefined;
        }*/

        if(animationId === undefined) return;
        window.cancelAnimationFrame(animationId);
    };

    const restart = () => {
        stop();
        start();
    };

    const pause = () => {
        animating = false;
    };

    const resume = () => {
        animating = true;
    };

    /**
     * Animation Step.
     * @param {number} timeStamp in milliseconds
     */
    const step = (timeStamp: DOMHighResTimeStamp) => {

        if (startTime === undefined) {
            startTime = timeStamp;
        }

        // the time elapsed since the start of the animation (in milliseconds)
        elapsed = timeStamp - startTime;

        if (animating && previousTimeStamp !== timeStamp && typeof props.callback === 'function') {

            // do the rendering .............
            props.callback(getResult());
        }

        if(elapsed <= _duration){
            previousTimeStamp = timeStamp;
            animationId = window.requestAnimationFrame(step);
        }
        else{
            stop();
        }
    };

    const observerHandler = (_entries: ResizeObserverEntry[], _observer: ResizeObserver) => {
        restart();
    };

    const start = () => {
        startTime = undefined;
        elapsed = undefined;
        previousTimeStamp = undefined;
        animating = true;

        if(props.restartOnResize && window.ResizeObserver && observer === undefined){
            observer = new ResizeObserver(observerHandler);
            observer.observe(document.body, { box: 'border-box' });
        }
        else{
            animationId = window.requestAnimationFrame(step);
        }
    };

    // --------------- GET INFO ----------------------

    /**
     * the time elapsed since the start of the animation (in milliseconds)
     */
    const getElapsedTime = () : number|undefined => {
        return elapsed;
    };

    const isAnimating = () => {
        return animating;
    };

    const getStartTime = () => {
        return startTime;
    };

    const getPercent = () => {
        if(_duration === Infinity || elapsed === undefined) return undefined;
        return elapsed * 100 / _duration;
    };

    const getResizeObserver = () => {
      return observer;
    };

    const getResult = () : IAnimationResult => {
        return {

            // commands --------------
            start,
            stop,
            pause,
            resume,
            restart,

            // information -------
            isAnimating,
            getElapsedTime,
            getStartTime,
            getPercent,
            getResizeObserver,
        };
    };

    return getResult();
};
