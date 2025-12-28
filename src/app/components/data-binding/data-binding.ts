import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

/**
 * => Data Binding : Way of passing data between the template(html page) to the class(typescript file) file.
 * 
 *      One way data binding => 
 *                           1. Interpolation    = {{}}
 *                           2. Property Binding = [proptery]=""
 *                           3. Event Binding    = (click) = "getData()"
 * 
 *      Two way data binding =>
 *                           1. NgModel
 */

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  productName = "Denim Jacket";
  productPrice = "₹1599";
  productSize = "L";

  nameMinChar = 3;
  priceMaxLength = 5;

  inputType = 'text';

  // inputType = 'checkbox';

  // inputType = 'radio';

  constructor() { }

  getGreetMessage() {
    alert("Hello from Angular 21");
  }

  changeProductName() {
    this.productName = "Winter Jacket"
  }

  onCityChange() {
    alert("City changed.");
  }
}
