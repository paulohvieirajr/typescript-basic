// classes

// data modifiers: public, private, protected

class Character {
    private name: string;
    protected readonly strength: number;
    protected skill?: number; // ? opcional

    constructor(
        name: string, 
        strength: number, 
        skill?: number // ? opcional
    ) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    };

    public Attack() : void {
        console.log(`Attack with ${this.strength} of power`);
        this.Defend(); 
    };

    private Defend() : void {
        console.log(`Defend with ${this.skill} of skill`);
    };
};

const superman:Character = new Character('Superman', 100, 80);
superman.Attack();

const batman:Character = new Character('Batman', 80, 100);
batman.Attack();

const mulherMaravilha:Character = new Character('Mulher Maravilha', 90);
mulherMaravilha.Attack();

class SuperHero extends Character {
    protected superPower: string;

    constructor(
        name: string, 
        strength: number, 
        superPower: string,
        skill?: number, 
    ) {
        super(name, strength, skill);
        this.superPower = superPower;
    };

    public UseSuperPower() : void {
        console.log(`Use super power ${this.superPower}`);
    };
}

const thor:SuperHero = new SuperHero('Thor', 90, 'Thunder', 90);
thor.Attack();
thor.UseSuperPower();
