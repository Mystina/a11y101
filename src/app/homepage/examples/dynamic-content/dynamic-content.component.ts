import { Component, OnInit } from '@angular/core';
import * as Prism from 'prismjs/prism';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'a11y-dynamic-content',
    templateUrl: './dynamic-content.component.html',
    styleUrls: ['./dynamic-content.component.scss']
})
export class DynamicContentComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        Prism.highlightAll(false);
    }

}
