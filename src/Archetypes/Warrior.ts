import Arquetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Arquetype {
  private _hability: EnergyType;
  private static _instancesWarrior = 0;

  constructor(name: string) {
    super(name);
    this._hability = 'stamina';
    Warrior._instancesWarrior += 1;
  }

  public static createdArchetypeInstances(): number {
    return Warrior._instancesWarrior;
  }

  public get energyType(): EnergyType {
    return this._hability;
  }
}

export default Warrior;