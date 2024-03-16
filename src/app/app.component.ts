import { Component, Directive } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfrenderfComponent } from './components/ifrenderf/ifrenderf.component';
import { EventsComponent } from './components/events/events.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { EmitterComponent } from './components/emitter/emitter.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmitterComponent,RouterOutlet, FirstComponentComponent, DirectivesComponent, IfrenderfComponent, EventsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
}) 
export class AppComponent {
  title = 'angular';
}
