import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.routes';

import 'prismjs/prism';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-markup';

import { PageLayoutComponent } from './page-layout/page-layout.component';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BillboardComponent } from './homepage/billboard/billboard.component';
import { StickyNavComponent } from './homepage/sticky-nav/sticky-nav.component';

// checklist components:
import { ChecklistsComponent } from './homepage/checklists';
import { ChecklistDesignComponent } from './homepage/checklists/checklist-design/checklist-design.component';
import { ChecklistEngineersComponent } from './homepage/checklists/checklist-engineers/checklist-engineers.component';
import { ChecklistQAComponent } from './homepage/checklists/checklist-qa/checklist-qa.component';
import { ChecklistDMComponent } from './homepage/checklists/checklist-DM/checklist-DM.component';
import { ChecklistPOComponent } from './homepage/checklists/checklist-pos/checklist-pos.component';
import { ChecklistPubComponent } from './homepage/checklists/checklist-pub/checklist-pub.component';
import { MissionStatementComponent } from './homepage/mission-statement/mission-statement.component';

// examples component:
import { ExamplesComponent } from './homepage/examples/examples.component';
import { DynamicContentComponent } from './homepage/examples/dynamic-content/dynamic-content.component';
import { PlaceholderComponent } from './homepage/examples/placeholder/placeholder.component';
import { SkipToMainContentComponent } from './homepage/examples/skip-to-main-content/skip-to-main-content.component';
import { TabAbleDropdownComponent } from './homepage/examples/tab-able-dropdown/tab-able-dropdown.component';


// resources component:
import { ResourcesComponent } from './homepage/resources/resources.component';
import { ResourcesPageComponent } from './homepage/resources/resources-page/resources-page.component';

@NgModule({
  declarations: [
    PageLayoutComponent,
    AppComponent,
    HomepageComponent,
    BillboardComponent,
    StickyNavComponent,
    ChecklistsComponent,
    ChecklistDesignComponent,
    ChecklistEngineersComponent,
    ChecklistQAComponent,
    ChecklistDMComponent,
    ChecklistPOComponent,
    ChecklistPubComponent,
    ExamplesComponent,
    DynamicContentComponent,
    PlaceholderComponent,
    SkipToMainContentComponent,
    TabAbleDropdownComponent,
    ResourcesComponent,
    ResourcesPageComponent,
    MissionStatementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
