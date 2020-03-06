import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupUserComponent } from './signup-user/signup-user.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ReactiveFormsModule }   from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { UserSettingComponent } from './user-setting/user-setting.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SignupUserComponent,
    HomepageComponent,
    SigninComponent,
    UserSettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
