import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <h1>Angular 18 Assignment</h1>
    <nav>
      <a routerLink="/home">Home</a> |
      <a routerLink="/api-data">API Data</a> |
      <a routerLink="/form">Form Page</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
