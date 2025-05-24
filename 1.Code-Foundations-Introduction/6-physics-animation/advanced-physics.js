/**
 * Advanced Physics Animation
 * =======================
 * 
 * Overview:
 * Experiment with physics properties to create different animation effects.
 * Learn how variables control interactive behavior of the animation.
 * 
 * Key Variables:
 * - mouseResponseThreshold: Distance for mouse interaction
 * - friction: Return-to-position force
 * - rotationForce: Rotation amount during interaction
 */

// Define color variables for rainbow effect
const red = [0, 100, 63];
const orange = [40, 100, 60];
const green = [75, 100, 40];
const blue = [196, 77, 55];
const purple = [280, 50, 60];
const letterColors = [red, orange, green, blue, purple];

// Physics control variables
mouseResponseThreshold = 50;    // Mouse interaction distance
friction = 0.85;               // Return force (0.5-0.95)
rotationForce = 0.0;          // Rotation amount (0.0-2.0)

// Create the animated text
message = 'Change the physics!';
drawName(message, letterColors);
bounceBubbles();