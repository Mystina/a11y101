import { Component, OnInit } from '@angular/core';
import * as Prism from 'prismjs/prism';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'a11y-placeholder',
    templateUrl: './placeholder.component.html',
    styleUrls: ['./placeholder.component.scss']
})
export class PlaceholderComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        Prism.highlightAll(false);
    }

}
