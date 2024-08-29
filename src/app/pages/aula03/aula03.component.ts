import { Component, inject } from '@angular/core';
import { PacientesService } from '../../services/pacientes.service';

@Component({
  selector: 'app-aula03',
  standalone: true,
  imports: [],
  templateUrl: './aula03.component.html',
  styleUrl: './aula03.component.css'
})
export class Aula03Component {

  pacientesService = inject(PacientesService);

  ngOnInit() {
    //chamada do método list() do serviço PacientesService
    this.pacientesService.list().subscribe({
      next: (data)=>{
        //aqui você pode fazer o que quiser com os dados retornados
        console.log(data); 
      },
      error:(error)=>{},
    })
  }
}
