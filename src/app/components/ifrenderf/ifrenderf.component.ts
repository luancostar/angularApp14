import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifrenderf',
  standalone: true,
  imports: [NgIf],
  templateUrl: './ifrenderf.component.html',
  styleUrl: './ifrenderf.component.css'
})
export class IfrenderfComponent {
  canshow: boolean = true
  name = 'Luan'
}
