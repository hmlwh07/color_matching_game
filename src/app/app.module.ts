import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GameViewComponent } from './game-view/game-view.component';
import { RouterModule } from '@angular/router';
import { ForNormalModeComponent } from './game-modes/for-normal-mode/for-normal-mode.component';
import { ForEasyModeComponent } from './game-modes/for-easy-mode/for-easy-mode.component';
import { ForHardModeComponent } from './game-modes/for-hard-mode/for-hard-mode.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameViewComponent,
    ForEasyModeComponent,
    ForNormalModeComponent,
    ForHardModeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
