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

  getDiscosByCollection(collecionFilterId:string){
    return this.httpClient.get<Disco[]>('http://localhost:3000/api/getdiscos/'+collecionFilterId);
  }

  getDisco(id:string){
    return this.httpClient.get<Disco>('http://localhost:3000/api/getdisco/'+id);
  }

  searchDiscos(searchChar:string){
    return this.httpClient.get<Disco[]>('http://localhost:3000/api/searchdiscos/'+searchChar);
  }

  addDisco(newDisco:Disco){
    return this.httpClient.post<any>('http://localhost:3000/api/createdisco/', newDisco, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

  updateDisco(id:string, disco:Disco){
    return this.httpClient.post<any>('http://localhost:3000/api/updatedisco/'+id, disco, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

  deleteDisco(id:string){
    return this.httpClient.delete<Disco>('http://localhost:3000/api/deletedisco/'+id, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

}
