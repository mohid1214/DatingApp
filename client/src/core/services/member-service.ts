import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Member } from '../../types/member';
import { AccountService } from './account-service';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private accoutService = inject(AccountService);
  private http = inject(HttpClient);
  private baseUrl = environment.apiUrl;

  getMembers(){
    return this.http.get<Member[]>(this.baseUrl + 'members',this.getHttpOptions());
  }

  getMember(id: string){
    return this.http.get<Member>(this.baseUrl + 'members/'+ id),this.getHttpOptions();
  }

  private getHttpOptions(){
    return{
      headers: new HttpHeaders({
        Authorization : 'Bearer ' + this.accoutService.currentUser()?.token
      })
    }
  }
}
