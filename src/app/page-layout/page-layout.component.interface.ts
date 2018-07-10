export interface PageLayoutNavigation {
    name: string;
    path: string;
    hasChildren?: boolean;
    isDropdownVisible?: boolean;
    isDisabled?: boolean;
    children?: PageLayoutNavigation[];
}
