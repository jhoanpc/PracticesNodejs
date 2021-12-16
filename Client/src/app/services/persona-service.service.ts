import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Persona} from '../models/Persona'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class PersonaServiceService {

  
  API_URL = 'http://localhost:3000/api'
  constructor(private http: HttpClient ) { }

  getPersonas (){
    //return this.http.get(`${this.API_URL}+personas`);
    return this.http.get(`${this.API_URL}/personas`);
  }

  getPersona(id:String){
    return this.http.get(`${this.API_URL}/personas/${id}`);
  }

  getPersonaByNameOrDocument(search:String){
    console.log(search);
    return this.http.get(`${this.API_URL}/personas/searchByNameOrDocument/${search}`);
  }

  savePersona(persona:Persona){
    return this.http.post(`${this.API_URL}/personas`, persona);
  }

  updatePersona(id: string|number, updatedPersona: Persona): Observable<Persona> {
    return this.http.put(`${this.API_URL}/games/${id}`, updatedPersona);
  }
}

