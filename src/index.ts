const creatures = [];

const witcher = new Human(
  ClI.generateName(), // Name
  100, // Health
  50, // Attack power
  "Witcher", // Profession
  30, // Defense
  10, // Speed
  ["Swordsmanship", "Alchemy"] // Skills
);

const griffin = new Monster(
  ClI.generateName(), // Dynamic name
  150, // Health
  40, // Attack power
  "Griffin", // Type
  25, // Defense
  20 // Speed
);

const roach = new Horse(
  ClI.generateName(), // Dynamic name
  80, // Health
  600, // Carrying capacity
  15, // Speed
  10 // Endurance
);
