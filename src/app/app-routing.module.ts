import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { MainPageComponent } from './main/pages/main-page/main-page.component';
import { SearchPageComponent } from './main/pages/search-page/search-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'en/main',
    pathMatch: 'full',
  },
  {
    path: ':lang/main',
    component: MainPageComponent,
  },
  {
    path: ':lang/search',
    component: SearchPageComponent,
  },
  {
    path: ':lang/actor',
    loadChildren: () =>
      import('./actor-profile/actor-profile.module').then(m => m.ActorProfileModule),
  },
  {
    path: ':lang/movie',
    loadChildren: () =>
      import('./movie-details/movie-details.module').then(m => m.MovieDetailsModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule {}
