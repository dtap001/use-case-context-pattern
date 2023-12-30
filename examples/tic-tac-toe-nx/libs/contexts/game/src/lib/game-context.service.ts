import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { GameStatusVM } from './view-model/game-status.vm';
import { GameStateService } from './state/state.service';

@Injectable({
  providedIn: 'root',
})
export class GameContextService {
  constructor(state: GameStateService) {}
  gameStatus(): Observable<GameStatusVM> {
    return of([]).pipe(map(() => new GameStatusVM()));
  }
  onInit() {}
  startGame() {}
  onPlayerChoosenFiled() {}
}
