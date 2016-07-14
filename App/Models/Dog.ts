import {Creature} from './Creature';
export class Dog extends Creature{
  public Attack(): string{
    return 'Dog attacked by tooth';
  }
}
