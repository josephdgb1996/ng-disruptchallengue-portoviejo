import { Component } from '@angular/core';
import { NavbarHorizontalService } from 'src/app/core/services/navbar-horizontal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public _navbarHorizontal:NavbarHorizontalService , public _router:Router) { }

  navigate(url){
    this._router.navigate([url]);
  }

}
