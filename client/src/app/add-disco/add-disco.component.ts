import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl } from '@angular/forms';
import {DiscoService} from '../disco.service';
import {Disco} from '../disco';
import {DiscoCollectionService} from '../discocollection.service';
import {DiscoCollection} from '../discocollection';

@Component({
  selector: 'app-add-disco',
  templateUrl: './add-disco.component.html',
  styleUrls: ['./add-disco.component.css'],
  providers: [DiscoService, DiscoCollectionService]
})
export class AddDiscoComponent implements OnInit {
  addDiscoForm: FormGroup;

  disco: Disco = new Disco();
  discoCollections: DiscoCollection[];
  resSuccess: string;
  resError: string;

  constructor(private discoService: DiscoService, private discoCollectionService: DiscoCollectionService) { }

  addDisco(){
    this.discoService.addDisco(this.addDiscoForm.value).subscribe(res => {
      if(res.successMsg){
        this.resSuccess = res.successMsg;
      } else{
        this.resError = res.errorMsg;
      }
    });
  }

  getDiscoCollections(){
    this.discoCollectionService.getDiscoCollections()
      .subscribe(discoCollections =>
      this.discoCollections = discoCollections);
  }

  ngOnInit() {
    this.addDiscoForm = new FormGroup({
       name: new FormControl(),
       description: new FormControl(),
       discoCollectionId: new FormControl()
    });
    this.getDiscoCollections();
  }

}
