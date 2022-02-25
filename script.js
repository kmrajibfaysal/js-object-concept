// Using object literal
const student = { name: 'faysal', job: 'developer' };

// using object constructor
const person = new Object();
console.log(person);

//
// const human = Object.create(null);
const human = Object.create(student);
console.log(human.job);

// from class or syntactical sugar
class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const faysal = new People('faysal', 22);
console.log(faysal);

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

const man = new Manus('golam', 12);
console.log(man);
