import { Component, HostListener } from '@angular/core';
import { NavComponent } from '../../shared/components/nav/nav.component';
import { FirstViewComponent } from '../../shared/first-view/first-view.component';
import { SecondViewComponent } from '../../shared/second-view/second-view.component';
import { ThirdViewComponent } from '../../shared/third-view/third-view.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, FirstViewComponent, SecondViewComponent, ThirdViewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {  
  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollTop = window.scrollY; 
    const cloud = document.getElementById('cloud-1');

    if (cloud) {
      cloud.style.transform = `translate(-50%, -${scrollTop * 0.5}px)`; // Se mueve más lento que el scroll
    }
  }
}
