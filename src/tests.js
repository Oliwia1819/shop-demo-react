// const characters = [
//     {
//         name: 'Luke Skywalker',
//         height: '172',
//         mass: '77',
//         eye_color: 'blue',
//         gender: 'male',
//     },
//     {
//         name: 'Darth Vader',
//         height: '202',
//         mass: '136',
//         eye_color: 'yellow',
//         gender: 'male',
//     },
//     {
//         name: 'Leia Organa',
//         height: '150',
//         mass: '49',
//         eye_color: 'brown',
//         gender: 'female',
//     },
//     {
//         name: 'Anakin Skywalker',
//         height: '188',
//         mass: '84',
//         eye_color: 'blue',
//         gender: 'male',
//     },
// ];
const api = {
	"count": 82,
	"next": "https://swapi.dev/api/people/?page=2",
	"previous": null,
	"results": [
		{
			"name": "Luke Skywalker",
			"height": "172",
			"mass": "77",
			"hair_color": "blond",
			"skin_color": "fair",
			"eye_color": "blue",
			"birth_year": "19BBY",
			"gender": "male",
			"homeworld": "https://swapi.dev/api/planets/1/",
			"films": [
				"https://swapi.dev/api/films/1/",
				"https://swapi.dev/api/films/2/",
				"https://swapi.dev/api/films/3/",
				"https://swapi.dev/api/films/6/"
			],
			"species": [],
			"vehicles": [
				"https://swapi.dev/api/vehicles/14/",
				"https://swapi.dev/api/vehicles/30/"
			],
			"starships": [
				"https://swapi.dev/api/starships/12/",
				"https://swapi.dev/api/starships/22/"
			],
			"created": "2014-12-09T13:50:51.644000Z",
			"edited": "2014-12-20T21:17:56.891000Z",
			"url": "https://swapi.dev/api/people/1/"
		},
		{
			"name": "C-3PO",
			"height": "167",
			"mass": "75",
			"hair_color": "n/a",
			"skin_color": "gold",
			"eye_color": "yellow",
			"birth_year": "112BBY",
			"gender": "n/a",
			"homeworld": "https://swapi.dev/api/planets/1/",
			"films": [
				"https://swapi.dev/api/films/1/",
				"https://swapi.dev/api/films/2/",
				"https://swapi.dev/api/films/3/",
				"https://swapi.dev/api/films/4/",
				"https://swapi.dev/api/films/5/",
				"https://swapi.dev/api/films/6/"
			],
			"species": [
				"https://swapi.dev/api/species/2/"
			],
			"vehicles": [],
			"starships": [],
			"created": "2014-12-10T15:10:51.357000Z",
			"edited": "2014-12-20T21:17:50.309000Z",
			"url": "https://swapi.dev/api/people/2/"
		},
		{
			"name": "R2-D2",
			"height": "96",
			"mass": "32",
			"hair_color": "n/a",
			"skin_color": "white, blue",
			"eye_color": "red",
			"birth_year": "33BBY",
			"gender": "n/a",
			"homeworld": "https://swapi.dev/api/planets/8/",
			"films": [
				"https://swapi.dev/api/films/1/",
				"https://swapi.dev/api/films/2/",
				"https://swapi.dev/api/films/3/",
				"https://swapi.dev/api/films/4/",
				"https://swapi.dev/api/films/5/",
				"https://swapi.dev/api/films/6/"
			],
			"species": [
				"https://swapi.dev/api/species/2/"
			],
			"vehicles": [],
			"starships": [],
			"created": "2014-12-10T15:11:50.376000Z",
			"edited": "2014-12-20T21:17:50.311000Z",
			"url": "https://swapi.dev/api/people/3/"
		},
		{
			"name": "Darth Vader",
			"height": "202",
			"mass": "136",
			"hair_color": "none",
			"skin_color": "white",
			"eye_color": "yellow",
			"birth_year": "41.9BBY",
			"gender": "male",
			"homeworld": "https://swapi.dev/api/planets/1/",
			"films": [
				"https://swapi.dev/api/films/1/",
				"https://swapi.dev/api/films/2/",
				"https://swapi.dev/api/films/3/",
				"https://swapi.dev/api/films/6/"
			],
			"species": [],
			"vehicles": [],
			"starships": [
				"https://swapi.dev/api/starships/13/"
			],
			"created": "2014-12-10T15:18:20.704000Z",
			"edited": "2014-12-20T21:17:50.313000Z",
			"url": "https://swapi.dev/api/people/4/"
		},
		{
			"name": "Leia Organa",
			"height": "150",
			"mass": "49",
			"hair_color": "brown",
			"skin_color": "light",
			"eye_color": "brown",
			"birth_year": "19BBY",
			"gender": "female",
			"homeworld": "https://swapi.dev/api/planets/2/",
			"films": [
				"https://swapi.dev/api/films/1/",
				"https://swapi.dev/api/films/2/",
				"https://swapi.dev/api/films/3/",
				"https://swapi.dev/api/films/6/"
			],
			"species": [],
			"vehicles": [
				"https://swapi.dev/api/vehicles/30/"
			],
			"starships": [],
			"created": "2014-12-10T15:20:09.791000Z",
			"edited": "2014-12-20T21:17:50.315000Z",
			"url": "https://swapi.dev/api/people/5/"
		},
		{
			"name": "Owen Lars",
			"height": "178",
			"mass": "120",
			"hair_color": "brown, grey",
			"skin_color": "light",
			"eye_color": "blue",
			"birth_year": "52BBY",
			"gender": "male",
			"homeworld": "https://swapi.dev/api/planets/1/",
			"films": [
				"https://swapi.dev/api/films/1/",
				"https://swapi.dev/api/films/5/",
				"https://swapi.dev/api/films/6/"
			],
			"species": [],
			"vehicles": [],
			"starships": [],
			"created": "2014-12-10T15:52:14.024000Z",
			"edited": "2014-12-20T21:17:50.317000Z",
			"url": "https://swapi.dev/api/people/6/"
		},
		{
			"name": "Beru Whitesun lars",
			"height": "165",
			"mass": "75",
			"hair_color": "brown",
			"skin_color": "light",
			"eye_color": "blue",
			"birth_year": "47BBY",
			"gender": "female",
			"homeworld": "https://swapi.dev/api/planets/1/",
			"films": [
				"https://swapi.dev/api/films/1/",
				"https://swapi.dev/api/films/5/",
				"https://swapi.dev/api/films/6/"
			],
			"species": [],
			"vehicles": [],
			"starships": [],
			"created": "2014-12-10T15:53:41.121000Z",
			"edited": "2014-12-20T21:17:50.319000Z",
			"url": "https://swapi.dev/api/people/7/"
		},
		{
			"name": "R5-D4",
			"height": "97",
			"mass": "32",
			"hair_color": "n/a",
			"skin_color": "white, red",
			"eye_color": "red",
			"birth_year": "unknown",
			"gender": "n/a",
			"homeworld": "https://swapi.dev/api/planets/1/",
			"films": [
				"https://swapi.dev/api/films/1/"
			],
			"species": [
				"https://swapi.dev/api/species/2/"
			],
			"vehicles": [],
			"starships": [],
			"created": "2014-12-10T15:57:50.959000Z",
			"edited": "2014-12-20T21:17:50.321000Z",
			"url": "https://swapi.dev/api/people/8/"
		},
		{
			"name": "Biggs Darklighter",
			"height": "183",
			"mass": "84",
			"hair_color": "black",
			"skin_color": "light",
			"eye_color": "brown",
			"birth_year": "24BBY",
			"gender": "male",
			"homeworld": "https://swapi.dev/api/planets/1/",
			"films": [
				"https://swapi.dev/api/films/1/"
			],
			"species": [],
			"vehicles": [],
			"starships": [
				"https://swapi.dev/api/starships/12/"
			],
			"created": "2014-12-10T15:59:50.509000Z",
			"edited": "2014-12-20T21:17:50.323000Z",
			"url": "https://swapi.dev/api/people/9/"
		},
		{
			"name": "Obi-Wan Kenobi",
			"height": "182",
			"mass": "77",
			"hair_color": "auburn, white",
			"skin_color": "fair",
			"eye_color": "blue-gray",
			"birth_year": "57BBY",
			"gender": "male",
			"homeworld": "https://swapi.dev/api/planets/20/",
			"films": [
				"https://swapi.dev/api/films/1/",
				"https://swapi.dev/api/films/2/",
				"https://swapi.dev/api/films/3/",
				"https://swapi.dev/api/films/4/",
				"https://swapi.dev/api/films/5/",
				"https://swapi.dev/api/films/6/"
			],
			"species": [],
			"vehicles": [
				"https://swapi.dev/api/vehicles/38/"
			],
			"starships": [
				"https://swapi.dev/api/starships/48/",
				"https://swapi.dev/api/starships/59/",
				"https://swapi.dev/api/starships/64/",
				"https://swapi.dev/api/starships/65/",
				"https://swapi.dev/api/starships/74/"
			],
			"created": "2014-12-10T16:16:29.192000Z",
			"edited": "2014-12-20T21:17:50.325000Z",
			"url": "https://swapi.dev/api/people/10/"
		}
	]
}

