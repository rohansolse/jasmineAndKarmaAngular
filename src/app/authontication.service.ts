import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthonticationService {

  constructor() {
    this.authonticate()
  }
  authonticate() {
    localStorage.setItem('user', 'rohansolse')
  }

  isAuthonticated() {
    return (!!localStorage.getItem('user'))
  }
}
