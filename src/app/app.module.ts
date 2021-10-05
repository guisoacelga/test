import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing.module';
import { MatCheckboxModule} from "@angular/material/checkbox";
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { CurrentTrainingsComponent } from './training/current-training/current-trainings.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {PastTrainingsComponent} from "./training/past-trainings/past-trainings.component";
import {NewTrainingComponent} from "./training/new-training/new-training.component";
import {TrainingComponent} from "./training/training.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatSidenav, MatSidenavModule} from "@angular/material/sidenav";
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    CurrentTrainingsComponent,
    PastTrainingsComponent,
    NewTrainingComponent,
    WelcomeComponent,
    TrainingComponent,
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgbModule,
    MatCheckboxModule,
    FlexLayoutModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
