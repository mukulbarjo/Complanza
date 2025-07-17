import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../../core/auth';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {
  form = {
    name: '',
    email: '',
    password: ''
  };
  successMsg = '';
  errorMsg = '';
  isSubmitting = false;

  constructor(private auth: Auth, private router: Router) {}

  onSubmit(): void {
    this.successMsg = '';
    this.errorMsg = '';
    this.isSubmitting = true;

    this.auth.register(this.form).subscribe({
      next: (res) => {
        console.log('✅ Registration success:', res);
        this.successMsg = res;
        setTimeout(() => this.router.navigate(['/login']), 1500);
      },
      error: (err) => {
        console.error('❌ Registration error:', err);
        this.errorMsg = 'Registration failed. Please try again.';
        this.isSubmitting = false;
      }
    });
  }
}
