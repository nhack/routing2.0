import {OpaqueToken} from '@angular/core';

import {Customer} from '../domain/customer';

export interface CustomerService {
  getCustomers(): Customer[];
  getCustomer(id: string): Customer;
}

export let CUSTOMER_SERVICE = new OpaqueToken('app.customer.service');
