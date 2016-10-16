/**
 * Created by marius on 15/10/2016.
 */
import {NgModule} from '@angular/core';

import {RouterModule} from "@angular/router";
import {ROUTES} from "./customer.routes";
import {CustomersComponent} from "./components/customers/customers.component";
import {CUSTOMER_SERVICE} from "./services/customer.service";
import {CustomerFileService} from "./services/customerFile.service";
import {CommonModule} from "@angular/common";
import {CustomerComponent} from "./components/customer/customer.component";

@NgModule({
  declarations: [
    CustomersComponent,
    CustomerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  providers: [
    {provide: CUSTOMER_SERVICE, useClass: CustomerFileService}
  ]
})
export class CustomerModule {
}
