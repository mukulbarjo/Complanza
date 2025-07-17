import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../../core/auth';
import { TokenStorage } from '../../../core/token-storage';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  imports: [CommonModule, FormsModule]
})
export class Login {
  form = { email: '', password: '' };
  successMsg = '';
  errorMsg = '';

  constructor(
    private authService: Auth,
    private tokenService: TokenStorage,
    private router: Router
  ) {}

  onSubmit() {

  this.errorMsg = '';

  this.authService.login(this.form).subscribe({
    next: (res) => {
      this.tokenService.saveToken(res.token);
      this.tokenService.saveUser({ email: res.email, role: res.role }); // ✅ Save role here



      const role = this.tokenService.getUser()?.role;
      console.log('Extracted role:', role);

      setTimeout(() => {
        if (role === 'ADMIN') {
          this.router.navigate(['/admin']);
        } else if (role === 'USER') {
          this.router.navigate(['/user']);
        } else {
          this.errorMsg = 'Unknown role. Access denied.';
        }
      }, 1000);
    },
    error: () => {
      this.errorMsg = 'Invalid credentials';
    }
  });
}



  goToRegister() {
    this.router.navigate(['/register']);
  }
}
