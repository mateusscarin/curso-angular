import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animals = [
    { name: 'Maly', type: 'Dog' },
    { name: 'Jhuly', type: 'Dog' },
    { name: 'Tomas', type: 'Horse' },
    { name: 'Duke', type: 'Dog' },
    { name: 'Tom', type: 'Cat' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
