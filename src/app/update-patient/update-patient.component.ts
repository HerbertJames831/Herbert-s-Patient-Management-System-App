import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {
  //Declaring and Initializing Variable
  patientId: number = 0;
  //Creating Patient Property
  patient: Patient = new Patient();

  //Injecting PatientService, ActivatedRoute and Router
  constructor(private patientService: PatientService,
    private route: ActivatedRoute, private router: Router) { }

  //In Angular ngOnInit is a lifecycle hook. After the constructor has been called and the component's inputs have been initialized, ngOnInit is called
  //ngOnInit is helpful for performing any extra initialization that is important for the component
  ngOnInit(): void {
    this.patientId = this.route.snapshot.params['patientId'];
    this.patientService.getPatientById(this.patientId).subscribe(data => {
      this.patient = data;
    }, error => console.log(error));

  }

  onSubmit() {

    this.patientService.updatePatient(this.patientId, this.patient).subscribe(data => {
      this.goToPatientList();
    }
      , error => console.log(error));

  }
  goToPatientList() {
    this.router.navigate(['/patients']);

  }

}
