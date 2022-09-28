import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { MoviesService } from 'src/app/core/services/movies.service';
import { SearchComponent } from './search.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

const moviesServiceStub = {
  query$: new BehaviorSubject<string | null>(null),
};

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [TranslateModule.forRoot(), RouterTestingModule, ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: MoviesService, useValue: moviesServiceStub }],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pass value to service', fakeAsync(async () => {
    component.ngOnInit();
    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    const val = 'input value';
    input.value = val;
    input.dispatchEvent(new Event('input'));
    tick(1500);
    expect(component.moviesService.query$.value).toBe(val);
  }));
});
