import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  isParaVisible = true;

  monthStartsName = signal("Dec");

  cityNames = ["Bangalore", "Delhi", "Noida", "Pune", "Mumbai"];

  playerLists = [
    { name: "Virat Kohli", age: 38, phoneNumber: "887898999", isActive: true },
    { name: "Sachin", age: 49, phoneNumber: "022-435333", isActive: false },
    { name: "Rohit Sharma", age: 39, phoneNumber: "022-55444", isActive: true },
    { name: "Rahul Dravid", age: 45, phoneNumber: "022-435333", isActive: false },
    { name: "Jasprit Bumrah", age: 33, phoneNumber: "022-43333", isActive: true }
  ]

  onShowPara() {
    this.isParaVisible = true;
  }

  onHidePara() {
    this.isParaVisible = false;
  }
}
