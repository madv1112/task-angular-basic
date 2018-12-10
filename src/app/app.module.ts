import { TaskmanagerFrontendPage } from './../../e2e/app.po';
import { Task } from './tasks/shared/task.model';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TaskComponent } from "./tasks/tasks.component";
import { TaskDetailComponent } from "./tasks/task-detail/task-detail.component";
import { TaskService } from "./tasks/shared/task.service";

const ROUTES = RouterModule.forRoot([
  {path: 'dashboard', component: DashboardComponent},
  {path: 'tasks', component: TaskComponent},
  {path: 'tasks/:id', component: TaskDetailComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
])

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    TaskComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    ROUTES
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