const characters = api.results;

export default function tests(){
    test1();
    test2();
    test3();
    test4();
    test5();
    test6();
    test7();
    test8();
    test9();
    test10();
    test11();
    test12();
    test13();
    test14();
    test15();
    test16();
    test17();
    test18();
    test19();
    test20();
    test21();
    test22();
    test23();
    test24();
}

function test1(){
 
    const person = characters.map(function(el){
        return el.name;
     });
    console.log('test1', person);
   
};

function test2(){
    console.log('test2',characters.map(item => item.height));
};

function test3(){
    console.log('test3', characters.map(item => item.name + ' '+ item.height));
    
};

function test4(){
    console.log('test4', characters.map(item =>item.name.split(' ')[0]));
    
}

function test5(){
    console.log('test5', characters.filter(item => item.mass >= 100));
    
};

function test6(){
    console.log('test6', characters.filter(item => item.height <= 200));
    
};

function test7(){
    console.log('test7', characters.filter(item => item.gender === 'male'));
    
};

function test8(){
    console.log('test8', characters.filter(item => item.gender === 'female'));
    
};

function test9(){
    console.log('test9', characters.some(item => item.gender === 'male'));
    
};
 
function test10(){
    console.log('test10', characters.some(item => item.eye_color === 'blue'));
    
};

