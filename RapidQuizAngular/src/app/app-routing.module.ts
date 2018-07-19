import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from '../app/components/login-component/login-component.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';


const routes: Routes = [ {
  path: 'login',
  component: LoginComponentComponent
},
{
  path: 'admin',
  component: AdminComponent
}
,
{
  path: '',
  component: HomeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
