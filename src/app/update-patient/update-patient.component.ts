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

  patientId: number = 0; 
  // patientId!: number;
  patient: Patient = new Patient();

constructor(private patientService: PatientService,
  private route: ActivatedRoute, private router: Router) {}


ngOnInit(): void {
this.patientId = this.route.snapshot.params['patientId'];
this.patientService.getPatientById(this.patientId).subscribe(data => {
this.patient = data;
}, error => console.log(error));
  
}

onSubmit(){

this.patientService.updatePatient(this.patientId, this.patient).subscribe(data => { 
  this.goToPatientList();
}
, error => console.log(error));

}
goToPatientList(){
  this.router.navigate(['/patients']);

}

}
