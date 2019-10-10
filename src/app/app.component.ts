import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <app-user-list></app-user-list>
  `,
  styles: []
})
export class AppComponent {
  title = 'component-interaction';
}
