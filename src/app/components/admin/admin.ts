import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  personName: string = "Bob the builder";
  role: string = "Admin";
  age: number = 30;
}
