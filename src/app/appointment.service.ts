import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

private base_URL = "http://localhost:8080/api/pms/appointments";
private base_URL_1 = "http://localhost:8080/api/pms/apppointment";

  constructor(private http_Client: HttpClient) { }

  get_AppointmentsList(): Observable<Appointment[]> {

  return this.http_Client.get<Appointment[]>(`${this.base_URL}`);

  }

  create_Appointment(appointment: Appointment): Observable<Object>{

  return this.http_Client.post(`${this.base_URL_1}`, appointment);
  }

  get_AppointmentById(appointmentId: number): Observable<Appointment>{

  return this.http_Client.get<Appointment>(`${this.base_URL}/${appointmentId}`);

  }

  update_Appointment(appointmentId: number, appointment: Appointment): Observable<Object>{

  return this.http_Client.put(`${this.base_URL}/${appointmentId}`, appointment);

  }

  delete_Appointment(appointmentId: number): Observable<Object>{

  return this.http_Client.delete(`${this.base_URL}/${appointmentId}`);

  }



}
