import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class MainCalculatorComponent {
  // init array
  values: number[] = [0, 0, 0, 0, 0];
  result: number = 0;

  calculate(number: any[]): number {
    return 0;
  }
}
