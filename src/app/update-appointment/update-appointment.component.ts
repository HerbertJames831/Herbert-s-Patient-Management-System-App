import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-appointment',
  templateUrl: './update-appointment.component.html',
  styleUrls: ['./update-appointment.component.css']
})
export class UpdateAppointmentComponent implements OnInit {

  appointmentId: number = 0;

  appointment: Appointment = new Appointment();

  constructor(private appointment_Service: AppointmentService,
   private route: ActivatedRoute, private router: Router) { }

   ngOnInit(): void {
     
   this.appointmentId = this.route.snapshot.params['appointmentId'];
   this.appointment_Service.get_AppointmentById(this.appointmentId).subscribe(data => {
   this.appointment = data;
   
  }, error => console.log(error));

   }

   onSubmit(){

   this.appointment_Service.update_Appointment(this.appointmentId, this.appointment).subscribe(data => {
   this.goToAppointmentsList();

   }
   , error => console.log(error));
   }

   goToAppointmentsList(){

    this.router.navigate(['/appointments']);
   }


 // appointmentId: number = 0;
}
