import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioMatchComponent } from './inicio-match/inicio-match.component';
import { MatchGameComponent } from './match-game/match-game.component';
import { ResumeCartComponent } from './resume-cart/resume-cart.component';
import { Ng5SliderModule } from 'ng5-slider';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CheckOutComponent } from './check-out/check-out.component';
import { FinalMatchComponent } from './final-match/final-match.component';
import { ComprarLuegoComponent } from './comprar-luego/comprar-luego.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    InicioMatchComponent,
    MatchGameComponent,
    ResumeCartComponent,
    CheckOutComponent,
    FinalMatchComponent,
    ComprarLuegoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng5SliderModule,
    NgbModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
