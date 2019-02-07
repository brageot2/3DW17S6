import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Jeu } from '../jeu';
import { JeuService }  from '../jeu.service';

@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.scss']
})
export class JeuComponent implements OnInit {
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


}
  


