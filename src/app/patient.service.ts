import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
providedIn: 'root'
})
export class PatientService {

private base_URL = "http://localhost:8080/api/pms/patients";
private base_URL_1 = "http://localhost:8080/api/pms/patient";

constructor(private httpClient: HttpClient) { }

getPatientsList(): Observable<Patient[]> {

return this.httpClient.get<Patient[]>(`${this.base_URL}`);

}

createPatient(patient: Patient): Observable<Object>{
return this.httpClient.post(`${this.base_URL_1}`, patient);


}

updatePatient(patient: Patient): Observable<Object>{
return this.httpClient.post(`${this.base_URL}`, patient);
    
    
    }

getPatientById(patientId: number): Observable<Patient>{

return this.httpClient.get<Patient>(`${this.base_URL}/${patientId}`);

}




}
