import { toHaveStyle } from "@testing-library/jest-dom/matchers";
import { mockComponent } from "react-dom/test-utils";
import { CacheOnly } from "workbox-strategies";

export class Animal {
    constructor(name){
        this.name = name;
         
    };
   
   
};

class Monkey extends Animal {
      
};

class Lemur extends Animal {

};

class Peacock extends Animal {

};

class Elephant extends Animal {

};

class Giraffe extends Animal {

};

class Parrot extends Animal {

};

Monkey.prototype.displayName = 'Мавпа';
Lemur.prototype.displayName = 'Лемур';
Peacock.prototype.displayName = 'Павлін';
Elephant.prototype.displayName = 'Слон';
Giraffe.prototype.displayName = 'Жирафа';
Parrot.prototype.displayName = 'Папуга';

export const animals = [
    new Monkey ('Шимпанзе'),
    new Monkey ('Гібон'),
    new Monkey ('Горила'),
    new Monkey ('Павіан'),

    new Lemur ('Руконіжковий'),
    new Lemur ('Котячий'),
    new Lemur ('Чорний'),
    new Lemur ('Лорі'),

    new Elephant ('Африканський'),
    new Elephant ('Індійський'),

    new Giraffe ('Південнв'),
    new Giraffe ('Масайська'),
    new Giraffe ('Звичайна'),
    new Giraffe ('Мережана'),

    new Parrot ('Жако'),
    new Parrot ('Какаду'),
    new Parrot ('Ара'),
    new Parrot ('Хвилястий'),
    new Parrot ('Розела'),
];
// console.log('animals', animals.map(item => item.displayName + ': ' + item.name ).join("\n"));

export default function Animalss(){

    console.log();


};

 






  







