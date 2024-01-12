import { Component } from '@angular/core';
import {NavigationBarComponent} from "../../dashboard/navigation-bar/navigation-bar.component";
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-seller-page',
  standalone: true,
  imports: [
    NavigationBarComponent
  ],
  templateUrl: './seller-page.component.html',
  styleUrl: './seller-page.component.css'
})
export class SellerPageComponent {


  constructor(private http: HttpClient, private cookie: CookieService) {
  }
}
