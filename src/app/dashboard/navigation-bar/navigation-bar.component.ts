import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {
  loginIcon = "logout";
  shopRoute = "/shop/";
  searchBar  = "";
  router : Router;

  constructor(router : Router) {
    this.router = router;
  }

  onSearchButtonClick(){
    //wait for 0.5 seconds before navigating to the shop page
    setTimeout(() => {
      this.navigateTo(this.shopRoute);
    }, 5);
  }

  navigateTo(whereTo : string){
    this.router.navigate([whereTo],
      {queryParams: {filter: this.searchBar}}
      );
  }


}
