import { Component, signal } from '@angular/core';
import { userModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  protected currentUser = signal<userModel | null>(null)

  constructor(private router: Router) {
    try {
      this.currentUser.set(UserService.getActiveUser())
    } catch {
      
      this.router.navigate(['/login'])
    }
  }
}
 