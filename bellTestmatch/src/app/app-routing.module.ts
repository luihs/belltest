import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioMatchComponent } from './inicio-match/inicio-match.component';
import { MatchGameComponent } from './match-game/match-game.component';
import { ResumeCartComponent } from './resume-cart/resume-cart.component';
import { FinalMatchComponent } from './final-match/final-match.component';
import { ComprarLuegoComponent } from './comprar-luego/comprar-luego.component';


const routes: Routes = [
  {
    path: '', component: InicioMatchComponent
  },
  {
    path: 'gamematch', component: MatchGameComponent
  },
  {
    path: 'resumecart', component: ResumeCartComponent
  },
  {
    path: 'finalmatch', component: FinalMatchComponent
  },
  {
    path: 'comprarluego', component: ComprarLuegoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
