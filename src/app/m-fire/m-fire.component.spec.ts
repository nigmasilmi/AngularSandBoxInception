import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MFireComponent } from './m-fire.component';

describe('MFireComponent', () => {
  let component: MFireComponent;
  let fixture: ComponentFixture<MFireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MFireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MFireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
