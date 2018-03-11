import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl } from '@angular/forms';
import {DiscoService} from '../disco.service';
import {Disco} from '../disco';

@Component({
  selector: 'app-edit-disco',
  templateUrl: './edit-disco.component.html',
  styleUrls: ['./edit-disco.component.css'],
  providers: [DiscoService]
})
export class EditDiscoComponent implements OnInit {
  editDiscoForm: FormGroup;
  disco: Disco;
  name: string;
  description: string;
  id: string;

  constructor(private route:ActivatedRoute, private discoService: DiscoService) {
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
        }
      );
  }

  updateDisco(){
      this.discoService.updateDisco(this.id, this.editDiscoForm.value);
  }

  ngOnInit() {
    this.editDiscoForm = new FormGroup({
       name: new FormControl(),
       description: new FormControl()
    });
  }

}
