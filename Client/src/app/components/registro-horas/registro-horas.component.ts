import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { RegHorasServService } from 'src/app/services/reg-horas-serv.service';
import {RegistroHoras} from '../../models/RegistroHoras';
import {Persona} from '../../models/Persona';

import { Router, ActivatedRoute } from '@angular/router';

import {PersonaServiceService} from '../../services/persona-service.service'
@Component({
  selector: 'app-registro-horas',
  templateUrl: './registro-horas.component.html',
  styleUrls: ['./registro-horas.component.scss']
})
export class RegistroHorasComponent implements OnInit {

  personas: any= [];
  persona : Persona = {
    id_persona:0,
    nombres:'',
    apellidos:'',
    numero_documento:''


  }

  registroHoras: RegistroHoras={
    id_registro_horas: 0,
    horas_iniciales:0,
    horas_restantes:0,
    id_persona:0
  }
  headElements = ['Id_PERSONA', 'NOMBRES', 'APELLIDOS', 'DOCUMENTO', 'ID_REG_HORAS', 'HORAS_INICIALES', 'HORAS_RESTANTE'];
  //columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
  searchText: string = '';
  previous: string='';
  nroHoras:string='';
  
  constructor(private horasService: RegHorasServService, private perService: PersonaServiceService,  private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    
    this.getHoras();
    this.getAllPerson();
  }

  getAllPerson(){
    this.perService.getPersonas().subscribe();
  }


  getHoras(){
    
    this.horasService.getHorasService().subscribe(
      res => {this.personas = res; console.log(this.personas)},//{console.log('listado personas',res)},//
      err => {console.error(err)}
    );
  }
  

  horasSave(){

  }

  horasDelete (id:String){
    
  }

  buscarPersona(event: any){
   // this.todasLasPersonas.list.find( nombre => nombre === this.searchText);
   
   /*this.registroHoras.horas_iniciales = Number( this.nroHoras);
   this.registroHoras.horas_restantes = Number( this.nroHoras);
    this.perService.getPersona(this.searchText).subscribe(
    res => {this.persona= res},
    error=> {console.log(error)}
   );
*/
 this.searchText = event.target.value;
  console.log(event.target.value);
  this.perService.getPersonaByNameOrDocument(event.target.value).subscribe(
    res => {this.persona= res; console.log('fron' + res)},
    error=> {console.log(error)}
   );

   //this.horasService.saveRegisgtroHoras(this.registroHoras)
   
  }



}
