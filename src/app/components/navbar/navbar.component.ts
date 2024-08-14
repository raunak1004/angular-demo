import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  imports: [
    ButtonModule, CommonModule
  ],
})
export class AppComponent {
  isMenuVisible: boolean = false;

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
