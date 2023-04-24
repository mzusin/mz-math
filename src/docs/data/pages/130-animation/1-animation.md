# Animation

The library contains an animation API that can control the animation flow. Basic usage:

```ts
import { animate, IAnimationResult } from 'mz-math';

const api: IAnimationResult = animate({
    
    // A function to be called on each animation frame. 
    // It receives an object of type IAnimationResult.
    callback: (result: IAnimationResult) => {
        // DO ANY RENDERING LOGIC HERE
    },
    
    // Optional property.
    // The duration of the animation in milliseconds. 
    // If not provided, the animation will continue indefinitely.
    duration: 1000,
    
    // Optional property.
    // If true, the animation will restart whenever 
    // the size of the document body changes. Default is false.
    restartOnResize: true,

    // Optional property.
    resizeCallback: (_entries: ResizeObserverEntry[], _observer: ResizeObserver) => {
        // Do something on resize
    }
});

// Starts the animation.
api.start();

/*
// Stops the animation.
api.stop(); 

// Pauses the animation.
api.pause();

// Resumes the animation from where it was paused.
api.resume();

// Restarts the animation from the beginning.
api.restart();
 */
```


The **IAnimationResult** interface defines the methods and properties returned by the animate function.

```ts
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
```