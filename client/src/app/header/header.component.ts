import { Component, OnInit } from '@angular/core';
import {Routes, RouterModule, Router, RouterLinkActive} from '@angular/router';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl } from '@angular/forms';
import {DiscoCollectionService} from '../discocollection.service';
import {DiscoCollection} from '../discocollection';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [DiscoCollectionService]
})
export class HeaderComponent implements OnInit {
  searchForm: FormGroup;

  discoCollections: DiscoCollection[];

  constructor(private router: Router, private discoCollectionService: DiscoCollectionService) { }

  goSearch(){
    this.router.navigate(['home', this.searchForm.value.searchChar]);
  }

  getDiscoCollections(){
    this.discoCollectionService.getDiscoCollections()
      .subscribe(discoCollections =>
      this.discoCollections = discoCollections);
  }

  ngOnInit() {
    this.searchForm = new FormGroup({
       searchChar: new FormControl()
    });
    this.getDiscoCollections();
  }

}
