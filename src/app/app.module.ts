import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// AngularFire Imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

// Component imports
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
// Service Imports
import { ClientService } from './services/client.service';
import { AddtaskComponent } from './components/addtask/addtask.component';
import { AddresourceComponent } from './components/addresource/addresource.component';
import { ResourceComponent } from './components/resource/resource.component';
import { ResourceListComponent } from './components/resource-list/resource-list.component';

import { QuestionService } from './services/question.service';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'client', component: ClientsComponent },
  { path: 'addtask', component: AddtaskComponent },
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
    ClientsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent,
    AddtaskComponent,
    AddresourceComponent,
    ResourceComponent,
    ResourceListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule
  ],
  providers: [AngularFireAuth, AngularFireDatabase, ClientService, QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule {}
