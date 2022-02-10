import { Component, OnInit } from '@angular/core';
import mixpanel from 'mixpanel-browser';

@Component({
  selector: 'app-page-b',
  templateUrl: './page-b.component.html',
  styleUrls: ['./page-b.component.css']
})
export class PageBComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
    mixpanel.init('8b09c6e1282321d3d59e0dac531adedc'); 
    mixpanel.track('Page B view');
  }

  trackButtonBClick() {
    mixpanel.track('Button B click');
    alert("Button B click was logged to Mixpanel.");
  }

}
