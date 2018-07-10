import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ChecklistsComponent } from 'app/homepage/checklists/checklists.component';
import { ChecklistDesignComponent } from 'app/homepage/checklists/checklist-design/checklist-design.component';
import { ChecklistEngineersComponent } from 'app/homepage/checklists/checklist-engineers/checklist-engineers.component';
import { ChecklistDMComponent } from 'app/homepage/checklists/checklist-DM/checklist-DM.component';
import { ChecklistQAComponent } from 'app/homepage/checklists/checklist-qa/checklist-qa.component';
import { ChecklistPOComponent } from 'app/homepage/checklists/checklist-pos/checklist-pos.component';
import { ChecklistPubComponent } from 'app/homepage/checklists/checklist-pub/checklist-pub.component';
import { ResourcesComponent } from 'app/homepage/resources/resources.component';
import { ExamplesComponent } from 'app/homepage/examples/examples.component';
import { DynamicContentComponent } from 'app/homepage/examples/dynamic-content/dynamic-content.component';
import { PlaceholderComponent } from 'app/homepage/examples/placeholder/placeholder.component';
import { SkipToMainContentComponent } from 'app/homepage/examples/skip-to-main-content/skip-to-main-content.component';
import { ResourcesPageComponent } from 'app/homepage/resources/resources-page/resources-page.component';
import { TabAbleDropdownComponent } from 'app/homepage/examples/tab-able-dropdown/tab-able-dropdown.component';

const APP_ROUTES: Routes = [
  {
    path: '', component: ChecklistsComponent, children: [
      { path: '', redirectTo: 'design', pathMatch: 'full' },
      { path: 'design', component: ChecklistDesignComponent },
      { path: 'engineers', component: ChecklistEngineersComponent },
      { path: 'qas', component: ChecklistQAComponent },
      { path: 'editors', component: ChecklistDMComponent },
      { path: 'pos', component: ChecklistPOComponent },
      { path: 'pub', component: ChecklistPubComponent }
    ]
  },
  { path: 'checklist', component: ChecklistsComponent, children: [
    { path: '', redirectTo: 'design', pathMatch: 'full'},
    { path: 'design', component: ChecklistDesignComponent },
    { path: 'engineers', component: ChecklistEngineersComponent },
    { path: 'qas', component: ChecklistQAComponent },
    { path: 'editors', component: ChecklistDMComponent },
    { path: 'pos', component: ChecklistPOComponent },
    { path: 'pub', component: ChecklistPubComponent }
  ]},
  { path: 'examples', component: ExamplesComponent, children: [
    { path: '', redirectTo: 'dynamic-content', pathMatch: 'full'},
    { path: 'dynamic-content', component: DynamicContentComponent },
    { path: 'placeholder', component: PlaceholderComponent },
    { path: 'skip-to-main-content', component: SkipToMainContentComponent },
    { path: 'tab-able-dropdown', component: TabAbleDropdownComponent }
  ]},
  { path: 'resources', component: ResourcesComponent, children: [
    { path: '', redirectTo: 'resources-page', pathMatch: 'full' },
    { path: 'resources-page', component: ResourcesPageComponent }
  ]}
];

export const routes = RouterModule.forRoot(
  APP_ROUTES,
  {
    useHash: true
  });
