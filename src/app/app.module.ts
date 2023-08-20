import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientListComponent } from './patient-list/patient-list.component';

@NgModule({
declarations: [
AppComponent,
PatientListComponent
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
