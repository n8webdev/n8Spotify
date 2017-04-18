import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  expand: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  expandMenu (){
    this.expand = !this.expand;
  }

}
