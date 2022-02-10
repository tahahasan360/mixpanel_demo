import { Component, OnInit } from '@angular/core';
import mixpanel from 'mixpanel-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mixpanel_demo';

  ngOnInit(): void {
    mixpanel.init('8b09c6e1282321d3d59e0dac531adedc');
    console.log("Mixpanel successfully initialized.")
  }
  
}
