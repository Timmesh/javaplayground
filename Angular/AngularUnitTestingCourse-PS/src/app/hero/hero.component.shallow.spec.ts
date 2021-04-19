import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HeroComponent } from './hero.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HeroComponent (shallow tests)', () => {
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(() => {
    // need to be careful with this though as it can hide other issues, for instance, if we mistype element names/attributes
    // look to heroes component shallow tests for a better way to handle this
    TestBed.configureTestingModule({
      declarations: [ HeroComponent ],
    });

    fixture = TestBed.createComponent(HeroComponent);
  });

  it('should have the correct hero', () => {
    fixture.componentInstance.hero = { id: 1, name: 'Spider Dude', strength: 3 };

    expect(fixture.componentInstance.hero.name).toEqual('Spider Dude');
  });

});
