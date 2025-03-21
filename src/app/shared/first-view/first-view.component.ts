import { Component } from '@angular/core';

@Component({
  selector: 'app-first-view',
  standalone: true,
  imports: [],
  templateUrl: './first-view.component.html',
  styleUrl: './first-view.component.css'
})
export class FirstViewComponent {
  constructor() { }

  goToGithub() {
    window.open('https://github.com/Juanse2005', '_blank');
  }
  goToLinkedin() {
    window.open('https://www.linkedin.com/in/juan-sebastian-ni%C3%B1o-10a52b259/', '_blank');
  }
}
