import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './products/products.component';
import { ItemComponent } from './item/item.component';
import { BookComponent } from './book/book.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, ProductComponent, ItemComponent, BookComponent], // Include RouterModule instead of RouterOutlet
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first_angular';
}
