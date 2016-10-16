import {Injectable} from '@angular/core';

import {CustomerService} from './customer.service';

import {Customer} from '../domain/customer';
import {CUSTOMERS} from '../domain/data';

@Injectable()
export class CustomerFileService implements CustomerService {
  getCustomers(): Customer[] {
    return CUSTOMERS;
  }

  getCustomer(id: string): Customer {
    return CUSTOMERS.filter(customer => customer.id === id).pop();
  }
}
