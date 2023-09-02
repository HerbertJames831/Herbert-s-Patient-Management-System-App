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

  //Declaring and Initializing Variable
  patientId: number = 0;
  //Creating Patient Property
  patient: Patient = new Patient;

  //Injecting PatientService and ActivatedRoute
  constructor(private route: ActivatedRoute, private patientService: PatientService) { }

  //In Angular ngOnInit is a lifecycle hook. After the constructor has been called and the component's inputs have been initialized, ngOnInit is called
  //ngOnInit is necessary for performing any extra initialization that is crucial for the component
  ngOnInit(): void {
    this.patientId = this.route.snapshot.params[`patientId`];

    this.patient = new Patient();

    this.patientService.getPatientById(this.patientId).subscribe(data => {

      this.patient = data;

    })

  }

}
