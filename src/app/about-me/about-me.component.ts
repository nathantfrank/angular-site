import { Component, OnInit } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { ProfileIntroComponent } from '../profile-intro/profile-intro.component';
import { ProfileContentComponent } from '../profile-content/profile-content.component';
import { ContactLinksComponent } from '../contact-links/contact-links.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
