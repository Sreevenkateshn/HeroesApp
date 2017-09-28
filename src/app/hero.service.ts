import { Injectable } from '@angular/core';
import { Hero } from './Hero'
import  { HEROES } from './mock-heroes'

@Injectable()
export class HeroService {

  constructor() { }

  getHeroesSlowly(): Promise<Hero[]> {
    console.log("Get Heroes function in HeroService")
    return new Promise(resolve =>{
      setTimeout(() => resolve(HEROES),2000)
    })
  }
  getHeroes(): Promise<Hero[]> {
    console.log("Get Heroes function in HeroService")
    return Promise.resolve(HEROES);
  }

  getHero(id:number):Promise<Hero>{
    return this.getHeroes().then(Heroes => Heroes.find(hero => hero.id == id))
  }
}
