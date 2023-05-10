import Arquetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Arquetype {
  private _hability: EnergyType;
  private static _instancesNecromancer = 0;

  constructor(name: string) {
    super(name);
    this._hability = 'mana';
    Necromancer._instancesNecromancer += 1;
  }

  public static createdArchetypeInstances(): number {
    return Necromancer._instancesNecromancer;
  }

  public get energyType(): EnergyType {
    return this._hability;
  }
}

export default Necromancer;