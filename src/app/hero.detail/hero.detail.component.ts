import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';



@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero.detail.component.html',
  styleUrls: ['./hero.detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  constructor(private heroService : HeroService, private route :ActivatedRoute, private location : Location) { 

    console.log("git commit")
    //here im git commit
  }
  @Input() hero : Hero;
  ngOnInit() {
    console.log("ngOnInit is called right after the directive's data-bound properties have been checked for the first time, and before any of its children have been checked. It is invoked only once when the directive is instantiated.");
    this.route.paramMap.switchMap((params : ParamMap) => this.heroService.getHero(+params.get('id'))).subscribe((hero)=>this.hero = hero)
  }
  goBack(){
    this.location.back()
  }

}
