/**
 * Changing Colors
 * ==============
 * 
 * Overview:
 * Learn how to pass multiple values to functions and work with color variables.
 * The drawName() function can accept both a message and a color parameter.
 * 
 * Key Concepts:
 * - Functions can accept multiple parameters
 * - Colors are represented as [hue, saturation, lightness] arrays
 * - Variables can store color values
 * 
 * Instructions:
 * 1. Look at the color variables defined below
 * 2. Change the color in drawName() to try different colors
 * 3. Watch how the text color changes
 */

// Available colors defined as HSL values
const red = [0, 100, 63];
const orange = [40, 100, 60];
const green = [75, 100, 40];
const blue = [196, 77, 55];
const purple = [280, 50, 60];

// Change the message and color
message = 'Change the color!';
drawName(message, purple);

// Enable animation
bounceBubbles();