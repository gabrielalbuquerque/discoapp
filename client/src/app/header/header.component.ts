import { Component, OnInit } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import {DiscoService} from '../disco.service';
import {Disco} from '../disco';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [DiscoService]
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  //constructor() { }

  goHome(){
    this.router.navigate(['']);
  }

  goDiscos(){
    this.router.navigate(['discos']);
  }

  ngOnInit() {
  }

}
