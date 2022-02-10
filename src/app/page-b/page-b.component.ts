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
    mixpanel.track('Page B view');
    console.log("Page B view was logged to Mixpanel.")
  }

  trackButtonBClick() {
    mixpanel.track('Button B click');
    alert("Button B click was logged to Mixpanel.");
  }

}
