import Arquetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Arquetype {
  private _hability: EnergyType;
  private static _instancesRanger = 0;

  constructor(name: string) {
    super(name);
    this._hability = 'stamina';
    Ranger._instancesRanger += 1;
  }

  public static createdArchetypeInstances(): number {
    return Ranger._instancesRanger;
  }

  public get energyType(): EnergyType {
    return this._hability;
  }
}

export default Ranger;