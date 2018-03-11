import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl } from '@angular/forms';
import {DiscoService} from '../disco.service';
import {Disco} from '../disco';

@Component({
  selector: 'app-add-disco',
  templateUrl: './add-disco.component.html',
  styleUrls: ['./add-disco.component.css'],
  providers: [DiscoService]
})
export class AddDiscoComponent implements OnInit {
  myform: FormGroup;

  disco: Disco = new Disco();
  discoCollectionId: string;

  constructor(private discoService: DiscoService) { }

  addDisco(){
    //this.discoService.deleteDisco("1");
    this.discoService.addDisco(this.myform.value);
  }

  ngOnInit() {
    this.myform = new FormGroup({
       name: new FormControl(),
       description: new FormControl()
    });
  }

}
