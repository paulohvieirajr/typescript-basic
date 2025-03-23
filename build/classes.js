"use strict";
class Character {
    constructor(name, strength, skill) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
    ;
    Attack() {
        console.log(`Attack with ${this.strength} of power`);
        this.Defend();
    }
    ;
    Defend() {
        console.log(`Defend with ${this.skill} of skill`);
    }
    ;
}
;
const superman = new Character('Superman', 100, 80);
superman.Attack();
const batman = new Character('Batman', 80, 100);
batman.Attack();
const mulherMaravilha = new Character('Mulher Maravilha', 90);
mulherMaravilha.Attack();
class SuperHero extends Character {
    constructor(name, strength, superPower, skill) {
        super(name, strength, skill);
        this.superPower = superPower;
    }
    ;
    UseSuperPower() {
        console.log(`Use super power ${this.superPower}`);
    }
    ;
}
const thor = new SuperHero('Thor', 90, 'Thunder', 90);
thor.Attack();
thor.UseSuperPower();
