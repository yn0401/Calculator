import { CalculatorService } from './../../services/calculator.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() name = '';
  arr = '';
  constructor(private calculatorService : CalculatorService) { }

  ngOnInit(): void {
  }
 
  display(){
    this.calculatorService.hienThi+= this.name
    
  }

  clearScreen(){
    this.calculatorService.clearScreen;
  }
}
