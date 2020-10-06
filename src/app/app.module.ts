import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonServicesService } from './view/services/common-services.service';
import { NavComponent } from './view/components/nav/nav.component';
import { MainComponent } from './view/components/main/main.component';
import { AboutComponent } from './view/components/about/about.component';
import { SkillsComponent } from './view/components/skills/skills.component';
import { GalleryComponent } from './view/components/gallery/gallery.component';
import { ContactComponent } from './view/components/contact/contact.component';
import { ResumeComponent } from './view/components/resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    MainComponent,
    AboutComponent,
    SkillsComponent,
    GalleryComponent,
    ContactComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CommonServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
