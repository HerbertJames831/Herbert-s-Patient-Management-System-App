import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {
  patientId!: number;
  patient: Patient = new Patient();

constructor(private patientService: PatientService,
  private route: ActivatedRoute ) {}


ngOnInit(): void {
this.patientId = this.route.snapshot.params['patientId'];
this.patientService.getPatientById(this.patientId).subscribe(data => {
this.patient = data;
}, error => console.log(error));
  
}

onSubmit(){

  console.log(this.patient);
}


}
