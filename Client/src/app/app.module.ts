import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SenaFormComponent } from './components/sena-form/sena-form.component';
import { SenaListPersonaComponent } from './components/sena-list-persona/sena-list-persona.component';
import { PersonaServiceService} from './services/persona-service.service'
import {RegHorasServService} from './services/reg-horas-serv.service'
import {HttpClientModule} from '@angular/common/http';
import { RegistroHorasComponent } from './components/registro-horas/registro-horas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SenaFormComponent,
    SenaListPersonaComponent,
    RegistroHorasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
    
  ],
  providers: [PersonaServiceService, RegHorasServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
