import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { HeroesComponent } from './component/heroes/heroes.component';
import { AboutComponent } from './component/about/about.component';
import { HeroeComponent } from './component/heroe/heroe.component';
import { BuscarHeroeComponent } from './component/buscar-heroe/buscar-heroe.component';

const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'buscar/:name', component: BuscarHeroeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRouterModule {}
