import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Disco } from './disco';
import 'rxjs/add/operator/map';

@Injectable()
export class DiscoService {

  constructor(private http: HttpClient) { }

  getDiscos(){
    return this.http.get<Disco[]>('http://localhost:3000/api/discos');
  }

  addDisco(newDisco){
    /*var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/disco', newDisco, {headers:headers})
      .map((res:Response) => res.json());*/
  }

  deleteDisco(id){
    /*return this.http.delete('http://localhost:3000/api/disco'+id)
      .map((res:Response) => res.json());*/
  }

}
