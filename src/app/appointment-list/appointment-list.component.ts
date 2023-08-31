import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

appointments: Appointment[] = [];

constructor(private appointment_Service: AppointmentService,
  private router: Router) { }

  ngOnInit(): void {
  this.getAppointments(); 
  
  }

  private getAppointments(){

  this.appointment_Service.get_AppointmentsList().subscribe(data => {

  this.appointments = data;

  });
    
  }

  appointmentDetails(appointmentId: number){

  this.router.navigate(['appointment-details', appointmentId]);

  }

  update_Appointment(appointmentId: number){

  this.router.navigate(['update-appointment', appointmentId]);

  }

  delete_Appointment(appointmentId: number){

  this.appointment_Service.delete_Appointment(appointmentId).subscribe(data => {
  console.log(data);
  this.getAppointments();


  })

  }

  // get_AppointmentsList(): Observable<Appointment[]> {

  //   return this.http_Client.get<Appointment[]>(`${this.base_URL}`);
  
  //   }
  
  //   create_Appointment(appointment: Appointment): Observable<Object>{
  
  //   return this.http_Client.post(`${this.base_URL_1}`, appointment);
  //   }
  
  //   get_AppointmentById(appointmentId: number): Observable<Appointment>{
  
  //   return this.http_Client.get<Appointment>(`${this.base_URL}/${appointmentId}`);
  
  //   }
  
  //   update_Appointment(appointmentId: number, appointment: Appointment): Observable<Object>{
  
  //   return this.http_Client.put(`${this.base_URL}/${appointmentId}`, appointment);
  
  //   }
  
  //   delete_Appointment(appointmentId: number): Observable<Object>{
  
  //   return this.http_Client.delete(`${this.base_URL}/${appointmentId}`);
  
  //   }
  


}
