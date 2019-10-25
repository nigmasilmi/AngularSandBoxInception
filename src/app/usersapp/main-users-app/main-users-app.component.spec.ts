import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainUsersAppComponent } from './main-users-app.component';

describe('MainUsersAppComponent', () => {
  let component: MainUsersAppComponent;
  let fixture: ComponentFixture<MainUsersAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainUsersAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainUsersAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
