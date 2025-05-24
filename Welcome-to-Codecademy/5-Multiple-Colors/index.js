/**
 * Color Animation with Arrays
 * =========================
 * 
 * Overview:
 * Learn how to create colorful animated text using arrays and HSL colors.
 * Each color is defined as [hue, saturation, lightness].
 * 
 * Key Concepts:
 * - Arrays store multiple values using []
 * - HSL colors use numbers for hue(0-360), saturation(0-100), lightness(0-100)
 * - Variables can store arrays of colors
 * 
 * Instructions:
 * 1. Try changing the color values below
 * 2. Experiment with the hue (first number) in each color
 * 3. Watch how the animation cycles through colors
 */

// Define colors using HSL values [hue, saturation, lightness]
const red = [0, 100, 63];        // Pure red
const orange = [40, 100, 60];    // Warm orange
const green = [75, 100, 40];     // Bright green
const blue = [196, 77, 55];      // Ocean blue
const purple = [280, 50, 60];    // Royal purple

// Create an array of colors to cycle through
const letterColors = [red, orange, green, blue, purple];

// Set message and draw with color animation
const message = 'Rainbow Colors!';
drawName(message, letterColors);

// Enable the interactive animation
bounceBubbles();