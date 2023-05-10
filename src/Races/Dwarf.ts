import Race from './Race';

class Dwarf extends Race {
  private _maxPoint: number;
  private static _instancesDwarf = 0;

  constructor(name: string, dexterity: number) { 
    super(name, dexterity);
    this._maxPoint = 80;
    Dwarf._instancesDwarf += 1;
  }

  public static createdRacesInstances(): number {
    return Dwarf._instancesDwarf;
  }

  public get maxLifePoints(): number {
    return this._maxPoint;
  }
}

export default Dwarf;