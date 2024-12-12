import { Component, input} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class MainCalculatorComponent {

  values: { value1: number; value2: number; value3: number; value4: number; } = {
    value1: 0,
    value2: 0,
    value3: 0,
    value4: 0,
  };

  results: { result1: number; result2: number; result3: number } = {
    result1: this.values.value1 * 1.07,
    result2: this.values.value1 * 1.07 + this.values.value2,
    result3: 0
  };

}

