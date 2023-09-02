import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
    providedIn: 'root'
})
export class PatientService {

    //Declaring and Initializing Variables
    private base_URL = "http://localhost:8080/api/pms/patients";
    private base_URL_1 = "http://localhost:8080/api/pms/patient";

    //Injecting HttpClient
    constructor(private httpClient: HttpClient) { }
    //Fetching all the patients from the database to display in the table that is presented to the user once when you click the Patient List route on the Navbar
    getPatientsList(): Observable<Patient[]> {

        return this.httpClient.get<Patient[]>(`${this.base_URL}`);

    }
    //Creating a patient using the Create Patient form
    createPatient(patient: Patient): Observable<Object> {
        return this.httpClient.post(`${this.base_URL_1}`, patient);


    }
    //Getting the patient's id and automatically populating the patient's details from the database in the Update Patient Form 
    getPatientById(patientId: number): Observable<Patient> {

        return this.httpClient.get<Patient>(`${this.base_URL}/${patientId}`);

    }
    //Updating an existing patient object in the database and table
    updatePatient(patientId: number, patient: Patient): Observable<Object> {

        return this.httpClient.put(`${this.base_URL}/${patientId}`, patient);

    }
    //Deleting a patient from the table and database
    deletePatient(patientId: number): Observable<Object> {

        return this.httpClient.delete(`${this.base_URL}/${patientId}`);

    }

}
