import {Route} from '@angular/router';
import {HomeComponent} from './home/home/home.component';
import {ProjectsComponent} from './projects/projects/projects.component';
import {UsersComponent} from './users/users/users.component';
import {SettingsComponent} from './settings/settings/settings.component';
import {ProfileComponent} from './profile/profile/profile.component';
import {TaskCreateComponent} from './tasks/task-create/task-create.component';
import {TaskDeployComponent} from './tasks/task-deploy/task-deploy.component';
import {TaskExecuteComponent} from './tasks/task-execute/task-execute.component';
import {TaskProvisionComponent} from './tasks/task-provision/task-provision.component';

export let routes: Route[] = [
  { path: 'home', component: HomeComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'users', component: UsersComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'tasks', children: [
      { path: 'create', component: TaskCreateComponent},
      { path: 'deploy', component: TaskDeployComponent},
      { path: 'execute', component: TaskExecuteComponent},
      { path: 'provision', component: TaskProvisionComponent}
    ]},
  { path: '', pathMatch: 'full', redirectTo: '/home' }
];
