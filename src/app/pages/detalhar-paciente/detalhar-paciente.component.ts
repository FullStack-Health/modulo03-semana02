import { Component, inject } from '@angular/core';
import { PacientesService } from '../../services/pacientes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhar-paciente',
  standalone: true,
  imports: [],
  templateUrl: './detalhar-paciente.component.html',
  styleUrl: './detalhar-paciente.component.css'
})
export class DetalharPacienteComponent {
  pacienteService = inject(PacientesService);
  activatedRoute = inject(ActivatedRoute);
  paciente: any = {};

  ngOnInit(){
    this.activatedRoute.params.subscribe({
      next: (params: any)=>{
        this.pacienteService.detail(params.id).subscribe({
          next: (data)=>{
            this.paciente = data;
          },
          error:(error)=>{ console.log("Erro do detail",error) }
        })
      },
      error:(error)=>{ console.log("Erro do params",error) },
    })

  }

  favoritarPaciente(){
    //verifica se já existe algum favorito
    let temFavoritos = localStorage.getItem('favoritos'); // "[]"
    if(temFavoritos){ // se existir
      // transforma a string em um array
      let favoritos = JSON.parse(temFavoritos); // []
      // adiciona o paciente ao array
      favoritos.push(this.paciente); //[{}]
      // transforma o array em uma string novamente e atualiza o localStorage
      localStorage.setItem('favoritos', JSON.stringify(favoritos)); // "[{}]"
      alert("Paciente favoritado com sucesso!");
    }else{ // se não existir
      // cria a chave no localStorage com um array vazio
      localStorage.setItem('favoritos', "[]");
      // chama a função novamente para agora sim adicionar o paciente
      // ja que agora o localStorage tem a chave 'favoritos'
      this.favoritarPaciente();
    }
  }
}
