// Continue from this: https://angular.dev/tutorials/first-app/02-HomeComponent


import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [],
  template: `
    <h1>Hello world!</h1>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}