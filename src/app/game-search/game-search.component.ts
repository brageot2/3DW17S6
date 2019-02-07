import { Component, OnInit } from '@angular/core';
 
import { Observable, Subject } from 'rxjs';
 
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
 
import { Jeu } from '../jeu';
import { JeuService }  from '../jeu.service';

@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.scss']
})
export class GameSearchComponent implements OnInit {

   jeux$: Observable<Jeu[]>;
  private searchTerms = new Subject<string>();
 
  constructor(private jeuService: JeuService) {
	  this.searchTerms = new Subject<string>();
	  
  }

ngOnInit(): void {
    this.jeux$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => {
        console.log('search '+term);
        return this.jeuService.searchJeux(term);
      })
    );
  }

  search(term: string): void {
     this.jeuService.searchJeux(term);
  }

}
