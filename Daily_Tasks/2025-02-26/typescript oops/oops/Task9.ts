class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }
}

class Tiger extends Animal {
    constructor(name: string) {
        super(name, 'Tiger');
    }

    roar() {
        console.log(`${this.name} the tiger is roaring!`);
    }
}


const tiger = new Tiger('Sheru');
tiger.roar(); 