import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-pic',
  templateUrl: './profile-pic.component.html',
  styleUrls: ['./profile-pic.component.scss']
})
export class ProfilePicComponent implements OnInit {

  profilePicPath = '/assets/images/profile_pic.jpg';

  constructor() { }

  ngOnInit() {
  }

}
