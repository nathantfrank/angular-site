import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { ProfilePicComponent } from './profile-pic/profile-pic.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProfileIntroComponent } from './profile-intro/profile-intro.component';
import { ProfileContentComponent } from './profile-content/profile-content.component';
import { ContactLinksComponent } from './contact-links/contact-links.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutMeComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    ProfilePicComponent,
    AboutMeComponent,
    ToolbarComponent,
    ProfileIntroComponent,
    ProfileContentComponent,
    ContactLinksComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
