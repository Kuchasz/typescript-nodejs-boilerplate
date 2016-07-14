import * as Creatures from '../Models';
export class CreaturesService {
  creatures: string[] = [];
  constructor(){
    Object.keys(Creatures).forEach(creatureConstructor=>{
      this.creatures.push(creatureConstructor);
    });
  }
}
