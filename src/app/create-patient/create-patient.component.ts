import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

patient: Patient = new Patient();

constructor() {}


ngOnInit(): void {
  
}

onSubmit(){

  console.log(this.patient);


}



}
