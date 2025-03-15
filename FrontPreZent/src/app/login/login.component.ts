import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  senha: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const body = { Email: this.email, Senha: this.senha };
    this.http.post('https://localhost:7212/api/Home/GetLogin', body).subscribe((response: any) => {
      if (response) {
        localStorage.setItem('isAluno', response.user.isAluno);
        this.router.navigate(['/home']);

        if (response.user.isAluno) {
          this.router.navigate(['/home']);
        } else {
          this.router.navigate(['/home-prof']);
        }
      }
    });
  }
  navigateToCadastro() {
    this.router.navigate(['/cadastro']);
  }
}