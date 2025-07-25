import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Nav } from '../layout/nav/nav';
import { AccountService } from '../core/services/account-service';
import { Home } from "../feature/home/home";
import { User } from '../types/User';

@Component({
  selector: 'app-root',
  imports: [Nav, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  private accountService = inject(AccountService);
  private http = inject(HttpClient);

  protected readonly title = 'Dating App';
  protected members = signal<User[]>([])

  async ngOnInit() {
    this.members.set(await this.getMembers())
    this.setCurrentUser();
  }

  async getMembers() {

    try {
      return lastValueFrom(this.http.get<User[]>("https://localhost:5002/api/members"))
    } catch (error) {
      console.log(error);
      throw error;
    }

  }

  setCurrentUser() {
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user = JSON.parse(userString);
    this.accountService.currentUser.set(user);
  }
}
