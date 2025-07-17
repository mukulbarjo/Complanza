import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet], // Needed for <router-outlet>
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.css'
})
export class AuthLayout {}
