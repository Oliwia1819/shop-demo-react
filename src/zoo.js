import {locations,  animals, locName, enclosure, personal, proffesion} from './zooall'
import { animals as animal_types, Animal} from './testzoo';

const GENDER = {
    male: 0,
    female: 1,
};


class Location {

    constructor (name, x, y, ){
        this.x = x;
        this.y = y;
        this.name = name;
    }

    area() {
        return this.x * this.y;
      }

};

class Enclosure {
    constructor (inventory_number, height, weight, lenght, creatures){
        this.inventory_number = inventory_number;
        this.height = height;
        this.weight = weight;
        this.lenght = lenght;
        this.creatures = creatures;

    }

};

class Creature {
    constructor (name, gender, birthday, income, type) {
        this.name = name;
        this.gender = gender;
        this.birthday = birthday;
        this.income = income;
        this.type = type;

    };

    isEmployee(){
        return this.type instanceof Employee;
    }

    isAnimal(){
        return this.type instanceof Animal;
    }

    getAge() {
        let sec = new Date() - this.birthday;
        let year = Math.floor(sec / (1000*60*60*24*365.25));
        return year;

    }

    getDaysInZoo(){
        let sec = new Date() - this.income;
        let day = Math.floor(sec / (1000*60*60*24));
        return day;
    }

     
};



class Employee {
    constructor (proffession) {
        this.proffession = proffession;
        this.sallery = 1000;
    }

};

const locations1 = locations.map((el,i) => new Location(locName[i], el.x, el.y));

const creatures = animals.map((el) => new Creature(el.name, GENDER[el.gender], new Date(el.birthday), new Date(el.income), animal_types.find(c => el.creature === c.name)));



const vol = enclosure.map(el => new Enclosure(el.inventory_number));

const prof = proffesion.map(p => new Employee(p));

// console.log(prof);


const pers = personal.map((p,i) => new Creature(p.name, GENDER[p.gender], new Date(p.birthday), new Date(p.income), prof.find(el => el.proffession === p.profession)));


const all = pers.concat(creatures);


// console.log('all', all.map(i=>({creature: i, age:i.getAge(), days:i.getDaysInZoo(),  isAnimal:i.isAnimal(), isEmployee:i.isEmployee()})));

// let now = new Date(); 
// let today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); 
// let dob = new Date(1990, 9, 31); 
// let dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
// let age = today.getFullYear() - dob.getFullYear();

 
// if (today < dobnow) {
//   age = age-1;
// }

export default function zoo(){
    
    
    
};