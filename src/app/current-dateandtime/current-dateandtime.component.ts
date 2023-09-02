import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-date',
  templateUrl: './current-dateandtime.component.html',
  styleUrls: ['./current-dateandtime.component.css']
})
export class CurrentDateandtimeComponent implements OnInit {

  current_DateandTime: Date = new Date();

  constructor() { }

  //In Angular ngOnInit is a lifecycle hook. After the constructor has been called and the component's inputs have been initialized, ngOnInit is called
  //ngOnInit is key for performing any extra initialization that is vital for the component
  ngOnInit(): void {

  }

}
