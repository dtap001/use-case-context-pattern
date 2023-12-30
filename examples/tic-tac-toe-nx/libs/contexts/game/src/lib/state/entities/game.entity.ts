export class GameEntity {
  status: GameStatus;
  constructor(){
    this.status = GameStatus.INIT;
  }
}

export enum GameStatus {
  INIT,
  STARTED,
  ENDED
}
