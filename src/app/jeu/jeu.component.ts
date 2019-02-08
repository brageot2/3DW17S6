import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Jeu } from '../jeu';
import { JeuService }  from '../jeu.service';
import { JEUX } from '../jeux';

@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.scss']
})
export class JeuComponent implements OnInit {
jeux = JEUX

  constructor(
) {}
ngOnInit(){


}


}
  


