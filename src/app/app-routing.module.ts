import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './view/components/about/about.component';
import { ContactComponent } from './view/components/contact/contact.component';
import { GalleryComponent } from './view/components/gallery/gallery.component';
import { HomeComponent } from './view/components/home/home.component';
import { ResumeComponent } from './view/components/resume/resume.component';
import { SkillsComponent } from './view/components/skills/skills.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: '**',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
