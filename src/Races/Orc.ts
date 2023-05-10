import Race from './Race';

class Orc extends Race {
  private _maxPoint: number;
  private static _instancesOrc = 0;

  constructor(name: string, dexterity: number) { 
    super(name, dexterity);
    this._maxPoint = 74;
    Orc._instancesOrc += 1;
  }

  public static createdRacesInstances(): number {
    return Orc._instancesOrc;
  }

  public get maxLifePoints(): number {
    return this._maxPoint;
  }
}

export default Orc;