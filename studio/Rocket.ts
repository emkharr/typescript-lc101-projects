import { Payload } from "./Payload";
import { Cargo } from "./Cargo"
import {Astronaut} from "./Astronaut"

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name, totalCapacityKg) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    };

    sumMass(items: Payload[]): number {
        let sum = 0;
        for (let key in items) {
            sum += items[key].massKg
        }
        // return items.reduce((a, b) => ({ massKg: a.massKg + b.massKg} )).massKg;
        return sum
    };

    currentMassKg(): number {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems)
    };

    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true
        }
    };

    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo)
            return true;
        } else {
            return false;
        };
    };

    addAstronaut(astronaut: Astronaut): boolean {
       if (this.canAdd(astronaut)) {
        this.astronauts.push(astronaut);
           return true;
       } else {
           return false;
       };
    };



};