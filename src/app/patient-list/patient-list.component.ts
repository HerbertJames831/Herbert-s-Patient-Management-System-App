import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-patient-list',
    templateUrl: './patient-list.component.html',
    styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

    //Creating Patient Property
    patients: Patient[] = [];

    //Injecting PatientService and Router
    constructor(private patientService: PatientService,
        private router: Router) { }

    //In Angular ngOnInit is a lifecycle hook. After the constructor has been called and the component's inputs have been initialized, ngOnInit is called
    //ngOnInit is useful for performing any extra initialization that is vital for the component
    ngOnInit(): void {
        this.getPatients();
    }

    private getPatients() {
        this.patientService.getPatientsList().subscribe(data => {
            this.patients = data;
        });

    }

    patientDetails(patientId: number) {

        this.router.navigate(['patient-details', patientId]);

    }

    updatePatient(patientId: number) {

        this.router.navigate(['update-patient', patientId]);
    }

    deletePatient(patientId: number) {

        this.patientService.deletePatient(patientId).subscribe(data => {
            console.log(data);
            this.getPatients();

        })
    }

}
