/**
 * Created by marius on 15/10/2016.
 */
import {Component, Inject} from "@angular/core";
import {Pizza} from "../../domain/pizza";
import {PIZZA_SERVICE, PizzaService} from "../../services/pizza.service";

@Component({
  selector: 'pizza',
  templateUrl: 'pizza.component.html',
  styleUrls: ['pizza.component.css'],
})
export class PizzaComponent {

  private pizza: Pizza;

  constructor(@Inject(PIZZA_SERVICE) private pizzaService: PizzaService) {
    this.pizza = pizzaService.getPizza('PEPPERONI');
  }
}
