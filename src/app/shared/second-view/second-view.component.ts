import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as AOS from 'aos';

interface Tech {
  name: string;
  category: string;
  icon: string;
}
@Component({
  selector: 'app-second-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './second-view.component.html',
  styleUrl: './second-view.component.css',
})
export class SecondViewComponent implements OnInit {
  ngOnInit() {
    AOS.init();
  }

  categories = [
    'Todos',
    'Frontend',
    'Backend',
    'Cloud',
    'IA',
    'Bases de datos',
    'Herramientas',
  ];
  techs = [
    /* Frontend */
    {
      name: 'Angular',
      category: 'Frontend',
      iconClass: 'devicon-angular-plain',
    },
    {
      name: 'JavaScript',
      category: 'Frontend',
      iconClass: 'devicon-javascript-plain',
    },
    {
      name: 'TypeScript',
      category: 'Frontend',
      iconClass: 'devicon-typescript-plain',
    },
    { name: 'HTML5', category: 'Frontend', iconClass: 'devicon-html5-plain' },
    { name: 'CSS3', category: 'Frontend', iconClass: 'devicon-css3-plain' },
    {
      name: 'Tailwind CSS',
      category: 'Frontend',
      iconClass: 'devicon-tailwindcss-plain',
    },
    {
      name: 'Bootstrap',
      category: 'Frontend',
      iconClass: 'devicon-bootstrap-plain',
    },
    {
      name: 'PrimeNG',
      category: 'Frontend',
      iconClass: 'devicon-primeng-plain',
    },
    {
      name: 'Angular Material',
      category: 'Frontend',
      iconClass: 'devicon-angularmaterial-plain',
    },
    /* Backend */
    {
      name: 'Java Springboot',
      category: 'Backend',
      iconClass: 'devicon-spring-plain-wordmark',
    },
    {
      name: 'Node.js',
      category: 'Backend',
      iconClass: 'devicon-nodejs-plain-wordmark',
    },
    {
      name: 'Express',
      category: 'Backend',
      iconClass: 'devicon-express-original',
    },
    {
      name: '.NET Core',
      category: 'Backend',
      iconClass: 'devicon-dotnetcore-plain',
    },

    {
      name: 'Python',
      category: 'IA',
      iconClass: 'devicon-python-plain',
    },

    {
      name: 'PostgreSQL',
      category: 'Bases de datos',
      iconClass: 'devicon-postgresql-plain-wordmark',
    },
    {
      name: 'MySQL',
      category: 'Bases de datos',
      iconClass: 'devicon-mysql-plain-wordmark',
    },
    {
      name: 'AWS',
      category: 'Cloud',
      iconClass: 'devicon-amazonwebservices-plain-wordmark',
    },
    { name: 'Git', category: 'Herramientas', iconClass: 'devicon-git-plain' },
  ];

  selectedCategory = 'Todos';

  get filteredTechs() {
    if (this.selectedCategory === 'Todos') return this.techs;
    return this.techs.filter((t) => t.category === this.selectedCategory);
  }

  setCategory(cat: string) {
    this.selectedCategory = cat;
  }
}
