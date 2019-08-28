import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import * as introJs from 'intro.js/intro.js';
import { HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    
  ]
})
export class AppComponent implements OnInit {

  private urlParams = new HttpParams();

  getUrlParameter(name:string){
    console.log(window.location.search);
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    console.log(results);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }



  @Input() title = this.getUrlParameter('title');
  introJS = introJs();

  constructor(){
    //window.onload =
    this.introJS.setOptions({
      steps: [
        {
          intro: "Voici la page d'accueil de l'application"
        },
        {
          intro: "Nous allons voir ensemble comment utiliser cette application"
        },
        {
          element:'#step1',
          intro: "L'onglet Dashboard permet de nous rendre à la page d'accueil"
        },
        {
          element:'#step2',
          intro: "L'onglet Heroes permet d'accéder à la liste des héros disponibles"
        },
        {
          element:'#step3',
          intro: "Nous avons ici les 4 héros favoris du moment"
        }
      ]
    });
  }

  ngOnInit(){
    this.introJS.start();
  }
}
