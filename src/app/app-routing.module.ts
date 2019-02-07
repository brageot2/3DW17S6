import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JeuComponent }      from './jeu/jeu.component';
import { GameDetailComponent }  from './game-detail/game-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/jeu', pathMatch: 'full' },
  { path: 'jeu', component: JeuComponent },
  { path: 'game-detail/:id', component: GameDetailComponent }
];

@NgModule({
	  imports: [ RouterModule.forRoot(routes) ],
      exports: [ RouterModule ]

})
export class AppRoutingModule {}


