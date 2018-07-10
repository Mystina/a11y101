import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'a11y-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.scss']
})
export class BillboardComponent {

  billboardMessage = {
    title: 'Kaplan Test Prep Accessibility',
    // tslint:disable-next-line:max-line-length
    quote: 'Access to information through technologies such as the web is convenient for some, but for people with disabilities it is increasing what makes educational and employment opportunity possible.'
  };

}