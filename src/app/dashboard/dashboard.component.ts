import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe(event => {
      if (event.urlAfterRedirects === '/home#about') {
        setTimeout(() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }, 4000);
      }
    });
  }

  onHome() {
    this.router.navigate(['']);
  }
  onEquipment(){
    this.router.navigate(['equipment'])
  }
  onAbout() {
    this.router.navigate([''], { fragment: 'about' });
  }

  onMembership() {
    this.router.navigate(['membership']);
  }
}