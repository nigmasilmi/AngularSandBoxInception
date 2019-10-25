import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintodoComponent } from './maintodo.component';

describe('MaintodoComponent', () => {
  let component: MaintodoComponent;
  let fixture: ComponentFixture<MaintodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
