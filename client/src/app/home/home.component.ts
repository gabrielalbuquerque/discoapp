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
  disco: Disco;
  name:string;
  description:string;

  constructor(private discoService: DiscoService) { }

  ngOnInit() {
    this.discoService.getDiscos()
      .subscribe(discos =>
      this.discos = discos);
  }

}
