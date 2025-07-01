import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipCalculatorComponent } from './flip-calculator.component';

describe('FlipCalculatorComponent', () => {
  let component: FlipCalculatorComponent;
  let fixture: ComponentFixture<FlipCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlipCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
