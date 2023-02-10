import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-mgt',
  templateUrl: './mgt.component.html',
  styleUrls: ['./mgt.component.css']
})
export class MgtComponent  {

  constructor(private  router:  Router) {
  }
  gotoHome() {
    this.router.navigate(['/home'])
  }
}
