import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero.detail/hero.detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { RouterModule, Routes } from '@angular/router';

import { HttpModule } from '@angular/http';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

const routes = [
    {path:"heroes",component:HeroesComponent},
    {path:"dashboard",component:DashboardComponent},
    {path: '',redirectTo: '/dashboard',pathMatch: 'full'},
    {path: 'detail/:id',component: HeroDetailComponent,pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule{

}