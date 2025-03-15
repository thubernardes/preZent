import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scanear-qrcode',
  templateUrl: './scanear-qrcode.component.html',
  styleUrls: ['./scanear-qrcode.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class ScanearQrcodeComponent {
  classId: string = '';

  constructor(private router: Router) {}

  scanear() {
    this.router.navigate(['/home']);
  }
}