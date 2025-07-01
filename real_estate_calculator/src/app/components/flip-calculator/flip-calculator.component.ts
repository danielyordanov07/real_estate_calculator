import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'flip-calculator',
  standalone: true,
  imports: [CommonModule, MatInputModule],
  templateUrl: './flip-calculator.component.html',
  styleUrl: './flip-calculator.component.css'
})
export class FlipCalculatorComponent {

}
