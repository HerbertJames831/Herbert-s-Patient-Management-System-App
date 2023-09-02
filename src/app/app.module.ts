import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { FormsModule } from '@angular/forms';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { UpdateAppointmentComponent } from './update-appointment/update-appointment.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { CurrentDateandtimeComponent } from './current-dateandtime/current-dateandtime.component';

@NgModule({
    declarations: [
        AppComponent,
        PatientListComponent,
        CreatePatientComponent,
        UpdatePatientComponent,
        PatientDetailsComponent,
        UpdateAppointmentComponent,
        AppointmentListComponent,
        AppointmentDetailsComponent,
        CreateAppointmentComponent,
        CurrentDateandtimeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        //CommonModule is benefical in Angular because all the fundamental Angular directives and pipes are exported
        FormsModule,
        CommonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
