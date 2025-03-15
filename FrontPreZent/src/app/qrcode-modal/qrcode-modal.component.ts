import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-qrcode-modal',
  templateUrl: './qrcode-modal.component.html',
  styleUrls: ['./qrcode-modal.component.css']
})
export class QrcodeModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}