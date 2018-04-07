import { Component, OnInit } from '@angular/core';
import { ProfilePicComponent } from '../profile-pic/profile-pic.component';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  name = 'Nathan Frank';

  constructor() { }

  ngOnInit() {
  }

}
