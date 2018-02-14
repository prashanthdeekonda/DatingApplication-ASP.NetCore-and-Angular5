import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertifyService } from './_services/alertify.service';
import { BsDropdownModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { AuthService } from './_services/auth.service';
import { AuthGuard } from './_guards/auth.guard';
import { UserService } from './_services/user.service';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MemberListComponent } from './member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';





@NgModule({
  declarations: [AppComponent, NavComponent, HomeComponent, RegisterComponent,
    MemberListComponent,
    ListsComponent,
    MessagesComponent
],
  imports: [BrowserModule, HttpModule, FormsModule, BsDropdownModule.forRoot(), RouterModule.forRoot(appRoutes)],
  providers: [AuthService, AlertifyService, AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
