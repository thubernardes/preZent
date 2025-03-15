import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { QrcodeModalComponent } from '../qrcode-modal/qrcode-modal.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gerar-qrcode',
  templateUrl: './gerar-qrcode.component.html',
  styleUrls: ['./gerar-qrcode.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class GerarQrcodeComponent {
  NomeDaClasse: string = ''; 
  duracao: number = 0;

  constructor(private http: HttpClient, private dialog: MatDialog) {}

  gerarQrcode() {
    const body = {NomeDaClasse:this.NomeDaClasse, Duracao: this.duracao, };
    this.http.post('https://localhost:7212/api/Classes/CreateClass', body).subscribe((response: any) => {
      if (response) {
        this.dialog.open(QrcodeModalComponent, {
          data: {
            qrCode: response.data.qrCode,
            classId: response.data.classId
          }
        });
      }
    });
  }
}