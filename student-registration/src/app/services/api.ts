import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth';

// api base url - change this before deploying
const BASE = 'http://localhost:5050/api';

@Injectable({ providedIn: 'root' })
export class ApiService {

  constructor(private http: HttpClient, private auth: AuthService) {}

  login(username: string, password: string) {
    return this.http.post<{ token: string }>(`${BASE}/auth/login`, { username, password });
  }

  submitRegistration(data: any) {
    return this.http.post(`${BASE}/registrations`, data);
  }

  getRegistrations() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.auth.getToken()}`
    });
    return this.http.get<any[]>(`${BASE}/registrations`, { headers });
  }
}
