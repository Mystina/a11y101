import { Component, OnInit } from '@angular/core';
import * as Prism from 'prismjs/prism';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'a11y-tab-able-dropdown',
    templateUrl: './tab-able-dropdown.component.html',
    styleUrls: ['./tab-able-dropdown.component.scss']
})
export class TabAbleDropdownComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        Prism.highlightAll(false);
    }

}
