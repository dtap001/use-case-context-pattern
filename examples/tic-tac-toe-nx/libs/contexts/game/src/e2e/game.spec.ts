import { TestBed } from '@angular/core/testing';
import { GameContextService } from '../lib/game-context.service';
import { GameStateService } from '../lib/state/state.service';
import { first, firstValueFrom } from 'rxjs';

describe('GameService', () => {
  let context: GameContextService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameStateService, GameContextService],
    });
    context = TestBed.inject(GameContextService);
  });

  it('should change game status', async () => {
    await context.onInit();
    const status = await context.gameStatus().pipe(first()).toPromise();
    expect(status).not.toBeNull();
  });
});
