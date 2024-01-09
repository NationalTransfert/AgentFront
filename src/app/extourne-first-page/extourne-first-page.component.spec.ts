import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtourneFirstPageComponent } from './extourne-first-page.component';

describe('ExtourneFirstPageComponent', () => {
  let component: ExtourneFirstPageComponent;
  let fixture: ComponentFixture<ExtourneFirstPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtourneFirstPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtourneFirstPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
