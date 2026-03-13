import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-admin-dashboard',
  imports: [CommonModule],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css'
})
export class AdminDashboard implements OnInit {

  constructor(
    private api: ApiService,
    private auth: AuthService,
    private router: Router
  ) {}

  students: any[] = [];
  loading = true;
  errorMsg = '';

  ngOnInit() {
    this.api.getRegistrations().subscribe({
      next: (data) => {
        this.students = data;
        this.loading = false;
      },
      error: () => {
        this.errorMsg = 'Failed to load registrations. Please try again.';
        this.loading = false;
      }
    });
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/admin/login']);
  }

  formatDate(val: string) {
    if (!val) return '-';
    return new Date(val).toLocaleDateString('en-IN', {
      day: '2-digit', month: 'short', year: 'numeric'
    });
  }
}
