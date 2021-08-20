import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  firstNumber: number;
  secondNumber: number;
  result: string;
  operator: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  caculate() {
    switch (this.operator) {
      case '+':
        this.result = (Number(this.firstNumber) + Number(this.secondNumber)) + '';
        break;
      case '-':
        this.result = (this.firstNumber - this.secondNumber) + '';
        break;
      case '*':
        this.result = (this.firstNumber * this.secondNumber) + '';
        break;
      case '/':
        if (Number(this.secondNumber) === 0) {
          this.result = 'Không thể chia cho 0';
          break;
        } else {
          this.result = (this.firstNumber / this.secondNumber) + '';
          break;
        }
    }
  }
}
