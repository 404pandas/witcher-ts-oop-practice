// classes/Horse.ts
import { Creature } from "./Creature";

export class Horse extends Creature {
  carryingCapacity: number;

  constructor(name: string, health: number, carryingCapacity: number) {
    super(name, health);
    this.carryingCapacity = carryingCapacity;
  }

  neigh(): void {
    console.log(`${this.name} neighs loudly!`);
  }

  specialAbility(): void {
    console.log(`${this.name} has the ability to carry heavy loads!`);
  }
}
