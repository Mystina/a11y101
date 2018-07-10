import { Component, Input, ViewEncapsulation } from '@angular/core';
import { PageLayoutNavigation } from './page-layout.component.interface';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'page-layout',
    templateUrl: './page-layout.component.html',
    styleUrls: ['./page-layout.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PageLayoutComponent {
    public toggleNav = false;

    flip() {
        this.toggleNav = !this.toggleNav;
    };

    // tslint:disable-next-line:member-ordering
    pageRoutes: PageLayoutNavigation[] = [
        { name: 'Accessibility Checklist', path: '/checklist', hasChildren: false  },
        {
            name: 'Accessibility Examples', path: '/examples', hasChildren: true,
            isDropdownVisible: false, children: [
            { name: 'Dynamic Content', path: '/examples/dynamic-content' },
            { name: 'Placeholder', path: '/examples/placeholder' },
            { name: 'Skip to Main Content', path: '/examples/skip-to-main-content' },
            { name: 'Tab-able Dropdown', path: '/examples/tab-able-dropdown' }
        ] },
        { name: 'Accessibility Resources', path: '/resources', hasChildren: false }
    ];
    showNavigationChildren(pageRoute) {
        pageRoute.isDropdownVisible = !pageRoute.isDropdownVisible;
    }
}
