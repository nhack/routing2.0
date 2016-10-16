import {Component, Inject} from '@angular/core';
import {Customer} from "../../domain/customer";
import {CUSTOMER_SERVICE, CustomerService} from "../../services/customer.service";

@Component({
  selector: 'customers',
  templateUrl: 'customers.component.html',
  styleUrls: ['customers.component.css'],
})
export class CustomersComponent {

  private customers: Customer[];

  constructor(@Inject(CUSTOMER_SERVICE) private customerService: CustomerService) {
    this.customers = this.customerService.getCustomers();
  }
}
