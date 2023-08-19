import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseURL = "http://localhost:8080/api/pms/patients";
  constructor(private httpClient: HttpClient) { }

  getPatientsList(): Observable<Patient[]> {

    return this.httpClient.get<Patient[]>(`${this.baseURL}`);


  }
}
