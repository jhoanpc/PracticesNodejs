import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroHorasComponent } from './components/registro-horas/registro-horas.component';


import { SenaListPersonaComponent } from './components/sena-list-persona/sena-list-persona.component'
const routes: Routes = [
  {
    path:'',redirectTo:'/personas',
    pathMatch: 'full'
  },
  {
    path:'personas', component:SenaListPersonaComponent
  },
  {
    path:'registroHoras', component:RegistroHorasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
