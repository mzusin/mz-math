# Get Animation Data

The animation API has various helpers for getting information about the current animation.

```ts
// Returns true if the animation is currently running, false otherwise.
const animating: boolean = api.isAnimating();
```

```ts
// Returns the timestamp (in milliseconds) when the animation was started.
const animating: number = api.getStartTime();
```

```ts
// Returns the time elapsed (in milliseconds) since the animation was started.
const animating: number = api.getElapsedTime();
```

```ts
// Returns the percentage of the animation that has been completed (0 to 100). 
// Returns undefined if the duration is infinite, or if the animation hasn't started yet.
const percent: number = api.getPercent();
```

```ts
// Returns the ResizeObserver used by the animation to detect changes in the size of the document body. 
// Returns undefined if restartOnResize property is false.
const observer: ResizeObserve = api.getResizeObserver();
```

