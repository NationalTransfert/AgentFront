import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyServiceComponent } from './money-service.component';

describe('MoneyServiceComponent', () => {
  let component: MoneyServiceComponent;
  let fixture: ComponentFixture<MoneyServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneyServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoneyServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
