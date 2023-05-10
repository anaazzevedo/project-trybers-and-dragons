import Arquetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Arquetype {
  private _hability: EnergyType;
  private static _instancesMage = 0;

  constructor(name: string) {
    super(name);
    this._hability = 'mana';
    Mage._instancesMage += 1;
  }

  public static createdArchetypeInstances(): number {
    return Mage._instancesMage;
  }

  public get energyType(): EnergyType {
    return this._hability;
  }
}

export default Mage;