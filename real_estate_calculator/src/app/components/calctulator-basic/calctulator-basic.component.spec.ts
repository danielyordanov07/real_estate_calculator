import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalctulatorBasicComponent } from './calctulator-basic.component';

describe('CalctulatorBasicComponent', () => {
  let component: CalctulatorBasicComponent;
  let fixture: ComponentFixture<CalctulatorBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalctulatorBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalctulatorBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
