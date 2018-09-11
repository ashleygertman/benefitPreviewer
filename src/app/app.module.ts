import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DetailedCostTableComponent } from './components/detailed-cost-table/detailed-cost-table.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
@NgModule({
  declarations: [
    AppComponent,
    DetailedCostTableComponent,
    EmployeeInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