function test11(){
    console.log('test11', characters.some(item => item.height >= 200));
    
};

function test12(){
    console.log('test12', characters.some(item => item.mass <= 50));
    
};

function test13(){
    console.log('test13', characters.every(item => item.eye_color === 'blue'));
    
};

function test14(){
    console.log('test14', characters.every(item => item.mass >= 40));
    
};

function test15(){
    console.log('test15', characters.every(item => item.height <= 200));
    
};

function test16(){
    console.log('test16', characters.every(item => item.gender === 'male'));
    
};


function test17(){
   console.log('test17', characters.slice().sort((a, b) => a.mass - b.mass));
    
};

function test18(){
    console.log('test18', characters.slice().sort((a, b) => a.height - b.height));
        
};

function test19(){
    console.log('test19', characters.slice().sort((a, b) => a.gender - b.gender));
        
};

function test20(){
    console.log('test20', characters.slice().sort((a,b) => a.name.localeCompare(b.name)));
    
};

function test21(){
    console.log('test21', characters.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue.height), 0));
};

function test22(){
    console.log('test22', characters.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue.mass), 0));
};
    
    
// function test22(){
//     console.log('test22', characters.reduce((accumulator, currentValue) => accumulator + (currentValue.mass-0), 0));
// };

function test23(){
    console.log('test23', characters.reduce((accumulator, currentValue) => accumulator + currentValue.name.length, 0));
}

   
function test24(){
    console.log('test24', characters.reduce((accumulator,  currentValue) => {
        accumulator[currentValue.eye_color] = (accumulator[currentValue.eye_color] || 0) + currentValue.name.length;
        return accumulator;
    }, {}));
    
};

export function watermelon(){
	const getNextWatermelon = ()=>({size: Math.round(500+Math.random()*1000)/100});
	class Car{
		items =[];
		constructor(size){
			this.size = size;
		}
		add(i){
			if(i.size > this.size) return false;
			this.items.push(i);
			this.size -= i.size;
			return true;
		}
		count(){
			return this.items.length;
		}
	}
	let cars = ['8.00', '6.05', '9.62', '9.31', '12.89', '6.92', '6.92', '11.52'].map(s => new Car(+s*1000));
	//edit here
	let empty = [...cars];
	let arbuz = getNextWatermelon();
    // while (empty.length != 0){
	// 	let car = empty.shift();
	// 	let vlaze = true;
	// 	while (vlaze){
	// 		vlaze = car.add(arbuz);
	// 		if (vlaze){
	// 			arbuz = getNextWatermelon();
	// 		}
	// 	}
	// }
	
	while(cars.find(c=>c.add(arbuz))){
		arbuz = getNextWatermelon();
	}
	

	


	console.log('', cars, getNextWatermelon());
	//result
	console.log(cars.map(c=>c.count()));
}

