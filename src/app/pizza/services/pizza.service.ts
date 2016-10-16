import {OpaqueToken} from '@angular/core';

import {Pizza} from '../domain/pizza';

export interface PizzaService {
  getPizzas(): Pizza[];
  getPizza(type: string): Pizza;
}

export let PIZZA_SERVICE = new OpaqueToken('app.pizza.service');
