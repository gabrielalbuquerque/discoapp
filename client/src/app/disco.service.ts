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

  addDisco(newDisco){
    this.httpClient.post<Disco>('http://localhost:3000/api/createdisco/1', newDisco, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).subscribe();
  }

  deleteDisco(id){
    return this.httpClient.delete('http://localhost:3000/api/deletedisco/'+id)
      .map((res:Response) => res.json());
  }

}
