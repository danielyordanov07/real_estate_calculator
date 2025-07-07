import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RentCalculatorComponent } from './rent-calculator.component';

describe('RentCalculatorComponent', () => {
  let component: RentCalculatorComponent;
  let fixture: ComponentFixture<RentCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
