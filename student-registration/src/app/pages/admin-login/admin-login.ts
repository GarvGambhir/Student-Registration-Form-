import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-admin-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-login.html',
  styleUrl: './admin-login.css'
})
export class AdminLogin {

  constructor(
    private api: ApiService,
    private auth: AuthService,
    private router: Router
  ) {}

  username = '';
  password = '';
  loading = false;
  errorMsg = '';

  login() {
    if (!this.username || !this.password) {
      this.errorMsg = 'Please enter username and password.';
      return;
    }

    this.loading = true;
    this.errorMsg = '';

    this.api.login(this.username, this.password).subscribe({
      next: (res) => {
        this.loading = false;
        this.auth.setToken(res.token);
        this.router.navigate(['/admin/dashboard']);
      },
      error: () => {
        this.errorMsg = 'Invalid username or password.';
        this.loading = false;
      }
    });
  }
}
