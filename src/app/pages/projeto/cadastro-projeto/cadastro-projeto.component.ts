import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProjetoService} from "../../../shared/services/projeto.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Projeto} from "../../../shared/model/projeto";
import {MensagemService} from "../../../shared/services/mensagem.service";

@Component({
  selector: 'app-cadastro-projeto',
  templateUrl: './cadastro-projeto.component.html',
  styleUrls: ['./cadastro-projeto.component.scss']
})
export class CadastroProjetoComponent implements OnInit {

  formGroup: FormGroup;
  update: boolean;

  constructor(private projetoService: ProjetoService, private router: Router, private route: ActivatedRoute, private messageService: MensagemService) {
    this.formGroup = new FormGroup({
      id: new FormControl(null),
      nome: new FormControl(''),
      descricao: new FormControl(''),
      tarefas: new FormControl('')
    });
    this.update = false;
  }

  ngOnInit() {
    if (this.route.snapshot.params["id"]){
      this.projetoService.getById(this.route.snapshot.params["id"]).subscribe(
        projeto => {(
          this.formGroup.patchValue(projeto)
        )}
      )
    }
  }
  inserirProjeto(){
    const projeto: Projeto = this.formGroup.value;
    if (this.update){
      //Update mode
      this.projetoService.atualizar(projeto).subscribe({
        next: () => {
          this.messageService.success('Projeto atualizado com sucesso!');
          this.router.navigate(['/']);
        },
        error: (error) =>{
          console.error(error);
          this.messageService.error('Erro na atualização do Projeto...');
        }
      });
    } else {
          // Create mode
          this.projetoService.inserir(projeto).subscribe({
            next: () => {
              this.messageService.success('Projeto inserido com sucesso!');
              this.router.navigate(['/']);
            },
            error: (error) => {
              console.error(error);
              this.messageService.error('Erro na inserção do Projeto...');
            }
          });
    }
  }
}
