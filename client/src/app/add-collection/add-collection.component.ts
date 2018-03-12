import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl } from '@angular/forms';
import {DiscoCollectionService} from '../discocollection.service';
import {DiscoCollection} from '../discocollection';

@Component({
  selector: 'app-add-collection',
  templateUrl: './add-collection.component.html',
  styleUrls: ['./add-collection.component.css'],
  providers: [DiscoCollectionService]
})
export class AddCollectionComponent implements OnInit {
  addDiscoCollectionForm: FormGroup;

  discoCollections: DiscoCollection[];
  resSuccess: string;
  resError: string;

  constructor(private discoCollectionService: DiscoCollectionService) { }

  addDiscoCollection(){
    this.discoCollectionService.addDiscoCollection(this.addDiscoCollectionForm.value).subscribe(res => {
      if(res.successMsg){
        this.resSuccess = res.successMsg;
      } else{
        this.resError = res.errorMsg;
      }
    });
  }

  ngOnInit() {
    this.addDiscoCollectionForm = new FormGroup({
       name: new FormControl(),
       description: new FormControl()
    });
  }

}
