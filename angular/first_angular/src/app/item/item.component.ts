import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from '../products/products.component';

@Component({
  selector: 'product-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  username = "Peter Pan"

  itemname = "Pencils"

  setStatus:string = "No"

  getStockStatus(){
    return this.setStatus
  }

  isSoldOut = false

  //set button to be disabled in t seconds
  constructor(){
    setTimeout(()=>{
      this.isSoldOut = true
    }, 5000)
  }

  //event binding
    onSave(){
      alert('Information Saved!')
    }

    productmsg:string=""
    total_in_stock = 3
    total_added = 0
    outStock = ""
    btn_out_stock = false
    addProduct(){
      if(this.total_in_stock >0)
      {
      this.total_added ++
      this.total_in_stock --
      }
      else{
        this.outStock = 'Item is out of stock'
        this.btn_out_stock = true
      }
    }
}
