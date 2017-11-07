import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

//Other Imports

import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

// AngularFire Imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

// Component imports
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
// Service Imports
import { AddProjectComponent } from './components/addproject/addproject.component';
import { AddresourceComponent } from './components/addresource/addresource.component';
import { ResourceComponent } from './components/resource/resource.component';
import { ResourceListComponent } from './components/resource-list/resource-list.component';

import { QuestionService } from './services/question.service';
import { ResourceTableComponent } from './components/resource-table/resource-table.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'addproject', component: AddProjectComponent },
  { path: 'addresource', component: AddresourceComponent }
];

export const firebaseConfig = {
  apiKey: 'AIzaSyDNXfKXx31YDhCccA-J2RTraYzguqFn75c',
  authDomain: 'project-manager-40e5a.firebaseapp.com',
  databaseURL: 'https://project-manager-40e5a.firebaseio.com',
  storageBucket: 'project-manager-40e5a.appspot.com',
  messagingSenderId: '62789613737'
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent,
    AddProjectComponent,
    AddresourceComponent,
    ResourceComponent,
    ResourceListComponent,
    ResourceTableComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    MultiselectDropdownModule
  ],
  providers: [AngularFireAuth, AngularFireDatabase, QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule {}
