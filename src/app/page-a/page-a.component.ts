import { Component, OnInit } from '@angular/core';
import mixpanel from 'mixpanel-browser';

@Component({
  selector: 'app-page-a',
  templateUrl: './page-a.component.html',
  styleUrls: ['./page-a.component.css']
})
export class PageAComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    mixpanel.track('Page A view');
    console.log("Page A view was logged to Mixpanel")
  }

  trackButtonAClick() {
    mixpanel.track('Button A click');
    alert("Button A click was logged to Mixpanel.");
  }

}
