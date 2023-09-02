import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  //Declaring and Initializing Variables
  private base_URL = "http://localhost:8080/api/pms/appointments";
  private base_URL_1 = "http://localhost:8080/api/pms/apppointment";

  //Injecting HttpClient
  constructor(private http_Client: HttpClient) { }
  //Fetching all the appointments from the database to display in the table that is presented to the user once when you click the Appointment List route on the Navbar
  get_AppointmentsList(): Observable<Appointment[]> {

    return this.http_Client.get<Appointment[]>(`${this.base_URL}`);

  }

  //Creating an Appointment using the Create Patient's Appointment form
  create_Appointment(appointment: Appointment): Observable<Object> {

    return this.http_Client.post(`${this.base_URL_1}`, appointment);
  }
  //Getting the appointment's id and automatically populating the appointment's details from the database in the Update Patient's Appointment Form 
  get_AppointmentById(appointmentId: number): Observable<Appointment> {

    return this.http_Client.get<Appointment>(`${this.base_URL}/${appointmentId}`);

  }
  //Updating an existing appointment in the table and database
  update_Appointment(appointmentId: number, appointment: Appointment): Observable<Object> {

    return this.http_Client.put(`${this.base_URL}/${appointmentId}`, appointment);

  }
  //Deleting an appointment from the table and database
  delete_Appointment(appointmentId: number): Observable<Object> {

    return this.http_Client.delete(`${this.base_URL}/${appointmentId}`);

  }

}
