/**
 * Reusing Values with Variables 📦
 * ==============================
 * Topic: Understanding why and how to use variables effectively
 */

/*
 * What are Variables? 🤔
 * Variables store data that can be:
 * - Manipulated (changed)
 * - Referenced (used multiple times)
 * - Named meaningfully (for better code readability)
 */

// Example 1: Without Variables (Hardcoding) ❌
console.log("Hardcoded values:");
847595593392818109495;        // Original number
847595593392818109495 * 2;    // Double the number
847595593392818109495 / 4;    // Quarter of the number

// Example 2: With Variables ✅
console.log("\nUsing variables:");
let my_number = 847595593392818109495;
console.log(my_number);        // Original number
console.log(my_number * 2);    // Double the number
console.log(my_number / 4);    // Quarter of the number

/**
 * Why Use Variables? 🎯
 * 1. Avoid repetition
 * 2. Prevent typing errors
 * 3. Make code more readable
 * 4. Easier to update values
 * 5. More maintainable code
 */

// Practical Example: Game Terrain 🎮
let terrain1 = "grass";    // Define terrain types
let terrain2 = "rocks";    // These can be reused
let terrain3 = "forest";   // throughout the game

// Using variables to create game board
let gameBoard = [
    [terrain1, terrain2, terrain3],
    [terrain3, terrain1, terrain2],
    [terrain2, terrain3, terrain1]
];

/**
 * Practice Exercise 🏋️‍♂️
 * Try creating your own game board using these variables:
 * 1. Change the terrain values
 * 2. Observe how the board updates
 * 3. Notice how much easier it is to make changes
 */

// Your turn! Modify these values to see changes
terrain1 = "water";    // Try changing to: grass, rocks, forest
terrain2 = "forest";   // Watch how the whole board updates
terrain3 = "rocks";    // With just one change!

