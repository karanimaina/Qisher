import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import Swiper from "swiper";
import {Route, Router} from "@angular/router";
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {

  @ViewChild('pagination') pagination: ElementRef;

  constructor(private router:Router) {
  }
  ngAfterViewInit() {
    new Swiper('.slides-1', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  }

  gotoHome() {
    this.router.navigate(['/home'])

  }

  navigateToContactUs() {
    this.router.navigate(['/contact'])
  }
}
