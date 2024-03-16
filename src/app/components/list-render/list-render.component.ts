import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {

  animals = [
    {name: "Turca", type: "dog"},
    {name: "Loko", type: "cat"},
    {name: "Passarim", type: "bird"},
    {name: "Sherolaine", type: "turtle"},

  ];

}
