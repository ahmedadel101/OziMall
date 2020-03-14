import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isopen = false;
  dropright = false;

  constructor() { }

  ngOnInit(): void {
  }

  // Toggle navbar
  toggleNavbar() {
    this.isopen = !this.isopen;
  }

  toggleDropRight(){
    this.dropright = !this.dropright;
  }
}
