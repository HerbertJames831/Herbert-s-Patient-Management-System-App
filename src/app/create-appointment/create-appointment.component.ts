import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {

  //Creating Appointment Property
  appointment: Appointment = new Appointment();

  //Injecting AppointmentService and Router
  constructor(private appointment_Service: AppointmentService,
    private router: Router) { }

  //In Angular ngOnInit is a lifecycle hook. After the constructor has been called and the component's inputs have been initialized, ngOnInit is called
  //ngOnInit is useful for performing any extra initialization that is vital for the component
  ngOnInit(): void {

  }

  save_Appointment() {

    this.appointment_Service.create_Appointment(this.appointment).subscribe(data => {
      console.log(data);
      this.goToAppointmentsList();

    },
      error => console.log(error));

  }

  goToAppointmentsList() {

    this.router.navigate(['/appointments']);

  }

  onSubmit() {

    console.log(this.appointment);
    this.save_Appointment();


  }


}
