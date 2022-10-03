import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ACTORS_DATA } from 'src/app/data/actors.mock';
import { CastMemberComponent } from './cast-member.component';

describe('CastMemberComponent', () => {
  let component: CastMemberComponent;
  let fixture: ComponentFixture<CastMemberComponent>;
  const actorData = ACTORS_DATA[0];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CastMemberComponent],
      imports: [TranslateModule.forRoot()],
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
    [component.name, component.character, component.imagePath, component.id].forEach(prop => {
      expect(prop).toBeFalsy();
    });
  });

  it('should set data', () => {
    component.data = actorData;
    component.ngOnInit();
    [component.name, component.character, component.id].forEach(prop => {
      expect(prop).toBeTruthy();
    });
  });
});
