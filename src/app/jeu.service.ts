import { Injectable } from '@angular/core';
import { Jeu } from './jeu';
import { JEUX } from './jeux';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  responseType: 'json' as 'json'
};

@Injectable({
  providedIn: 'root'
})



export class JeuService {
	  igdbUrl:string = 'http://localhost:3000';
jeux: Observable<Jeu[]>;

  constructor(private http:HttpClient) {
    this.jeux = of([]);
  }

  searchJeux(text: string): Observable<Jeu[]> {
    if (!text.trim()) {
      this.jeux = of([]);
    }else{
      const url = `${this.igdbUrl}/search/${text}`;
      this.jeux = this.http.get<Jeu[]>(url,httpOptions);
    }
    return this.jeux;
  }

  getJeux(id:string): Observable<Jeu> {
    const url = `${this.igdbUrl}/game/${id}`;
    return this.http.get<Jeu>(url,httpOptions);
}

 joueJeu(userid: string, gameid: string) {
    const url = `${this.igdbUrl}/users/${userid}/games/${gameid}/review`;
    const req = this.http.post(url,httpOptions).subscribe();
  }

 noteJeu(userid: string, gameid: string, note:number) {
    const body = {"score": note } ;
    const url = `${this.igdbUrl}/users/${userid}/games/${gameid}/review`;
    const req = this.http.post(url,body,httpOptions).subscribe();
  }
  
  
  
}
