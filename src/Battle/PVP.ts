import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _player: Fighter | SimpleFighter;
  private _player2: Fighter | SimpleFighter;

  constructor(
    player: Fighter | SimpleFighter,
    player2: Fighter | SimpleFighter,
  ) {
    super(player);
    this._player = player;
    this._player2 = player2;
  }

  public fight(): number {
    while (this._player.lifePoints > 0 && this._player2.lifePoints > 0) {
      this._player.attack(this._player2);
      this._player2.attack(this._player);
    }
    return super.fight();
  }
}

export default PVP;