import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'pizzaApp.component.html',
  styleUrls: ['pizzaApp.component.css']
})
export class PizzaAppComponent {
  title = 'app works!';
}
