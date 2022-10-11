import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    { name: 'Maly', type: 'Dog', age: 12 },
    { name: 'Jhuly', type: 'Dog', age: 5 },
    { name: 'Tomas', type: 'Horse', age: 7 },
    { name: 'Duke', type: 'Dog', age: 8 },
    { name: 'Tom', type: 'Cat', age: 28 },
  ];

  animal: Animal = {
    name: 'Jorge',
    type: 'dog',
    age: 12,
  };

  animalDetails = '';

  constructor() {}

  ngOnInit(): void {}

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`;
  }
}
