import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSportoyComponent } from './add-sportoy.component';

describe('AddSportoyComponent', () => {
  let component: AddSportoyComponent;
  let fixture: ComponentFixture<AddSportoyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSportoyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSportoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
