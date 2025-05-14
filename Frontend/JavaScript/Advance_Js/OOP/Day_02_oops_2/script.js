// prototype property of constructor function

// prototype variable

function Toffee(name) {
  this.name = name;
}
Toffee.prototype.price = 10;

let t1 = new Toffee("Kacha Aam");
console.log(t1);
console.log(t1.price);

let t2 = new Toffee("Mango Bite");
console.log(t2);
console.log(t2.price);

// prototype function

function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;

  Person.prototype.sayHello = function () {
    console.log(`Hello ${this.name}`);
  };
}

let person1 = new Person("Harsh", 26, "Male");
console.log(person1);
person1.sayHello();

let person2 = new Person("Karan", 21, "Male");
console.log(person2);
person2.sayHello();

// why use this to access variable name

function Candy(name, price) {
  this.name = `#${name}`;
  this.price = price;
  this.printMyName = function () {
    console.log(`${this.name}`);
  };
  this.printMyPrice = function () {
    console.log(`${this.price}`);
  };
}

let candy1 = new Candy("Kachha Aam", 2);
console.log(candy1);
candy1.printMyName();
candy1.printMyPrice();

let candy2 = new Candy("Mango Bite", 1);
console.log(candy2);
candy2.printMyName();
candy2.printMyPrice();

//  some more example

function Employee(name, age, id, salary) {
  this.name = name;
  this.age = age;
  this.id = id;
  this.salary = salary;

  Employee.prototype.printDetails = function () {
    console.log(
      `${this.name} is my name I am ${this.age} years old and my id is ${this.id} and my salary is ${this.salary}`
    );
  };
}

let employee1 = new Employee("Harsh", 28, 1234, 500000);
console.log(employee1);
employee1.printDetails();
