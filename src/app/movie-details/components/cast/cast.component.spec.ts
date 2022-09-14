import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { ACTORS_DATA } from 'src/app/data/actors.mock';
import { CastComponent } from './cast.component';

describe('CastComponent', () => {
  let component: CastComponent;
  let fixture: ComponentFixture<CastComponent>;
  const actorsData = ACTORS_DATA;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CastComponent],
      imports: [TranslateModule.forRoot()],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(CastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show all data on click', () => {
    component.data = actorsData;
    component.ngOnInit();
    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('.btn'));
    expect(component.currentData.length).toBe(component.initActorsNumber);
    btn.triggerEventHandler('click', null);
    expect(component.currentData.length).toBe(actorsData.length);
  });

  it('should hide data on click', () => {
    component.data = actorsData;
    component.ngOnInit();
    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('.btn'));
    btn.triggerEventHandler('click', null);
    btn.triggerEventHandler('click', null);
    expect(component.currentData.length).toBe(component.initActorsNumber);
  });

  it('should hide btn', () => {
    component.data = actorsData.slice(0, component.initActorsNumber);
    component.ngOnInit();
    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('.btn'));
    expect(btn).toBeFalsy();
  });
});
