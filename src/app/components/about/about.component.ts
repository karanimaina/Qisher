import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  constructor(private router:Router) {
  }

  addImages() {
    const images: string[] = []
    images.push("assets/clients/friendship.jpg")
    images.push("assets/clients/kipi.jpg")
    images.push("assets/clients/kirinyaga.jpg")
    images.push("assets/clients/Nita.png")
    images.push("assets/clients/strath.png")
    return images;
  }

  images: string[] = this.addImages();

  scroller: HTMLElement;

  ngOnInit() {
    this.scroller = document.querySelector('#scroller');
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    this.scroller.scrollLeft += 1;

    if (this.scroller.scrollLeft + this.scroller.offsetWidth >= this.scroller.scrollWidth) {
      this.scroller.scrollLeft = 0;
    }
  }


  viewTestimonials() {
    this.router.navigate(['/team'])
  }
}
