import { Component, OnInit } from '@angular/core';
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

  constructor(private discoService: DiscoService) { }

  getDiscos(){
    this.discoService.getDiscos()
      .subscribe(discos =>
      this.discos = discos);
  }

  deleteDisco(id, disco){
    this.discoService.deleteDisco(id, disco).subscribe(data =>{
        for(var i = 0; i < this.discos.length; i++){
          if(this.discos[i].id == id){
            this.discos.splice(i,1);
          }
        }
    });
  }

  ngOnInit() {
      this.getDiscos();
  }

}
