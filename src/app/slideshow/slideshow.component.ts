import { Component, OnInit } from '@angular/core';
import { IImage } from './IImage';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']

})
export class SlideshowComponent implements OnInit {
	
imageUrls: (string | IImage)[] = [
    { url: '../../assets/image/csgo.jpg', caption: 'Jeu recommandé n°1', href: 'https://blog.counter-strike.net/' },
    { url: '../../assets/image/r6.jpg', caption: 'Jeu recommandé n°2', href: 'https://rainbow6.ubisoft.com/siege/fr-fr/home/'  },
    { url: '../../assets/image/sw2.jpg', caption: 'Jeu recommandé n°3', href: 'https://www.ea.com/fr-fr/games/starwars/battlefront/battlefront-2'  },

  ];
  height: string = '400px';
  minHeight: string;
  arrowSize: string = '30px';
  showArrows: boolean = true;
  disableSwiping: boolean = false;
  autoPlay: boolean = true;
  autoPlayInterval: number = 100000;
  stopAutoPlayOnSlide: boolean = true;
  debug: boolean = false;
  backgroundSize: string = 'cover';
  backgroundPosition: string = 'center center';
  backgroundRepeat: string = 'no-repeat';
  showDots: boolean = true;
  dotColor: string = '#FFF';
  showCaptions: boolean = true;
  captionColor: string = '#FFF';
  captionBackground: string = 'rgba(0, 0, 0, .35)';
  lazyLoad: boolean = false;
  hideOnNoSlides: boolean = false;
  width: string = '100%';

  ngOnInit() {
    // adding an image url dynamically.
    setTimeout(() => {
      console.log('adding an image url dynamically.');

}, 2000);}

}
