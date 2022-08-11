import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorProfilePageComponent } from './actor-profile-page.component';

describe('ActorProfilePageComponent', () => {
  let component: ActorProfilePageComponent;
  let fixture: ComponentFixture<ActorProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActorProfilePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ActorProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
