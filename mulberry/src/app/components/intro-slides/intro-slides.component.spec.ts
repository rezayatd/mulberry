import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroSlidesComponent } from './intro-slides.component';

describe('IntroSlidesComponent', () => {
  let component: IntroSlidesComponent;
  let fixture: ComponentFixture<IntroSlidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroSlidesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
