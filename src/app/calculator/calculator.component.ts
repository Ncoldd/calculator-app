import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true, 
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  input: string = '';
  result: string = '';

  append(value: string): void {
    this.input += value;
  }

  calculate(): void {
    try {
      this.result = eval(this.input);
    } catch {
      this.result = 'Error';
    }
  }

  clear(): void {
    this.input = '';
    this.result = '';
  }
}
