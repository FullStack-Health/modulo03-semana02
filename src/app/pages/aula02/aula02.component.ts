import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-aula02',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aula02.component.html',
  styleUrl: './aula02.component.css'
})
export class Aula02Component {
  // items = [
  //   {
  //       nome: 'item 1',
  //       valor: 10
  //   },
  //   {
  //       nome: 'item 2',
  //       valor: 20
  //   },
  //   {
  //       nome: 'item 2'
  //   }
  // ]

  isShow: boolean = true;
  users: any[] = [
    {
      name: "Camila",
      perfil: "admin" // admin, médico, paciente
    },
    {
      name: "Plínio",
      perfil: "médico" // admin, médico, paciente
    },
    {
      name: "Heloise",
      perfil: "paciente" // admin, médico, paciente
    },
    {
      name: "Felipe",
      perfil: "admin" // admin, médico, paciente
    },
    {
      name: "Rosa",
      perfil: "médico" // admin, médico, paciente
    }
  ]
}
