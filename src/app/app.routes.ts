import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { MenuComponent } from './components/menu/menu.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

export const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'aboutus', component: AboutUsComponent}
];
