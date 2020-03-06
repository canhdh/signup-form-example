import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupUserComponent } from './signup-user/signup-user.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SigninComponent } from './signin/signin.component';
import { UserSettingComponent } from './user-setting/user-setting.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'signup', component: SignupUserComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'setting', component: UserSettingComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
