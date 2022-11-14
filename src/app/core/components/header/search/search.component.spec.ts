import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { MoviesService } from 'src/app/core/services/movies.service';
import { SearchComponent } from './search.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

const moviesServiceStub = {
  query$: new BehaviorSubject<string | null>(null),
};

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [TranslateModule.forRoot(), RouterTestingModule, ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: MoviesService, useValue: moviesServiceStub }],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate', fakeAsync(async () => {
    const navigateSpy = spyOn(router, 'navigate');
    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    input.value = 'value';
    input.dispatchEvent(new Event('input'));
    tick(1500);
    expect(navigateSpy).toHaveBeenCalledTimes(1);
    input.value = '';
    input.dispatchEvent(new Event('input'));
    tick(1500);
    expect(navigateSpy).toHaveBeenCalledTimes(2);
  }));
});
