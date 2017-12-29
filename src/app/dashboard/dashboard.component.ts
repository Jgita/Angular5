import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from 'E:/Angular-4/angular-tour-of-heroes/src/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes():void{
    this.heroes = this.heroService.getHeroes();

  }

}
