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

  appointmentId: number = 0;

  appointment: Appointment = new Appointment;

  constructor(private route: ActivatedRoute, private appointment_Service: AppointmentService) { }

  
  ngOnInit(): void {
    
  this.appointmentId = this.route.snapshot.params[`appointmentId`];

  this.appointment = new Appointment();

  this.appointment_Service.get_AppointmentById(this.appointmentId).subscribe(data => {

  this.appointment = data;
  
  })

  }





}
