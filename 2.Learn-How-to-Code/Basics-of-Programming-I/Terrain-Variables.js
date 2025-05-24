/**
 * Terrain Variables in Game Design 🎮
 * ================================
 * Time: 5 minutes
 * Topic: Using variables to create different game environments
 */

/**
 * Available Terrain Types 🗺️
 * Group 1 (Basic):
 * - grass  (Starting area)
 * - rocks  (Obstacles)
 * - forest (Dense vegetation)
 * 
 * Group 2 (Water-based):
 * - lake   (Water body)
 * - beach  (Shoreline)
 * - town   (Settlements)
 * 
 * Group 3 (Special):
 * - glacier (Ice area)
 * - desert  (Arid region)
 * - moon    (Space terrain)
 */

// Starting with basic terrain
let terrain1 = 'grass';
console.log('Starting terrain:', terrain1);

// Changing terrain types
terrain1 = 'rocks';
console.log('Changed to rocks:', terrain1);

// Creating a small map
let terrain2 = 'forest';
let terrain3 = 'lake';

// Building a game board
let gameBoard = [
    [terrain1, terrain2, terrain3],
    [terrain2, terrain3, terrain1],
    [terrain3, terrain1, terrain2]
];

/**
 * Practice Exercise 🏋️‍♂️
 * Try these challenges:
 * 1. Change terrain1 to 'beach'
 * 2. Change terrain2 to 'desert'
 * 3. Change terrain3 to 'moon'
 * 4. See how the game board changes!
 */

// Example terrain changes
console.log('\nTrying different terrains:');
terrain1 = 'beach';
terrain2 = 'desert';
terrain3 = 'moon';

// Show the new game board
console.log('Updated game board:', gameBoard);