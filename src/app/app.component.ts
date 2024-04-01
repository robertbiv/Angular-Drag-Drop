import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarModule} from "./navbar/navbar.component";
import {TowerOfHanoiComponent} from "./tower-of-hanoi/tower-of-hanoi.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarModule, TowerOfHanoiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Drag Drop';
}
