import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit {

  //Declaring and Initializing Variable
  appointmentId: number = 0;

  //Creating Appointment Property
  appointment: Appointment = new Appointment;

  //Injecting AppointmentService and ActivatedRoute
  constructor(private route: ActivatedRoute, private appointment_Service: AppointmentService) { }

  //In Angular ngOnInit is a lifecycle hook. After the constructor has been called and the component's inputs have been initialized, ngOnInit is called
  //ngOnInit is necessary for performing any extra initialization that is crucial for the component
  ngOnInit(): void {

    this.appointmentId = this.route.snapshot.params[`appointmentId`];

    this.appointment = new Appointment();

    this.appointment_Service.get_AppointmentById(this.appointmentId).subscribe(data => {

      this.appointment = data;

    })

  }

}
