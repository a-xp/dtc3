import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {HomeComponent} from './home/home/home.component';
import {ProjectsComponent} from './projects/projects/projects.component';
import {UsersComponent} from './users/users/users.component';
import {SettingsComponent} from './settings/settings/settings.component';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import {ProfileComponent} from './profile/profile/profile.component';
import {TaskCreateComponent} from './tasks/task-create/task-create.component';
import {TaskDeployComponent} from './tasks/task-deploy/task-deploy.component';
import {TaskExecuteComponent} from './tasks/task-execute/task-execute.component';
import {TaskProvisionComponent} from './tasks/task-provision/task-provision.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ProjectsComponent,
    UsersComponent,
    SettingsComponent,
    ProfileComponent,
    TaskCreateComponent,
    TaskDeployComponent,
    TaskExecuteComponent,
    TaskProvisionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
