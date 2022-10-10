import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string = 'Mateus Scarin';
  age: number = 18;
  job: string = 'Web Developer';
  hobbies = ['Futebol', 'Pescar', 'Estudar'];
  car = {
    name: 'Fiat Uno',
    year: 2003
  };

  constructor() { }

  ngOnInit(): void {
  }

}
