import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { GameContextService } from "./game-context.service";

@NgModule({
  imports: [CommonModule],
  providers: [GameContextService, PlayerService, BoardService, GameService],
})
export class GameContextModule {}
