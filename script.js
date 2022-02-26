// Using object literal
const student2 = { name: 'faysal', job: 'developer' };

// using object constructor
const person = new Object();
console.log(person);

//
// const human = Object.create(null);
const human = Object.create(student2);
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

const man = new Manus('rajib', 12);
console.log(man);

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
    console.log(`${this.name}, taking exam in ${this.major}`);
  },
  treatDey: function (expense, boksis = 50) {
    this.money = this.money - expense - boksis;
    return this.money;
  },
};

student.takeExam();
const remaining1 = student.treatDey(900, 100);
const remaining2 = student.treatDey(500,20);
console.log(remaining1);
console.log(remaining2);
