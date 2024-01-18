import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NavigationBarComponent} from "../navigation-bar/navigation-bar.component";
import {DashboardLoginWidgetComponent} from "../dashboard-login-widget/dashboard-login-widget.component";
import {
  DashboardRandomItemWidgetComponent
} from "../dashboard-random-item-widget/dashboard-random-item-widget.component";
import {DashboardCartWidgetComponent} from "../dashboard-cart-widget/dashboard-cart-widget.component";
import {SearchStoreWidgetComponent} from "../search-store-widget/search-store-widget.component";
import {WebsiteService} from "../../websiteService";

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    RouterLink,
    NavigationBarComponent,
    DashboardLoginWidgetComponent,
    DashboardRandomItemWidgetComponent,
    DashboardCartWidgetComponent,
    SearchStoreWidgetComponent
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {

}
