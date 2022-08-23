import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ACTOR_DATA } from 'src/app/data/actor.mock';

import { ActorDetailsComponent } from './actor-details.component';

describe('ActorDetailsComponent', () => {
  let component: ActorDetailsComponent;
  let fixture: ComponentFixture<ActorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActorDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ActorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have data', () => {
    expect(component.data).toBeFalsy();
  });

  it('should set data', () => {
    const title = fixture.debugElement.query(By.css('h2')).nativeElement;
    component.data = ACTOR_DATA;
    component.ngOnInit();
    fixture.detectChanges();
    expect(title.textContent.toLowerCase()).toContain(ACTOR_DATA.name.toLowerCase());
  });
});
