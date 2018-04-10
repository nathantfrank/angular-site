import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-contact-links',
  templateUrl: './contact-links.component.html',
  styleUrls: ['./contact-links.component.scss']
})
export class ContactLinksComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry
      .registerFontClassAlias('fontawesome', 'fa');
   }

  ngOnInit() {
  }

}
