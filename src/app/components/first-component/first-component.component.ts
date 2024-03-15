import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  name: string = 'Luan';
  age: number = 30;
  job: string = 'Programador';
  hobbies = ["corres", "jogar", "estudar"];

  size = 40;
  font = 'Arial'
  color = '#984953'
}
