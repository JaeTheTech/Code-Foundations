/**
 * Game Board Variables 🎮
 * ====================
 * Time: 10 minutes
 * Topic: Learning to use variables to create game boards
 */

/**
 * Terrain Types Guide 🗺️
 * 
 * Group 1 - Basic Terrains:
 * - 'grass': Safe starting areas
 * - 'rocks': Natural obstacles
 * - 'forest': Dense vegetation
 * 
 * Group 2 - Water Features:
 * - 'lake': Water bodies
 * - 'beach': Shorelines
 * - 'town': Settlements
 * 
 * Group 3 - Special Environments:
 * - 'glacier': Ice regions
 * - 'desert': Arid zones
 * - 'moon': Space terrain
 */

// Step 1: Declare your first terrain
let terrain1 = 'grass';
console.log('First terrain:', terrain1);

// Step 2: Add more terrain types
let terrain2 = 'rocks';
let terrain3 = 'forest';
console.log('All terrains:', terrain1, terrain2, terrain3);

/**
 * Practice Time! 🏋️‍♂️
 * Try these exercises:
 * 1. Change terrain1 to 'lake'
 * 2. Change terrain2 to 'beach'
 * 3. Change terrain3 to 'town'
 */

// Example of changing terrains
terrain1 = 'lake';
console.log('\nNew terrain type:', terrain1);

/**
 * Advanced Challenge 🌟
 * Try creating different combinations using:
 * - Group 1: grass, rocks, forest
 * - Group 2: lake, beach, town
 * - Group 3: glacier, desert, moon
 */

// Creating a game board
let gameBoard = [
    [terrain1, terrain2, terrain3],
    [terrain3, terrain1, terrain2],
    [terrain2, terrain3, terrain1]
];

// Show the game board
console.log('\nGame Board Layout:');
console.log(gameBoard);