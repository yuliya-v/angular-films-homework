import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorProfilePageComponent } from './pages/actor-profile-page/actor-profile-page.component';
import { ActorDetailsComponent } from './components/actor-details/actor-details.component';
import { ActorPhotosComponent } from './components/actor-photos/actor-photos.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ActorProfilePageComponent, ActorDetailsComponent, ActorPhotosComponent],
  imports: [CommonModule, SharedModule],
  exports: [ActorProfilePageComponent],
})
export class ActorProfileModule {}
