import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportoysComponent } from './sportoys.component';

describe('SportoysComponent', () => {
  let component: SportoysComponent;
  let fixture: ComponentFixture<SportoysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportoysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportoysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
