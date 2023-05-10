import Race from './Race';

class Elf extends Race {
  private _maxPoint: number;
  private static _instancesElf = 0;

  constructor(name: string, dexterity: number) { 
    super(name, dexterity);
    this._maxPoint = 99;
    Elf._instancesElf += 1;
  }

  public static createdRacesInstances(): number {
    return Elf._instancesElf;
  }

  public get maxLifePoints(): number {
    return this._maxPoint;
  }
}

export default Elf;