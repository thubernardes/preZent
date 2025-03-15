import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false,
})
export class HomeComponent implements OnInit {
  isAluno: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.isAluno = localStorage.getItem('isAluno') === 'true';
    console.log(this.isAluno)
    setTimeout(() => {
      this.isAluno = true;
      console.log('isAluno:', this.isAluno);
    });
  }

  navigateToGerarQrcode() {
    this.router.navigate(['/gerar-qrcode']);
  }

  navigateToScanearQrcode() {
    this.router.navigate(['/scanear-qrcode']);
  }
}