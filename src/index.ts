// import classes
// TODO: Build these classes
import { Human } from "./classes/Human.js";
import { Monster } from "./classes/Monster.js";
import { Horse } from "./classes/Horse.js";
import CLI from "./classes/Cli.js";

// ** DUMMY DATA TO TEST THE CLASSES ***

// Creates an empty array to store creatures
const creatures: (Human | Monster | Horse)[] = [];

// Creates a new Human instance
// const witcher = new Human(
//   // TODO: BUILD THE randomName METHOD
//   CLI.randomName(), // Random Name
//   CLI.randomHealth(), // Random Health
//   CLI.randomAttackPower(), // Attack power
//   CLI.randomProfession(), // Profession
//   CLI.randomDefense(), // Random Defense
//   CLI.randomSpeed(), // Random Speed
//   CLI.randomSkills() // Random Skills
// );

// Creates a new Monster instance
// const griffin = new Monster(
//   CLI.randomName(), // Random Name
//   CLI.randomHealth(), // Random Health
//   CLI.randomAttackPower(), // Attack power
//   CLI.randomType(), // Type
//   CLI.randomDefense(), // Random Defense
//   CLI.randomSpeed() // Random Speed
// );

// Creates a new Horse instance
// const roach = new Horse(
//   CLI.randomName(), // Random Name
//   CLI.randomHealth(), // Random Health
//   CLI.randomCapacity(), // Carrying capacity
//   CLI.randomSpeed(), // Random Speed
//   CLI.randomEndurance() // Random Endurance
// );

// Pushes the instances to the creatures array
// creatures.push(witcher);
// creatures.push(griffin);
// creatures.push(roach);

// Creates a new CLI instance
const cli = new CLI(creatures);

// Calls the startCLI method
cli.startClI();
