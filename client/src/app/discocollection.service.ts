import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { DiscoCollection } from './discocollection';
import 'rxjs/add/operator/map';

@Injectable()
export class DiscoCollectionService {

  constructor(private httpClient: HttpClient) { }

  getDiscoCollections(){
    return this.httpClient.get<DiscoCollection[]>('http://localhost:3000/api/getdiscocollections');
  }

  addDiscoCollection(newDiscoCollection:DiscoCollection){
    return this.httpClient.post<any>('http://localhost:3000/api/creatediscocollection', newDiscoCollection, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

  updateDiscoCollection(id:string, discoCollection:DiscoCollection){
    return this.httpClient.post<any>('http://localhost:3000/api/updatediscocollection/'+id, discoCollection, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

  deleteDiscoCollection(id:string){
    return this.httpClient.delete<DiscoCollection>('http://localhost:3000/api/deletediscocollection/'+id, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

}
