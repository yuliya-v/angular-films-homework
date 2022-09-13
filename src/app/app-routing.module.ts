import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main/pages/main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'actor',
    loadChildren: () =>
      import('./actor-profile/actor-profile.module').then(m => m.ActorProfileModule),
  },
  {
    path: 'movie',
    loadChildren: () =>
      import('./movie-details/movie-details.module').then(m => m.MovieDetailsModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule {}
