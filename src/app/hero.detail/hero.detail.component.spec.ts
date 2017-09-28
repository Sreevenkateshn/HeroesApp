import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hero.DetailComponent } from './hero.detail.component';

describe('Hero.DetailComponent', () => {
  let component: Hero.DetailComponent;
  let fixture: ComponentFixture<Hero.DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hero.DetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hero.DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
