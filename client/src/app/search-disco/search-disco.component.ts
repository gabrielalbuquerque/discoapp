import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DiscoService} from '../disco.service';
import {Disco} from '../disco';

@Component({
  selector: 'app-search-disco',
  templateUrl: './search-disco.component.html',
  styleUrls: ['./search-disco.component.css'],
  providers: [DiscoService]
})
export class SearchDiscoComponent implements OnInit {
  discos: Disco[];

  constructor(private route:ActivatedRoute, private discoService: DiscoService) {
    this.route.params.subscribe(
      params => this.searchDiscos(params["searchChar"])
    );
  }

  searchDiscos(searchChar){
    this.discoService.searchDiscos(searchChar)
      .subscribe(discos =>
        this.discos = discos);
  }

  ngOnInit() {
  }

}
