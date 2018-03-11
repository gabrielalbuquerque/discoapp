import { Component, OnInit } from '@angular/core';
import {Routes, RouterModule, Router, RouterLinkActive} from '@angular/router';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  searchForm: FormGroup;

  constructor(private router: Router) { }

  goSearch(){
    console.log(this.searchForm.value);
    this.router.navigate(['searchDisco', this.searchForm.value.searchChar]);
  }

  ngOnInit() {
    this.searchForm = new FormGroup({
       searchChar: new FormControl()
    });
  }

}
