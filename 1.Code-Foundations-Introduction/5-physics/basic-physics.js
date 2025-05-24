/**
 * Animation Physics
 * ===============
 * 
 * Overview:
 * Discover how changing variable values affects animation behavior.
 * Learn to control mouse interaction and physics properties.
 * 
 * Key Variables:
 * - mouseResponseThreshold: Controls mouse interaction distance
 * - friction: Affects movement resistance
 * - rotationForce: Controls rotation speed
 */

// Set the mouse response threshold
// Higher values = stronger mouse interaction
mouseResponseThreshold = 150;

// Create animated text
drawName('Physics Demo');

// Enable interactive animation with physics
bounceBubbles();