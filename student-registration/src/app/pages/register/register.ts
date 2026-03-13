import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  constructor(private api: ApiService) {}

  submitted = false;
  loading = false;
  errorMsg = '';

  formData = {
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    gender: '',
    courseEnrolled: '',
    batchYear: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  };

  courses = ['B.Tech', 'M.Tech', 'BCA', 'MCA', 'B.Sc', 'M.Sc', 'MBA', 'BBA'];

  onSubmit(form: NgForm) {
    if (form.invalid) {
      Object.values(form.controls).forEach(c => c.markAsTouched());
      return;
    }

    this.loading = true;
    this.errorMsg = '';

    const payload = { ...this.formData };

    this.api.submitRegistration(payload).subscribe({
      next: () => {
        this.submitted = true;
        this.loading = false;
      },
      error: (err) => {
        this.errorMsg = 'Something went wrong. Please try again.';
        this.loading = false;
        console.error('Registration error:', err);
      }
    });
  }

  resetForm() {
    this.submitted = false;
    this.formData = {
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      dateOfBirth: '',
      gender: '',
      courseEnrolled: '',
      batchYear: '',
      address: '',
      city: '',
      state: '',
      pincode: ''
    };
  }
}
