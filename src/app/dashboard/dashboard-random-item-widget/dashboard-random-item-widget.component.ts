import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-dashboard-random-item-widget',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './dashboard-random-item-widget.component.html',
  styleUrl: './dashboard-random-item-widget.component.css'
})
export class DashboardRandomItemWidgetComponent {

  randomShopItem = 0;
  constructor() {
    //replace this with a call to the backend
    //Get a random item that is in stock
    this.randomShopItem = Math.floor(Math.random() * 1000);
  }
}
