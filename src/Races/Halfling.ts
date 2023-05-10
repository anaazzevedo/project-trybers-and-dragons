import Race from './Race';

class Halfling extends Race {
  private _maxPoint: number;
  private static _instancesHalfling = 0;

  constructor(name: string, dexterity: number) { 
    super(name, dexterity);
    this._maxPoint = 60;
    Halfling._instancesHalfling += 1;
  }

  public static createdRacesInstances(): number {
    return Halfling._instancesHalfling;
  }

  public get maxLifePoints(): number {
    return this._maxPoint;
  }
}

export default Halfling;