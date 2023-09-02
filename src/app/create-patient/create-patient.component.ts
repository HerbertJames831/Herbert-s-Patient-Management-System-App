import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {
  //Creating Patient Property
  patient: Patient = new Patient();
  //Injecting PatientService and Router
  constructor(private patientService: PatientService,
    private router: Router) { }

  //In Angular ngOnInit is a lifecycle hook. After the constructor has been called and the component's inputs have been initialized, ngOnInit is called
  //ngOnInit is needed for performing any extra initialization that is significant for the component
  ngOnInit(): void {

  }

  savePatient() {

    this.patientService.createPatient(this.patient).subscribe(data => {
      console.log(data);
      this.goToPatientList();
    },
      error => console.log(error));

  }

  goToPatientList() {
    this.router.navigate(['/patients']);

  }


  onSubmit() {

    console.log(this.patient);
    this.savePatient();


  }

}
