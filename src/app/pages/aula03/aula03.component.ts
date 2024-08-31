import { Component, inject } from '@angular/core';
import { PacientesService } from '../../services/pacientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aula03',
  standalone: true,
  imports: [],
  templateUrl: './aula03.component.html',
  styleUrl: './aula03.component.css'
})
export class Aula03Component {
  pacientes: any = [];
  pacientesService = inject(PacientesService);
  router = inject(Router);

  ngOnInit() {
    this.pacientesService.list().subscribe({
      next: (data: any)=>{
        //carrega os favoritos do localStorage e já converte para array
        let arrayFavoritos = JSON.parse(localStorage.getItem('favoritos') || "[]");
        // percorre a lista de pacientes
        data.forEach((element:any) => {
          //verifica se o paciente está na lista de favoritos atraves da propriedade id
          let isFavorite = arrayFavoritos.some((favorito:any)=>favorito.id === element.id);
          if(isFavorite){ // se estiver
            element.favorito = "Sim"; //adiciona a propriedade 'favorito' com o valor "Sim"
          }else{ // se não estiver
            element.favorito = "Não"; //adiciona a propriedade 'favorito' com o valor "Não"
          }
        });
        //atualiza a lista de pacientes com o 'data' modificado
        this.pacientes = data;
      },
      error:(error)=>{ console.error("Erro ao listar pacientes: ",error) }
    })
  }

  redirectTo(idPaciente: number){
    //redireciona para a rota de detalhar paciente
    //passando o id do paciente como parametro
    this.router.navigateByUrl(`/revisao/paciente/${idPaciente}`);
  }
}
