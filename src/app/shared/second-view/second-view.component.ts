import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-second-view',
  standalone: true,
  imports: [],
  templateUrl: './second-view.component.html',
  styleUrl: './second-view.component.css'
})
export class SecondViewComponent implements OnInit {
  ngOnInit() {
    AOS.init();
  }
}