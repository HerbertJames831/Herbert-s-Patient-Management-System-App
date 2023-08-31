import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-date',
  templateUrl: './current-dateandtime.component.html',
  styleUrls: ['./current-dateandtime.component.css']
})
export class CurrentDateandtimeComponent implements OnInit {


current_DateandTime: Date = new Date();

constructor() { }

ngOnInit(): void {
  
}



  
}
