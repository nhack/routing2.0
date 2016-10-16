/**
 * Created by marius on 15/10/2016.
 */
import {Routes} from "@angular/router";
import {CustomersComponent} from "./components/customers/customers.component";
import {CustomerComponent} from "./components/customer/customer.component";

export const ROUTES: Routes = [
  {path: '', component: CustomersComponent},
  {path: ':id', component: CustomerComponent}
];
