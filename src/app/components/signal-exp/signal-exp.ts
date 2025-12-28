import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal-exp',
  imports: [],
  templateUrl: './signal-exp.html',
  styleUrl: './signal-exp.css',
})
export class SignalExp {
  //Normal way of creating the variable - without signal
  techBookName = "Javascript Mastery";
  historyBookName: string = "India After Gandhi";


  //with signal
  bestSellingBook = signal("The God of small things");
  bookPrice = signal<number>(529);


  //computed signal variable
  //A computed signal cannot be updated using set method like the single value of signal and the value of the computed 
  //signle will be computed each and every time when the individual signal get updated.
  bookDetails = computed(() => `The price of the best selling book ${this.bestSellingBook()} is Rs.${this.bookPrice()}`)

  constructor() {
    this.techBookName = "NodeJs: A backend tenchnology";

    //updating a signal variable value using the set method.
    setTimeout(() => {
      this.bestSellingBook.set("Midnight's Children");
      this.bookPrice.set(660);
    }, 5000);

    //Accessing the single value: needs to call the signal value as a function
    console.log("Best selling Book name: ", this.bestSellingBook());
  }
}
