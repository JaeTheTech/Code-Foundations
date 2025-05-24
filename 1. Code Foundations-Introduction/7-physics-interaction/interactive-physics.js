/**
 * Interactive Physics Controls
 * =========================
 * 
 * Overview:
 * Experiment with different physics settings to understand how
 * variables affect animation behavior and mouse interaction.
 * 
 * Physics Variables:
 * - mouseResponseThreshold: Changes mouse interaction distance
 *   - Higher values (like 150) = stronger mouse effect
 *   - Lower values (like 50) = more subtle effect
 * 
 * - friction: Controls bounce-back force
 *   - Range: 0.0 to 1.0
 *   - Higher values (0.95) = quicker return
 *   - Lower values (0.5) = slower return
 * 
 * - rotationForce: Sets rotation amount
 *   - Keep between 0.0 and 2.0
 *   - Higher = more spin
 */

// Define rainbow colors (HSL format)
const red = [0, 100, 63];
const orange = [40, 100, 60];
const green = [75, 100, 40];
const blue = [196, 77, 55];
const purple = [280, 50, 60];
const letterColors = [red, orange, green, blue, purple];

// Physics interaction settings
mouseResponseThreshold = 150;   // Try values 50-150
friction = 0.95;               // Try values 0.5-0.95
rotationForce = 0.01;         // Try values 0.0-0.1

// Create animated text
message = 'Interactive Physics!';
drawName(message, letterColors);
bounceBubbles();