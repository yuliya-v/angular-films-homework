import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorProfilePhotoComponent } from './actor-profile-photo.component';

describe('ActorProfilePhotoComponent', () => {
  let component: ActorProfilePhotoComponent;
  let fixture: ComponentFixture<ActorProfilePhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActorProfilePhotoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ActorProfilePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
