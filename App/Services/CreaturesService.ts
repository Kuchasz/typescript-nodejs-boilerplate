import * as Creatures from '../Models';
export class CreaturesService {
    creatures: Creatures.Creature[] = [];
    constructor() {
        this.creatures.push(new Creatures.Cat);
        this.creatures.push(new Creatures.Dog);
        this.creatures.push(new Creatures.Dragon);
        this.creatures.push(new Creatures.Rhino);
    }
}
