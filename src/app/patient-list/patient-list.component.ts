import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients: Patient[] = [];

  constructor() { }

  ngOnInit(): void {

    this.patients = [{
      "patientId": 1,
      "firstName": "Grace",
      "lastName": "Murphy",
      "gender": "Female",
      "dateOfBirth": new Date("2001-11-22"),
      "mobileNumber": "0863221001",
      "emailAddress": "gracemurphy@gmail.com",
      "address": "Bushfield, Loughrea, Co.Galway",
      "medicalHistory": "Diagnosed with Type 1 Diabetes in 2017"

    },

    {
      "patientId": 2,
      "firstName": "Jack",
      "lastName": "Walsh",
      "gender": "Male",
      "dateOfBirth": new Date("2005-12-25"),
      "mobileNumber": "0874552301",
      "emailAddress": "jwalsh@gmail.com",
      "address": "Greystone House, Ballyclery, Kinvara, Co.Galway",
      "medicalHistory": "Diagnosed with Type 2 Diabetes in 2018"
    }]

  }
}
