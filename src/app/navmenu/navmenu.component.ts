import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'nav-menu',
  template: `
    <div class='main-nav'>
      <div class='navbar navbar-inverse'>
        <div class='navbar-header'>
          <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
            <span class='sr-only'>Toggle navigation</span>
            <span class='icon-bar'></span>
            <span class='icon-bar'></span>
            <span class='icon-bar'></span>
          </button>
          <a class='navbar-brand' [routerLink]="['/home']">WebApplication</a>
        </div>
        <div class='clearfix'></div>
        <div class='navbar-collapse collapse'>
          <ul class='nav navbar-nav'>
            <li [routerLinkActive]="['link-active']">
              <a [routerLink]="['/home']">
                <span class='glyphicon glyphicon-home'></span> Home
              </a>
            </li>
            <li [routerLinkActive]="['link-active']">
              <a [routerLink]="['/counter']">
                <span class='glyphicon glyphicon-education'></span> Counter
              </a>
            </li>
            <li [routerLinkActive]="['link-active']">
              <a [routerLink]="['/fetch-data']">
                <span class='glyphicon glyphicon-th-list'></span> Fetch data
              </a>
            </li>
            <li [routerLinkActive]="['link-active']">
              <a [routerLink]="['/max-hit-calc']">
                <span class="glyphicon glyphicon-scissors"></span> Max Hit Calc
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

  `,
  styles: [`
    li .glyphicon {
      margin-right: 10px;
    }

    /* Highlighting rules for nav menu items */
    li.link-active a,
    li.link-active a:hover,
    li.link-active a:focus {
      background-color: #4189C7;
      color: white;
    }

    /* Keep the nav menu independent of scrolling and on top of other items */
    .main-nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }

    @media (min-width: 768px) {
      /* On small screens, convert the nav menu to a vertical sidebar */
      .main-nav {
        height: 100%;
        width: calc(25% - 20px);
      }

      .navbar {
        border-radius: 0px;
        border-width: 0px;
        height: 100%;
      }

      .navbar-header {
        float: none;
      }

      .navbar-collapse {
        border-top: 1px solid #444;
        padding: 0px;
      }

      .navbar ul {
        float: none;
      }

      .navbar li {
        float: none;
        font-size: 15px;
        margin: 6px;
      }

      .navbar li a {
        padding: 10px 16px;
        border-radius: 4px;
      }

      .navbar a {
        /* If a menu item's text is too long, truncate it */
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  `]
})
export class NavmenuComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
