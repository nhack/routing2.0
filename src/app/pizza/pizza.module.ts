import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {PizzaAppComponent} from './pizzaApp.component';
import {PizzaFileService} from "./services/pizzaFile.service";
import {PIZZA_SERVICE} from "./services/pizza.service";
import {PizzasComponent} from "./components/pizzas/pizzas.component";
import {PizzaComponent} from "./components/pizza/pizza.component";
import {ROUTES} from "./pizza.routes";

@NgModule({
  declarations: [
    PizzaAppComponent,
    PizzasComponent,
    PizzaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    {provide: PIZZA_SERVICE, useClass: PizzaFileService}
  ],
  bootstrap: [PizzaAppComponent]
})
export class PizzaModule {
}
