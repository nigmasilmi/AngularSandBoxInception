import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeCommanderAppComponent } from './coffee-commander-app.component';

describe('CoffeeCommanderAppComponent', () => {
  let component: CoffeeCommanderAppComponent;
  let fixture: ComponentFixture<CoffeeCommanderAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeCommanderAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeCommanderAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
