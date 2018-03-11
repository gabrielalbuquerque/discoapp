import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DiscoService} from '../disco.service';
import {Disco} from '../disco';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DiscoService]
})
export class HomeComponent implements OnInit {
  discos: Disco[];

  constructor(private route:ActivatedRoute, private discoService: DiscoService) {
    this.route.params.subscribe(
      params =>{
        var searchChar = params["searchChar"]
        if(searchChar){
           this.searchDiscos(searchChar);
        } else{
          this.getDiscos();
        }
      })
    );
  }

  getDiscos(){
    this.discoService.getDiscos()
      .subscribe(discos =>
      this.discos = discos);
  }

  searchDiscos(searchChar:string){
    this.discoService.searchDiscos(searchChar)
      .subscribe(discos =>
        this.discos = discos);
  }

  deleteDisco(id:string){
    this.discoService.deleteDisco(id).subscribe(data =>{
        for(var i = 0; i < this.discos.length; i++){
          if(this.discos[i].id == id){
            this.discos.splice(i,1);
          }
        }
    });
  }

  ngOnInit() {
  }

}
