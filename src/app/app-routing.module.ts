import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientListComponent } from './patient-list/patient-list.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { UpdateAppointmentComponent } from './update-appointment/update-appointment.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';

//Defining my routes for the Angular App
const routes: Routes = [

  { path: 'patients', component: PatientListComponent },
  { path: 'create-patient', component: CreatePatientComponent },
  { path: '', redirectTo: 'patients', pathMatch: 'full' },
  { path: 'update-patient/:patientId', component: UpdatePatientComponent },
  { path: 'patient-details/:patientId', component: PatientDetailsComponent },
  { path: 'appointments', component: AppointmentListComponent },
  { path: 'create-appointment', component: CreateAppointmentComponent },
  { path: '', redirectTo: 'appointments', pathMatch: 'full' },
  { path: 'update-appointment/:appointmentId', component: UpdateAppointmentComponent },
  { path: 'appointment-details/:appointmentId', component: AppointmentDetailsComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
