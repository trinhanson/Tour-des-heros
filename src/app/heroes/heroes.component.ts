import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';
import * as introJs from 'intro.js/intro.js';
import { trigger, state, style, animate, transition, useAnimation } from '@angular/animations';
import { slideInRight } from 'ng-animate';

@Component({
  selector: 'app-heroes',
  animations: [
    trigger('slideInRight', [
      transition('void => *', useAnimation(slideInRight))
    ])
  ],
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  /*selectedHero: Hero;*/
  heroes : Hero[];
  //introJS = introJs();

  /*onSelect(hero : Hero): void {
    this.selectedHero = hero;
  }*/

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if(!name) { return; }
    this.heroService.addHero({name} as Hero).subscribe(hero => {
      this.heroes.push(hero);
    });
  }

  delete(hero : Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe(); // Toujours subscribe un observable sinon delete requête non envoyée au server par service
  }

  constructor(private heroService: HeroService) {

    /*this.introJS.setOptions({
      steps: [
        {
          element:'#step3',
          intro: "Nous avons ici la liste des héros disponibles",
          position: 'right'
        }
      ]
    });*/
  }

  ngOnInit() {
    this.getHeroes();
    //this.introJS.start();
  }

}
