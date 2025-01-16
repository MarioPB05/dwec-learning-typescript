/**
 * Ejercicio 6 - Mario Perdiguero Barrera
 */
export class Animal {
    species: string;
    name: string;
    age: number;
    habitat: string;

    constructor(species: string, name: string, age: number, habitat: string) {
        this.species = species;
        this.name = name;
        this.age = age;
        this.habitat = habitat;
    }

    setHabitat(habitat: string) {
        this.habitat = habitat;
    }

    increaseAge() {
        this.age++;
    }

    info() {
        return `Especie: ${this.species} | Nombre: ${this.name} | Edad: ${this.age} | Hábitat: ${this.habitat}`;
    }
}

export class Zoo {
    animals: Animal[];

    constructor(animals: Animal[]) {
        this.animals = animals;
    }

    addAnimal(animal: Animal) {
        this.animals.push(animal);
    }

    searchAnimalsBySpecies(species: string) {
        return this.animals.filter(animal => animal.species === species);
    }

    getAnimalsByHabitat(habitat: string) {
        return this.animals.filter(animal => animal.habitat === habitat);
    }
}