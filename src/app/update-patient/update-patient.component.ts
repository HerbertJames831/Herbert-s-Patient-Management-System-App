import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {
  patient: Patient = new Patient();

constructor(private patientService: PatientService,
  private router: Router) {}


ngOnInit(): void {
  
}

savePatient(){

this.patientService.updatePatient(this.patient).subscribe(data =>{
console.log(data);
this.goToPatientList();
},
error => console.log(error));

}

goToPatientList(){
  this.router.navigate(['/patients']);

}


onSubmit(){

  console.log(this.patient);
  this.savePatient();


}



}
