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

  values: { value1: number; value2: number; value3: number; value4: number; value5: number; value6: number; value7: number } = {
    value1: 0,
    value2: 0,
    value3: 0,
    value4: 0,
    value5: 0,
    value6: 0,
    value7: 0
  };
  result: number = 0;

  calculate(): number {

    return this.result;
  }
}

