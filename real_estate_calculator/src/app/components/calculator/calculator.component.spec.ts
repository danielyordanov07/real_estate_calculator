import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainCalculatorComponent } from './calculator.component';

describe('MainCalculatorComponent', () => {
  let component: MainCalculatorComponent;
  let fixture: ComponentFixture<MainCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
