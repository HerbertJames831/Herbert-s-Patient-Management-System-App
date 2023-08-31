import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  patientId: number = 0;

  patient: Patient = new Patient;

  constructor(private route: ActivatedRoute, private patientService: PatientService ) {}


  ngOnInit(): void {
  this.patientId = this.route.snapshot.params[`patientId`];

  this.patient = new Patient();

  this.patientService.getPatientById(this.patientId).subscribe(data => {

  this.patient = data;

  })
    
  }



}
