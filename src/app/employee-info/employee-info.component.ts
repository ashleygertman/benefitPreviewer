import { Component, OnInit, EventEmitter } from '@angular/core';

const DEPENDENT_COST = 500;
const EMPLOYEE_COST = 1000;
const DISCOUNT_PERCENT = .1;

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})

export class EmployeeInfoComponent implements OnInit {
  private showTable: boolean = false;
  private showWarning: boolean = false;

  private people : {
      status: string,
      name: string,
      cost: number,
      discount: number
    }[] = [];

  constructor(){}

  ngOnInit(){}

  private addDependent(dependentName) {
    //Make sure that a name was entered
    if(dependentName.length == 0)
      return;

    //TODO: Make sure that someone doesn't have too many people and cost doesn't exceed pay
    this.addPerson(dependentName, 'Dependent', DEPENDENT_COST);
  }

  private addPerson(name, status, cost) {
    const discountPercent = this.calculateDiscountPercent(name);
    const costWithDiscount = (cost - (cost * discountPercent));
    this.people.push({status: status, name: name, cost: costWithDiscount, discount: discountPercent});
  }

  private removeDependent(index) {
    this.people.splice(index, 1);
  }

  private calculateDiscountPercent(name: string) {
    //ignore case
    if (name.toUpperCase().charAt(0) === 'A'){
      return DISCOUNT_PERCENT;
    }
    return 0;
  }

  private submitEmployeeInfo(employeeName){
    //check that you entered an employee
    if(employeeName.length === 0)
      return;

    // get the employee if they are already in the list
    let employeeIndex = this.people.findIndex((x) => {
      return x.status === 'Employee';
    })

    if(employeeIndex == -1) {
      this.addPerson(employeeName, 'Employee', EMPLOYEE_COST);
      this.showTable = true;
      this.showWarning = false;
    }
    else {
      let currentEmployee = this.people[employeeIndex];
      // if same name then probably accident not a real error
      if(employeeName !== currentEmployee.name) {
         this.showWarning = true;
      }
      else {
        this.showWarning = false;
      }
    }
  }

  private clear(){
    this.showTable = false;
    this.showWarning = false;
    this.people = [];
  }
}
