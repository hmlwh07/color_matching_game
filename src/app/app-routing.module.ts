import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GameViewComponent } from './game-view/game-view.component';
import { ForNormalModeComponent } from './game-modes/for-normal-mode/for-normal-mode.component';
import { ForEasyModeComponent } from './game-modes/for-easy-mode/for-easy-mode.component';
import { ForHardModeComponent } from './game-modes/for-hard-mode/for-hard-mode.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'game-view', component: GameViewComponent },
  { path: 'easy', component: ForEasyModeComponent},
  { path: 'normal', component: ForNormalModeComponent},
  { path: 'hard', component: ForHardModeComponent},
  { path: '' , redirectTo: '/home' , pathMatch: 'prefix'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
