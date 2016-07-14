import {Creature} from './Creature';
export class Cat extends Creature{
  public Attack(): string{
    return 'Cat attacked by claw';
  }
}
