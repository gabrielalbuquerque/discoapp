import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Disco } from './disco';
import 'rxjs/add/operator/map';

@Injectable()
export class DiscoService {

  constructor(private httpClient: HttpClient) { }

  getDiscos(){
    return this.httpClient.get<Disco[]>('http://localhost:3000/api/getdiscos');
  }

  getDisco(id:string){
    return this.httpClient.get<Disco>('http://localhost:3000/api/getdisco/'+id);
  }

  searchDiscos(searchChar:string){
    return this.httpClient.get<Disco[]>('http://localhost:3000/api/searchdiscos/'+searchChar);
  }

  addDisco(newDisco:Disco){
    this.httpClient.post<Disco>('http://localhost:3000/api/createdisco/1', newDisco, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).subscribe();
  }

  updateDisco(id:string, disco:Disco){
    this.httpClient.post<Disco>('http://localhost:3000/api/updatedisco/'+id, disco, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).subscribe();
  }

  deleteDisco(id:string){
    return this.httpClient.delete<Disco>('http://localhost:3000/api/deletedisco/'+id, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

}
