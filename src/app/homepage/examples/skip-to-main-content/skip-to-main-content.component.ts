import { Component, OnInit } from '@angular/core';
import * as Prism from 'prismjs/prism';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'a11y-skip-to-main-content',
    templateUrl: './skip-to-main-content.component.html',
    styleUrls: ['./skip-to-main-content.component.scss']
})
export class SkipToMainContentComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        Prism.highlightAll(false);
    }

}
