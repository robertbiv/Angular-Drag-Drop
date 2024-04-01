import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
}

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, RouterLink, RouterOutlet],
  exports: [NavbarComponent]
})
export class NavbarModule { }
