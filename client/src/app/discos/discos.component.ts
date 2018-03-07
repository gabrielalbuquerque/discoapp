import { Component, OnInit } from '@angular/core';
import {DiscoService} from '../disco.service';
import {Disco} from '../disco';

@Component({
  selector: 'app-discos',
  templateUrl: './discos.component.html',
  styleUrls: ['./discos.component.css'],
  providers: [DiscoService]
})
export class DiscosComponent implements OnInit {
  discos: Disco[];
  disco: Disco;
  name:string;
  description:string;

  constructor(private discoService: DiscoService) { }

  /*addDisco(){
    const newDisco = {
      name: this.name,
      description: this.description
    }
    this.discoService.addDisco(newDisco)
      .subscribe(disco => {
        this.discos.push(disco);
        this.discoService.getDiscos()
          .subscribe(discos =>
          this.discos = discos);
      });
  }

  deleteDisco(id:any){
    var discos = this.discos;
    this.discoService.deleteDisco(id)
      .subscribe(data => {
        if(data.n == 1){
          for(var i = 0; i < discos.length; i++){
            if(discos[i]._id == id){
              discos.splice(i,1);
            }
          }
        }
      });
  }*/

  ngOnInit() {
    this.discoService.getDiscos()
      .subscribe(discos =>
      this.discos = discos);
  }

}
