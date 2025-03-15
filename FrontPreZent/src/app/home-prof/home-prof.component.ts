import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  standalone: true,
  imports: [FormsModule,CommonModule], 
  selector: 'app-home-prof',
  templateUrl: './home-prof.component.html',
  styleUrls: ['./home-prof.component.css'],
})
export class HomeProfComponent implements OnInit {
  classes: any[] = [];
  alunos: any[] = [];
  selectedClassId: string | null = null;

  constructor(private http: HttpClient,private router: Router) {}

  ngOnInit() {
    this.getClasses();
  }

  // Obtém todas as aulas
  getClasses() {
    this.http.get('https://localhost:7212/api/Classes/GetClasses').subscribe(
      (response: any) => {
        this.classes = response.map((classe: any) => {
          if (typeof classe.classId === 'number') {
            classe.classId = classe.classId.toString();
          }
          return classe;
        });
      },
      (error) => {
        console.error('Erro ao buscar classes:', error);
      }
    );
  }
  

  getAlunosPorClasse(classId: string) {
    this.selectedClassId = classId;
    this.http
      .get(`https://localhost:7212/api/Classes/GetAlunosByClass/${classId}`)
      .subscribe(
        (response: any) => {
          this.alunos = response;
        },
        (error) => {
          console.error('Erro ao buscar alunos:', error);
        }
      );
  }

  navigateToGerarQrcode() {
    this.router.navigate(['/gerar-qrcode']);
  }
}
