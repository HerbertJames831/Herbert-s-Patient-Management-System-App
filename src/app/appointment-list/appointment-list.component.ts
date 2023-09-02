import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  //Creating Appointment Property
  appointments: Appointment[] = [];

  //Injecting AppointmentService and Router
  constructor(private appointment_Service: AppointmentService,
    private router: Router) { }

  //In Angular ngOnInit is a lifecycle hook. After the constructor has been called and the component's inputs have been initialized, ngOnInit is called
  //ngOnInit is helpful for performing any extra initialization that is important for the component
  ngOnInit(): void {
    this.getAppointments();

  }

  private getAppointments() {

    this.appointment_Service.get_AppointmentsList().subscribe(data => {

      this.appointments = data;

    });

  }

  appointmentDetails(appointmentId: number) {

    this.router.navigate(['appointment-details', appointmentId]);

  }

  update_Appointment(appointmentId: number) {

    this.router.navigate(['update-appointment', appointmentId]);

  }

  delete_Appointment(appointmentId: number) {

    this.appointment_Service.delete_Appointment(appointmentId).subscribe(data => {
      console.log(data);
      this.getAppointments();


    })

  }

}
