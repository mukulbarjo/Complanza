import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { TokenStorage } from './token-storage';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  private platformId = inject(PLATFORM_ID);

  constructor(private tokenService: TokenStorage, private router: Router) {}

  canActivate(): boolean {
    // ✅ Only run in browser to avoid localStorage error
    if (!isPlatformBrowser(this.platformId)) {
      return false;
    }

    const token = this.tokenService.getToken();
    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
