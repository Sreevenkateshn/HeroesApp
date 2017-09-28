import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {Router} from '@angular/router';
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  title = 'Heroes list';
  selectedHero:Hero
  // hero:Hero = { id :1, name:"Prabhas",color:"red"}
  Heroes : Hero[];
  
  constructor(private heroService: HeroService,private router : Router){
    
  }

  ngOnInit():void{
    this.getHeroes();
  }
  getHeroes():void{
    this.heroService.getHeroesSlowly().then((heroes => this.Heroes = heroes));
  }
  onSelectHero(hero:Hero):void{
    this.selectedHero = hero;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}