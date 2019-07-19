import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/home/home.module#HomeModule'
  },
  {
    path: 'favorites',
    loadChildren: './pages/favorities/favorities.module#FavoritiesModule'
  },
  {
    path: 'detail',
    loadChildren: './pages/detail/detail.module#DetailModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '**',
    loadChildren: './pages/page-not-found/page-not-found.module#PageNottFoundModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
