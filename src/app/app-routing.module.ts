import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddCoursCreatorComponent } from "./add-cours-creator/add-cours-creator.component";
import { AddCoursComponent } from "./add-cours/add-cours.component";
import { AddInstractorComponent } from "./add-instractor/add-instractor.component";
import { AdminComponent } from "./admin/admin.component";
import { CcFeedComponent } from "./cc-feed/cc-feed.component";
import { CoursCoursCreatorViewComponent } from "./cours-cours-creator-view/cours-cours-creator-view.component";
import { CoursStudentViewComponent } from "./cours-student-view/cours-student-view.component";
import { FormComponent } from "./form/form.component";
import { InstractorFeedComponent } from "./instractor-feed/instractor-feed.component";
import { LandingRolesComponent } from "./landing-roles/landing-roles.component";
import { ManagCoursesComponent } from "./manag-courses/manag-courses.component";
import { OneCoursComponent } from "./one-cours/one-cours.component";
import { OurCoursComponent } from "./our-cours/our-cours.component";
import { RbkComponent } from "./rbk/rbk.component";
import { ResumeComponent } from "./resume/resume.component";
import { StudentFeedComponent } from "./student-feed/student-feed.component";
import { VisibilityComponent } from "./visibility/visibility.component";

const routes: Routes = [
  { path: "addS", component: AdminComponent },
  { path: "addI", component: AddInstractorComponent },
  { path: "addCC", component: AddCoursCreatorComponent },
  { path: "addC", component: AddCoursComponent },
  { path: "manageC", component: ManagCoursesComponent },
  { path: "oneC", component: OneCoursComponent },
  { path: "", component: RbkComponent },
  { path: "vis", component: VisibilityComponent },
  { path: "student/feed", component: StudentFeedComponent },
  { path: "instractor/feed", component: InstractorFeedComponent },
  { path: "cc/feed", component: CcFeedComponent },
  { path: "form", component: FormComponent },
  { path: "resume", component: ResumeComponent },
  {path:"student/cours",component:CoursStudentViewComponent},
  {path:"ourcours",component:OurCoursComponent},
  {path:"CoursCreator/cours",component:CoursCoursCreatorViewComponent},
  {path:"landing",component:LandingRolesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
