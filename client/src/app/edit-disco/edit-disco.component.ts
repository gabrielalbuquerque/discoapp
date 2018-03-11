import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl } from '@angular/forms';
import {DiscoService} from '../disco.service';
import {Disco} from '../disco';
import {DiscoCollectionService} from '../discocollection.service';
import {DiscoCollection} from '../discocollection';

@Component({
  selector: 'app-edit-disco',
  templateUrl: './edit-disco.component.html',
  styleUrls: ['./edit-disco.component.css'],
  providers: [DiscoService, DiscoCollectionService]
})
export class EditDiscoComponent implements OnInit {
  editDiscoForm: FormGroup;
  
  disco: Disco;
  discoCollections: DiscoCollection[];
  discoCollectionId: string;
  id: string;
  name: string;
  description: string;
  resSuccess: string;
  resError: string;

  constructor(private route:ActivatedRoute, private discoService: DiscoService, private discoCollectionService: DiscoCollectionService) {
    this.route.params.subscribe(
      params => this.loadDisco(params["id"])
    );
  }

  loadDisco(id:string){
    this.id = id;
    this.discoService.getDisco(id)
      .subscribe(disco => {
          this.name = disco[0].name;
          this.description = disco[0].description;
          this.discoCollectionId = disco[0].discoCollectionId;
        }
      );
  }

  updateDisco(){
    this.discoService.updateDisco(this.id, this.editDiscoForm.value).subscribe(res => {
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
    this.editDiscoForm = new FormGroup({
       name: new FormControl(),
       description: new FormControl(),
       discoCollectionId: new FormControl()
    });
    this.getDiscoCollections();
  }

}
