import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor() { }

  goToGithub() {
    window.open('https://github.com/Juanse2005', '_blank');
  }
  goToLinkedin() {
    window.open('https://www.linkedin.com/in/juan-sebastian-ni%C3%B1o-10a52b259/', '_blank');
  }
}
