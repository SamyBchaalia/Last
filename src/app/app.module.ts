import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AdminComponent } from "./admin/admin.component";
import { AddInstractorComponent } from "./add-instractor/add-instractor.component";
import { AddCoursCreatorComponent } from "./add-cours-creator/add-cours-creator.component";
import { AddCoursComponent } from "./add-cours/add-cours.component";
import { ManagCoursesComponent } from "./manag-courses/manag-courses.component";
import { OneCoursComponent } from './one-cours/one-cours.component';
import { RbkComponent } from './rbk/rbk.component';
import { VisibilityComponent } from './visibility/visibility.component';
import { StudentFeedComponent } from './student-feed/student-feed.component';
import { InstractorFeedComponent } from './instractor-feed/instractor-feed.component';
import { CcFeedComponent } from './cc-feed/cc-feed.component';
import { FormComponent } from './form/form.component';
import { ResumeComponent } from './resume/resume.component';
import { CoursStudentViewComponent } from './cours-student-view/cours-student-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms";
import { OurCoursComponent } from './our-cours/our-cours.component';
import { CoursCoursCreatorViewComponent } from './cours-cours-creator-view/cours-cours-creator-view.component';
import { LandingRolesComponent } from './landing-roles/landing-roles.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AddInstractorComponent,
    AddCoursCreatorComponent,
    AddCoursComponent,
    ManagCoursesComponent,
    OneCoursComponent,
    RbkComponent,
    VisibilityComponent,
    StudentFeedComponent,
    InstractorFeedComponent,
    CcFeedComponent,
    FormComponent,
    ResumeComponent,
    CoursStudentViewComponent,
    OurCoursComponent,
    CoursCoursCreatorViewComponent,
    LandingRolesComponent,
  ],
  imports: [BrowserModule,FormsModule, HttpClientModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
