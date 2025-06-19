import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { InicioComponent } from './components/inicio/inicio.component';
import { MenuComponent } from './components/menu/menu.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

import { EleganteComponent } from './components/elegante/elegante.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';

import { CasualComponent } from './components/casual/casual.component';
import { DeportivoComponent } from './components/deportivo/deportivo.component';

export const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'aboutus', component: AboutUsComponent},
    {path: 'elegante', component: EleganteComponent},
    {path: 'favoritos', component: FavoritosComponent},
    {path: 'casual', component: CasualComponent},
    {path: 'deportivo', component: DeportivoComponent}
];
