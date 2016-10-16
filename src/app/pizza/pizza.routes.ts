/**
 * Created by marius on 15/10/2016.
 */
import {Routes} from "@angular/router";
import {PizzasComponent} from "./components/pizzas/pizzas.component";
import {PizzaComponent} from "./components/pizza/pizza.component";

export const ROUTES: Routes = [
  {path: '', redirectTo: '/pizzas', pathMatch: 'full'},
  {path: 'pizzas', children: [{path: '', component: PizzasComponent}, {path: ':type', component: PizzaComponent}]},
  {path: 'customers', loadChildren: '../customer/customer.module#CustomerModule'}
];
