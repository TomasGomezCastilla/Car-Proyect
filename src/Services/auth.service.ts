import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {

  // ----------- ATRIBUTES ------------------------------------------------------------
  public userProfile: any;
  public auth0 = new auth0.WebAuth({
    clientID: 'x6mEq1xqWkr730EKMD43N7gY227CZmpe',
    domain: 'rpaezbas.auth0.com',
    responseType: 'token id_token',
    audience: 'https://rpaezbas.auth0.com/userinfo',
    redirectUri: 'http://10.114.106.79:4200/login/',
    scope: 'openid profile read:messages'
  });

  //------------ CONSTRUCTOR ----------------------------------------------------------------
  constructor(public router: Router) {
  }

  //----------  METHODS -------------------------------------------------------------------
  
  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['login']);
      } else if (err) {
        this.router.navigate(['/login']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }



















/*      VERSION 1.1

  // ATRIBUTES
  public sessionActived:boolean;
  private authToken;

  // CONSTRUCTOR
  constructor() {
    this.sessionActived = true;
    this.authToken = {headers: {
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3JwYWV6YmFzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1YWNiOTM0NTQzYzg3ZjExNDllZmRiMWMiLCJhdWQiOiJ4Nm1FcTF4cVdrcjczMEVLTUQ0M043Z1kyMjdDWm1wZSIsImlhdCI6MTUyMzUxNzM2OCwiZXhwIjoxNTIzNTUzMzY4fQ.VSgvchmYZ_sdsmkNRUBFHVhBZMS-PZBFbO1HgFkEsuw',
    }
    };

   }

   // METHODS
   newAuthToken(token:string){
    this.authToken.headers.Authorization = "Bearer " + token;
   }

   getAuthToken():object{
     return this.authToken;
   }
*/
}
