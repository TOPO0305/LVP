import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./pages/productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'agendar',
    loadChildren: () => import('./pages/agendar/agendar.module').then( m => m.AgendarPageModule)
  },
  {
    path: 'septum',
    loadChildren: () => import('./pages/septum/septum.module').then( m => m.SeptumPageModule)
  },
  {
    path: 'monroe',
    loadChildren: () => import('./pages/monroe/monroe.module').then( m => m.MonroePageModule)
  },
  {
    path: 'ombligo',
    loadChildren: () => import('./pages/ombligo/ombligo.module').then( m => m.OmbligoPageModule)
  },
  {
    path: 'dermal',
    loadChildren: () => import('./pages/dermal/dermal.module').then( m => m.DermalPageModule)
  },
  {
    path: 'helix',
    loadChildren: () => import('./pages/helix/helix.module').then( m => m.HelixPageModule)
  },
  {
    path: 'tragus',
    loadChildren: () => import('./pages/tragus/tragus.module').then( m => m.TragusPageModule)
  },
  {
    path: 'notfound',
    loadChildren: () => import('./pages/notfound/notfound.module').then( m => m.NotfoundPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./pages/recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
