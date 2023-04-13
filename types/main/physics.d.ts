import { Vector2 } from '../types';
/**
 * Speed = how far something moves in a given amount of time.
 * Speed is also a vector:
 * magnitude = distance
 * direction = time
 */
export type Speed = Vector2;
/**
 * Velocity is a measure of how fast an object is moving in a particular direction.
 * Velocity = Distance traveled / Time taken
 * It has a magnitude and direction, and can be represented as a vector.
 */
export type Velocity = Vector2;
/**
 * Acceleration is a measure of how quickly an object's velocity changes over time.
 * Acceleration = (Final velocity - Initial velocity) / Time taken
 * a = (vf - v0)/t.
 * Distance = Initial velocity * time + (acceleration * time^2) / 2
 * It also has a magnitude and direction, and can be represented as a vector.
 * When the direction is negative ----> it's a "slowdown" movement
 */
export type Acceleration = Vector2;
/**
 * Gravity is the force that attracts two objects with mass toward each other.
 * Newton's law of universal gravitation formula:
 * Gravitational force = (Gravitational constant * Mass of object 1 * Mass of object 2) / Distance between objects^2
 * It also has a magnitude and direction, and can be represented as a vector.
 * magnitude = the strength of the gravitational force
 * direction = the direction in which the force is acting (the direction of the gravitational force is always toward the center of mass of the objects involved)
 */
export type Gravity = Vector2;
