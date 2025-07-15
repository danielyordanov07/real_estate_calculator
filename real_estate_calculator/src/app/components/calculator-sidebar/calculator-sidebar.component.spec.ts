import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorSidebarComponent } from './calculator-sidebar.component';

describe('CalculatorSidebarComponent', () => {
  let component: CalculatorSidebarComponent;
  let fixture: ComponentFixture<CalculatorSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
