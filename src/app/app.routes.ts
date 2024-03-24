import { Routes } from '@angular/router';
import { TowerOfHanoiComponent } from './tower-of-hanoi/tower-of-hanoi.component';
import {SlidingGameComponent} from "./sliding-game/sliding-game.component";

export const routes: Routes = [
  { path: 'tower-of-hanoi', component: TowerOfHanoiComponent },
  {path: 'sliding-game', component: SlidingGameComponent},
  // other routes...
];
