import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorPhotosComponent } from './actor-photos.component';

describe('ActorPhotosComponent', () => {
  let component: ActorPhotosComponent;
  let fixture: ComponentFixture<ActorPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActorPhotosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ActorPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get image src', () => {
    const path = 'path';
    expect(component.getSrc(path)).toContain(path);
  });
});
