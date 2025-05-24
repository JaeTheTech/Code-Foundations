/**
 * Changing Variable Values 🔄
 * =========================
 * Topic: Understanding how to modify variables in your programs
 */

/**
 * Key Concepts 📝
 * 1. Variables can be updated at any time
 * 2. Each update replaces the previous value
 * 3. You can reuse the variable after changing it
 */

// Example 1: Using Large Numbers
console.log("Working with large numbers:");
let my_number = 847595593392818109495;  // Initial value
console.log(my_number);                  // Show original
console.log(my_number * 2);              // Double it
console.log(my_number / 4);              // Quarter it

// Example 2: Changing Values 🔁
console.log("\nChanging variable values:");
my_number = 1;                          // Change to small number
console.log(my_number * 2);             // Now doubles 1
console.log(my_number / 4);             // Now quarters 1

/**
 * Real-World Application: Game Design 🎮
 * In games, we often need to change values:
 * - Player health
 * - Score points
 * - Position coordinates
 */

// Example 3: Game Variables
let playerHealth = 100;      // Start with full health
console.log("Health:", playerHealth);

playerHealth = 70;           // Player takes damage
console.log("After damage:", playerHealth);

playerHealth = 100;          // Player heals
console.log("After healing:", playerHealth);

/**
 * Practice Exercise 🏋️‍♂️
 * Try creating a game board with different terrains:
 * 1. Start with one terrain type
 * 2. Change it to create variations
 * 3. See how easy it is to modify your game
 */

// Game Board Example
let terrain = "grass";
console.log("Starting terrain:", terrain);

terrain = "rocks";           // Change the environment
console.log("New terrain:", terrain);

terrain = "water";           // Change it again!
console.log("Final terrain:", terrain);