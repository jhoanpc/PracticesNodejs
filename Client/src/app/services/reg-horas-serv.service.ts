import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

import {RegistroHoras} from '../models/RegistroHoras';
import {PersonaServiceService} from '../services/persona-service.service';
@Injectable({
  providedIn: 'root'
})
export class RegHorasServService {


  API_URL = 'http://localhost:3000/api'
  listaPersona : any = [];
  constructor(private http: HttpClient) {

   }

   getHorasService(){
    return this.http.get(`${this.API_URL}/horas`);
   }
   
   getEncontrarRegistroHora (id:String){
    //return this.http.get(`${this.API_URL}+personas`);
    return this.http.get(`${this.API_URL}+horas/${id}`);
  }
  
  getHoraByPersona(id:String){
    return this.http.get(`${this.API_URL}+horas/horasByPersona/${id}`);
  }

  saveRegisgtroHoras(horas:RegistroHoras){
    return this.http.post(`${this.API_URL}/horas/create`, horas);
  }
}
