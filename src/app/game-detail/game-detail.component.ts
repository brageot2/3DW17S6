import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Jeu } from '../jeu';
import { JeuService }  from '../jeu.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {
	@Input() jeu: Jeu;

  constructor(
  private route: ActivatedRoute,
  private jeuService: JeuService,
  private location: Location
) {}
ngOnInit(){

  const id = +this.route.snapshot.paramMap.get('id');
  this.jeuService.getJeux(String(id))
    .subscribe(jeu => this.jeu = jeu);

}
jouerJeu(gameid: string) {
     this.jeuService.joueJeu("1235", gameid);
  }
noterJeu(gameid: string, note: string) {
     this.jeuService.noteJeu("1235", gameid , +note);
  }
}
