import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {


  constructor(private route:Router) {
  }

  goToHome() {
    this.route.navigate(['/home'])

  }

  goToAbout() {
    this.route.navigate(['/about'])
  }

  goToServices() {
    this.route.navigate(['/services'])
  }
}
