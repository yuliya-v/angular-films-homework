import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ACTORS_DATA } from 'src/app/data/actors.mock';
import { CastMemberComponent } from './cast-member.component';

describe('CastMemberComponent', () => {
  let component: CastMemberComponent;
  let fixture: ComponentFixture<CastMemberComponent>;
  const actorData = ACTORS_DATA[0];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CastMemberComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(CastMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have data', () => {
    [component.name, component.character, component.imagePath].forEach(prop => {
      expect(prop).toBeFalsy();
    });
  });

  it('should set data', () => {
    component.data = actorData;
    component.ngOnInit();
    [component.name, component.character].forEach(prop => {
      expect(prop).toBeTruthy();
    });
  });
});
