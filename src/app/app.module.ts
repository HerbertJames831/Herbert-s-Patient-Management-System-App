import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';

@NgModule({
declarations: [
AppComponent,
PatientListComponent,
CreatePatientComponent
],
imports: [
BrowserModule,
AppRoutingModule,
HttpClientModule,
CommonModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
