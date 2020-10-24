import { Component } from '@angular/core';
import {PersonaService} from "./servicio/persona.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title:string = 'Personas'
  public personas :Array<any> = []


  constructor(
    private servicioPersona:PersonaService
  ){
      this.servicioPersona.getPersonas().subscribe((resp:any) => {

        if(localStorage.getItem('personas') === null) {
          this.personas = resp.data
        } else {
          this.personas = JSON.parse(localStorage.getItem('personas'));
        }

      })
   
    

    
  }
  add(nombre){

      if(localStorage.getItem('personas') === null) {
        this.personas.push({
          'first_name':nombre.value,
          'last_name':'',
          'email':''
        });
        localStorage.setItem('personas', JSON.stringify(this.personas));
      } else {

        this.personas = JSON.parse(localStorage.getItem('personas'));
        this.personas.push({
          'first_name':nombre.value,
          'last_name':'',
          'email':''
        });
        localStorage.setItem('personas', JSON.stringify(this.personas));
      }
      return false
     
  }

 
}
