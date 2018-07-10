import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sticky-nav',
  templateUrl: './sticky-nav.component.html',
  styleUrls: ['./sticky-nav.component.scss']
})
export class StickyNavComponent {

  public toggleNav = false;

  flip() {
    this.toggleNav = !this.toggleNav;
  };
}
