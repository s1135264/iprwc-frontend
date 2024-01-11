import {Component, Input, signal} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-shop-item',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './shop-item.component.html',
  styleUrl: './shop-item.component.css'
})
export class ShopItemComponent {
  @Input()
  product : any;
// {
//   "productID": 1,
//   "productName": "iPhone3000",
//   "productPrice": "1000",
//   "productImageURL": "https://apple.com/iphone",
//   "productDescription": "A normal phone for a huge price!",
//   "productQuantity": "10"
// }




  previewProduct(){
    console.log("Open popup for product: " + this.product.productName);
    //todo: open open popup to display product bigger.
  }

  addToCart(){
    console.log("Add product to cart: " + this.product.productName);
    //todo: add to cart
    //todo: open cart at the side of the window
  }


}
