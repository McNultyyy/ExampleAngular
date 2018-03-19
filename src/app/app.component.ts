import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class='container-fluid'>
      <div class='row'>
        <div class='col-sm-3'>
          <nav-menu></nav-menu>
        </div>
        <div class='col-sm-9 body-content'>
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styles: [`
    @media (max-width: 767px) {
      /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */
      .body-content {
        padding-top: 50px;
      }
    }`
  ]
})
export class AppComponent {
}
