import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-qrcode-modal',
  templateUrl: './qrcode-modal.component.html',
  styleUrls: ['./qrcode-modal.component.css']
})
export class QrcodeModalComponent {

  constructor(
    public dialogRef: MatDialogRef<QrcodeModalComponent>,  // Referência ao modal
    @Inject(MAT_DIALOG_DATA) public data: any  // Dados passados ao modal
  ) {}

  // Função para fechar o modal
  closeModal(): void {
    this.dialogRef.close();  // Fecha o modal
  }
}
