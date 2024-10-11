import inquirer from "inquirer";
// import { Monster } from "./Monster";
// import { Human } from "./Human";
// import { Horse } from "./Horse";
import { Creature } from "./Creature";

class Cli {
  creatures: Creature[] = [];
  selectedCreatureName: string | undefined;
  exit: boolean = false;

  constructor(creatures: Creature[]) {
    this.creatures = creatures;
  }

  static randomName(): string {
    return ""; // Placeholder return value
  }

  static randomHealth(): number {
    return 0; // Placeholder return value
  }

  static randomAttackPower(): number {
    return 0; // Placeholder return value
  }

  static randomProfession(): string {
    return ""; // Placeholder return value
  }

  static randomDefense(): number {
    return 0; // Placeholder return value
  }

  static randomSpeed(): number {
    return 0; // Placeholder return value
  }

  static randomSkills(): string[] {
    return []; // Placeholder return value
  }

  static randomType(): string {
    return ""; // Placeholder return value
  }

  static randomCapacity(): number {
    return 0; // Placeholder return value
  }

  static randomEndurance(): number {
    return 0; // Placeholder return value
  }

  startClI(): void {
    inquirer
      .prompt([
        {
          type: "list",
          name: "createOrSelect",
          message:
            "Would you like to create a new creature or perform an action on an existing one?",
          choices: ["Create a new creature", "Select an existing creature"],
        },
      ])
      .then((answers) => {
        if (answers.createOrSelect === "Create a new creature") {
          console.log("Creating creature...");
        } else {
          console.log("Selecting creature...");
        }
      });
  }
}

export default Cli;
