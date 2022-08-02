import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-calcu',
  templateUrl: './calcu.component.html',
  styleUrls: ['./calcu.component.css']
})
export class CalcuComponent implements OnInit {
  arr = ''; 
  result = 0;
  constructor(public calculatorService:CalculatorService) { }

  ngOnInit(): void {
    this.calculatorService.setOnChangeResult((value) => {
      this.result = value;
    });
  }
  
  display(key : string) {
    let value;
  }

  clear(){
    this.calculatorService.hienThi = ""
  }

  calculate(input: any){
    let data = parseFloat(input);
    if (isNaN(data)) {
      if (input == '=') {
        let result = this.calculatorService.calculate(
          this.calculatorService.currentResult,
          this.calculatorService.currentInput,
          this.calculatorService.currentOperator
        );
        this.calculatorService.currentInput = 0;
        this.calculatorService.currentOperator = '';

        this.calculatorService.setResult(result);
      } else {
        this.calculatorService.currentOperator = input;
      }
    } else {
      if (this.calculatorService.currentOperator != '') {
        this.calculatorService.currentInput = parseFloat(
          this.calculatorService.currentInput.toString() + data.toString()
        );
      } else {
        // this.CaculatorService.currentInput = data;
        this.calculatorService.setResult(
          parseFloat(`${this.calculatorService.currentResult}${data}`)
        );
      }
    }
  }
  
}
