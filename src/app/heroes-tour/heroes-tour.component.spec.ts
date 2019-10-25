import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesTourComponent } from './heroes-tour.component';

describe('HeroesTourComponent', () => {
  let component: HeroesTourComponent;
  let fixture: ComponentFixture<HeroesTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesTourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
