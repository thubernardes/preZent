import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class CadastroComponent {
  isAluno: boolean = false;
  nome: string = '';
  senha: string = '';
  email: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  cadastrar() {
    const body = { IsAluno: this.isAluno, Nome: this.nome, Senha: this.senha, Email: this.email };
    this.http.post('https://localhost:7212/api/Home/CreateUser', body).subscribe((response: any) => {
      if (response) {
        this.router.navigate(['/login']);
      }
    });
  }
}