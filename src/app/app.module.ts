import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { AppRouterModule } from './app.routes';

// Servicios
import { HeroesService } from './services/heroes.service';


// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { HeroesComponent } from './component/heroes/heroes.component';
import { HeroeComponent } from './component/heroe/heroe.component';
import { BuscarHeroeComponent } from './component/buscar-heroe/buscar-heroe.component';
import { HeroesTarjetaComponent } from './component/heroes-tarjeta/heroes-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscarHeroeComponent,
    HeroesTarjetaComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [HeroesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }