import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  goToGithub() {
    window.open('https://github.com/Juanse2005', '_blank');
  }
  goToLinkedin() {
    window.open(
      'https://www.linkedin.com/in/juan-sebastian-ni%C3%B1o-10a52b259/',
      '_blank'
    );
  }
}
