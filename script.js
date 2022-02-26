// Okay then what should go wrong here guess brother
// Using object literal
const student2 = { name: 'faysal', job: 'developer' };

// using object constructor
const person = new Object();
// // console.log(person);

//
// const human = Object.create(null);
const human = Object.create(student2);
// // console.log(human.job);

// from class or syntactical sugar
class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const faysal = new People('faysal', 22);
// // console.log(faysal);

// using function or old rule
// class Manus {
//     constructor(name, age) { //modern way of below function
//         this.name = name;
//         this.age = age;
//     }
// }
function Manus(name, age) {
  this.name = name;
  this.age = age;
}

const man = new Manus('rajib', 12);
// // console.log(man);

// different way about object method
const student = {
  name: 'Faysal',
  id: 101,
  money: 5000,
  major: 'math',
  isRich: false,
  subject: ['english', 'economics', 'math 101', 'calculus'],
  bestFriend: {
    name: 'kundu',
    major: 'math',
  },
  takeExam: function () {
    // // console.log(`${this.name}, taking exam in ${this.major}`);
  },
  treatDey: function (expense, boksis = 50) {
    this.money = this.money - expense - boksis;
    return this.money;
  },
};

student.takeExam();
const remaining1 = student.treatDey(900, 100);
const remaining2 = student.treatDey(500, 20);
// // console.log(remaining1);
// // console.log(remaining2);

// more objects
const bottle = {
  color: 'yellow', // {key: value} pair
  hold: 'water',
  price: '50',
  isClean: true, //
};
// get all keys
const keysBottle = Object.keys(bottle);
// // console.log(keysBottle);

// get all values
const valueBottle = Object.values(bottle);
// // console.log(valueBottle);

// get both key: value in an array of array;
const pairs = Object.entries(bottle);
console.log(pairs);

// block to delete any property of objects
Object.seal(bottle);

// remove properties from objects
delete bottle.isClean;
bottle.price = 100; // can change existing properties value
bottle.height = 16; // but can't add or remove new key in an Object if the object is sealed
// // console.log(bottle);

// to make object completely unchangable use this below
Object.freeze(bottle);

/* 
    for(let i = 0; i <10; i++){};
    for( const num of numbers){} //array
    for(const prop in student){} //object
*/

for (const prop in bottle) {
  // console.log(`${prop}: ${bottle[prop]}`);
}

//
const entries = Object.entries(bottle);
// console.log(entries);
for (const [key, value] of entries) {
  // console.log(key, value);
}

const obj = { a: 1, b: 7, c: 3, length: 2 };
console.log(Object.keys(obj).length);

const obj1 = { module: 35, video: 2 };
const obj2 = { module: 35, video: 2 };
console.log(obj1 === obj2);

const getGirlFriend = (name = 'chokina') => 'name';
console.log(getGirlFriend());
// the name of our country is bangladesh
// Okay then what is the main reason for adding this brother!

// Oh I see this is happening !