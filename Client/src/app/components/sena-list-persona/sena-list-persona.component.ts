
import { Component, OnInit } from '@angular/core';
import {PersonaServiceService} from '../../services/persona-service.service'
@Component({
  selector: 'app-sena-list-persona',
  templateUrl: './sena-list-persona.component.html',
  styleUrls: ['./sena-list-persona.component.scss']
})
export class SenaListPersonaComponent implements OnInit {

  personasList: any = [];
  headElements = ['ID', 'NOMBRES', 'DOCUMENTO'];
  searchText: string = '';
  previous: string='';
  constructor(private perService: PersonaServiceService) { }

  ngOnInit(): void {
    this.getPersonas();
  }

  getPersonas(){
    this.perService.getPersonas().subscribe(
      res => {this.personasList = res; console.log(this.personasList)},//{console.log('listado personas',res)},//
      err => {console.error(err)}
    );
  }

  deletePersona(id:string){
    console.log('delete persona',id);
  }

}
