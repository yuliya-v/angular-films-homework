import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorProfilePageComponent } from './pages/actor-profile-page/actor-profile-page.component';

const routes: Routes = [
  {
    path: ':id',
    component: ActorProfilePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class ActorProfileRoutingModule {}
