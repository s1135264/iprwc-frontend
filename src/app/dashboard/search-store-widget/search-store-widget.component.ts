import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-search-store-widget',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './search-store-widget.component.html',
  styleUrl: './search-store-widget.component.css'
})
export class SearchStoreWidgetComponent {

}
