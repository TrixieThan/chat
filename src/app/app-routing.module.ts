import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'iniciosesion', pathMatch: 'full' },
  { path: 'iniciosesion', loadChildren: './iniciosesion/iniciosesion.module#IniciosesionPageModule' },
  { path: 'home/:datos', loadChildren: './home/home.module#HomePageModule' },
  { path: 'recupcontras', loadChildren: './recupcontras/recupcontras.module#RecupcontrasPageModule' },
  { path: 'crearcuenta', loadChildren: './crearcuenta/crearcuenta.module#CrearcuentaPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
