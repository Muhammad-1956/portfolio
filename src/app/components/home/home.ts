import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Intro } from '../intro/intro';
import { Story } from '../story/story';
import { Skills } from '../skills/skills';
import { Projects } from '../projects/projects';
import { Contact } from '../contact/contact';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  imports: [Navbar, Intro, Story, Skills, Projects, Contact, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
