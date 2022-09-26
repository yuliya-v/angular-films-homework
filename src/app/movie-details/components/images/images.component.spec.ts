import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { Image } from 'src/app/core/models/image.model';
import { IMAGES_DATA } from 'src/app/data/images.mock';
import { ImagesComponent } from './images.component';

@Component({
  template: '<app-images [data]="images"></app-images>',
})
class TestHostComponent {
  images: Image[] = IMAGES_DATA;
}

describe('ImagesComponent', () => {
  let component: ImagesComponent;
  let fixture: ComponentFixture<ImagesComponent>;
  let hostFixture: ComponentFixture<TestHostComponent>;
  let testHostComponent: TestHostComponent;
  let debugEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImagesComponent, TestHostComponent],
      imports: [TranslateModule.forRoot()],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    hostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = hostFixture.componentInstance;

    fixture = TestBed.createComponent(ImagesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have images data', () => {
    expect(component.data.length).toBe(0);
  });

  it('should set the images data', () => {
    debugEl = hostFixture.debugElement.query(By.css('app-images'));
    hostFixture.detectChanges();
    expect(debugEl.componentInstance.data).toBe(IMAGES_DATA);
  });
});
