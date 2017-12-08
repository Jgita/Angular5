import { Component, OnInit } from '@angular/core';

import { Hero } from 'E:/Angular-4/angular-tour-of-heroes/src/hero';
// import {HEROES} from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes', 
  templateUrl: './heroes.component.html', 
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  // heroes = HEROES;
  heroes: Hero[];
  selectedHero : Hero;

  constructor(private heroService:HeroService) {
   // this.heroes = heroService.getHeroes()
    //  console.log('h', this.heroes)
  }

  ngOnInit() {
  this.getHeroes(); 
  }

  getHeroes(): void {
   // this.heroService.getHeroes();  
    this.heroes = this.heroService.getHeroes();
  }

  onSelect(hero : Hero) : void {
    console.log('hero before', this.selectedHero);
    this.selectedHero = hero;
    console.log('hero', this.selectedHero)
  }

}
