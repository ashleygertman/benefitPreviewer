import { Component, OnInit, Input } from '@angular/core';

const NUM_OF_PAYCHECKS = 26;
const PAYCHECK_AMOUNT = 2000;

@Component({
  selector: 'app-detailed-cost-table',
  templateUrl: './detailed-cost-table.component.html',
  styleUrls: ['./detailed-cost-table.component.css']
})

export class DetailedCostTableComponent implements OnInit{

  @Input() private people : {
    status: string,
    name: string,
    cost: number,
    discount: number
  }[];

  private showPaycheckCost: boolean = false;
  private showAnnualCost: boolean = true;

  private formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })

  constructor() { }

  ngOnInit() {}

  private calculateTotalBenefitCost(){
    let cost = 0;

    this.people.forEach((person) => {
      cost += person.cost;
    })
    return cost;
  }

  private calculateDiscountInDollars(person){
    return (person.discount*person.cost)/(1-person.discount);
  }

  private calculateBenefitCostPerPaycheck(cost: number){
    return (cost/NUM_OF_PAYCHECKS);
  }

  private calculateAnnualSalaryAfterBenefitCost(){
    let annualSalary = PAYCHECK_AMOUNT * NUM_OF_PAYCHECKS;
    return annualSalary - this.calculateTotalBenefitCost();
  }

  private calculatePaycheckAfterBenefitCost(){
    let paycheck = this.calculateBenefitCostPerPaycheck(this.calculateTotalBenefitCost());
    return PAYCHECK_AMOUNT - paycheck;
  }

  private buildPaycheckDifferenceMessage(){
    let expectedValue = this.calculateTotalBenefitCost();
    let paycheckValue = this.calculateBenefitCostPerPaycheck(expectedValue);
    let roundedPaycheckValue =  paycheckValue.toFixed(2);

    let calculatedValue = (Number(roundedPaycheckValue) * Number(NUM_OF_PAYCHECKS));
    let diff = expectedValue - calculatedValue;

    if(diff < 0) {
      return "*NOTE: The employee will slightly overpay and should be paid an additional "+this.formatter.format(Math.abs(diff))+" a year."
    }
    else if(diff > 0) {
      return "*NOTE: The employee will be slightly overpaid and should be charged an additional "+this.formatter.format(Math.abs(diff))+" once a year.";
    }
  }
}
