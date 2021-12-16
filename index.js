// let interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);

// // let name ="Mosh"   //string literal
// // let age = 30; // Number literal
// // let isApproved = false; //Boolean Literal
// // let firstName = undefined;
// // let selectedColor = null;

// // let person = {
// //   name: "Tony",
// //   age: 21,
// // };
// // //dot notation
// // person.name = "John";

// // // bracket notation
// // person["name"] = "Mary";
// // console.log(person.name);

// // let selectedColors = ["red", "blue"];
// // selectedColors[2] = 1;
// // console.log(selectedColors.length);

// //performing a task
// function greet(name, lastName) {
//   //body of the function
//   //logic of the function
//   console.log("Hello " + name + "" + lastName);
// }

// greet("John", "Smith");

// function square(number) {
//   return number * number;
// }
// let number = square(2);
// console.log(number);

// let x = 10;
// let y = 3;

// //increment operators(++)

// let points = 110;
// let type = points > 100 ? "gold" : "silver";
// console.log(type);

// let highIncome = true;
// let goodcreditScore = true;
// let eligibleforLoan = highIncome && goodcreditScore;
// console.log()
// let userColor = "";
// let defaultColor = "blue";
// let currentColor = userColor || defaultColor;
// console.log(currentColor);

// let a = "red";
// let b = "blue";
// console.log(a);
// console.log(b);

// let ab = [b, a];
// console.log(ab);
// Hour
//If hour is between 6am and 12pm:Good morning!
//If hour is between 12pm and 6pm:Good Afternoon!
//Otherwise:Good evening!

// let hour = 06;
// if (hour >= 6 && hour < 12) console.log("Good Morning");
// else if (hour > 12 && hour <= 18) console.log("Good Afternoon");
// else {
//   console.log("Good evening");
// }

// let role = "guest";
// switch (role) {
//   case "guest":
//     console.log("Guest USer");
//     break;

//   case "Moderator":
//     console.log("Moderator User");
//     break;

//   default:
//     console.log("Unknown User");
// }

//loops

//forloop
// for (let i =0 ;i < 5 ; i++){
//   if (i % 2 !==0) console.log(i)
// }

//While loop
// let i = 0;
// while (i <= 5) {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// }

//do while loop

// let i = 9;
// do {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// } while (i <= 5);

// let i =0;
// while(i < 5){
//     console.log(i);
//     i++;
// }

//for -in loop
// const person = {
//   name: "Tony",
//   age: 21,
//   education: {
//     primary: "Certificate",
//     secondary: "KCSE",
//     university: "degree",
//   },
// };
// for (let key in person.education) {
//   console.log(key, person.education[key]);
// }

// const colors = ["red", "green", "blue"];
// for (let index in colors) {
//   console.log(index, colors[index]);
// }

// let i = 0;
// while (i <= 10) {
//   if (i === 5) break;
//   if (i%2 ===0)

//   console.log(i);
//   i++;
// }

// let number = max(15, 8);
// console.log(number);
// function max(a, b) {
//   return a > b ? a : b;
// }

// let number = isLandscape(1920, 1080);
// function isLandscape(width, height) {
//   return width > height;
// }
// console.log(number);

// const output = fizzbuzz(5);
// console.log(output);
// function fizzbuzz(input) {
//   if (typeof input !== "number") return NaN;
//   else if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
//   else if (input % 3 === 0) return "Fizz";
//   else if (input % 5 === 0) return "Buzz";
//   else return input;
// }

//Speed Limit = 70;
// 5 -> 1point;
// Math.floor(1.3)
// 12points ->suspended
// const output = fizzBuzz(3);
// console.log(output);

// function fizzBuzz(input) {
//   if (typeof input !== "number") return NaN;
//   if (input % 3 == 0 && input % 5 == 0) return "FizzBuzz";
//   if (input % 3 == 0) return "Fizz";
//   if (input % 5 == 0) return "Buzz";
//   return input;
// }

//speed limit =70;
// 5 -> 1point
//Math.floor(1.3)
//12 points -> suspended
// checkSpeec(80);
// function checkSpeec(speed) {
//   const speedLimit = 70;
//   const kmPerPoint = 5;
//   const maxPoints = 12;
//   if (speed < speedLimit + kmPerPoint) console.log("OK!");
//   else {
//     const points = Math.floor((speed - speedLimit) / kmPerPoint);
//     if (points >= maxPoints) console.log("License Suspended");
//     else console.log("Points", points);
//   }
// }
// showNumbers(10);
// function showNumbers(numberLimit) {
//   for (let i = 0; i <= numberLimit; i++) {
//     if (i % 2 === 0) console.log(i, "EVEN");
//     else console.log(i, "ODD");
//   }
// }

//Falsy values
//undefined
//null
// ""
//false
// 0
//NaN

//OBJECT ORIENTED PROGRAMMING(OOP)

//fACTORY FUNCTIONS
// function createCircle(radius) {
//   return {
//     radius: radius,

//     draw: function () {
//       console.log("draw");
//     },
//   };
// }
//Take note of the syntax
// if a function is part of an object, we call it a method
// const circle = {
//   radius: 1,
//   location: {
//     x: 2,
//     y: 3,
//   },
//   draw: function () {
//     console.log("draw");
//   },
//   //You can also add boolean values
//   isVisible: true,
// };
// circle.location();

//Factory Functions
//Factory functions produce objects
//We use camel Noatation : oneTwoThreeFour-->Second letter is always uppercase

// function createCircle(radius, sportsgame) {
//   return {
//     radius,
//     sportsgame,
//     draw() {
//       console.log("draw");
//     },
//     //You can also add boolean values
//   };
// }
// const circle1 = createCircle(1, "NBA");
// // on this line we have created a new variable circle1 and assigned the values of function createcircle and given the radius parameter of 1
// console.log(circle1);
//CONSTRUCTOR FUNCTIONS
//We use pascal Notation The first letter of every word should be uppercase
//Dynamic Nature of objects
//every object in javascript has a property called constructor , and that references the function that was used to construct or create that object

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
//   // return this;
// }
// const another = new Circle(1);
// console.log(another);

//CONSTRUCTOR PROPERTIES
//every object has a property called constructor and it references the functiom that was used to construct / create that object

// Another thing, Functions are also objects

// remember Circle.call({},1)
// also remember Circle.apply({},[1,2])

//Value types vs reference types

// Value types are :Number,String,Boolean, Symbol,undefined,null
// Reference types are:Object, Function, Array

// let number = 10;
// function increase(number) {
//   number++;
// }
// increase(number);
// console.log(number);

// let number = 10;
// function increase() {
//   number++;
// }
// increase(number);
// console.log(number);

// const circle = {
//   radius: 1,
//   draw() {
//     console.log("draw");
//   },
// };
// for (let key in circle) console.log(key, ":", circle[key]);
// if ("radius" in circle) console.log("YES");

// //cloning an object
// const another = {};
// for (let key in circle) another[key] = circle[key];

// //but this method is old and updated so we will use another shorter one

// const another1 = Object.assign({}, circle);
// console.log(another1);

// // even a more simpler method for cloning an object is:
// const another2 = { ...circle };
// console.log(another2);

//Garbage collector
//Allocation and deallocation of memory that is not used
//went over math and string properties

// //String primitive
// const message = "hi";

// const another = new String("hi");
// console.log(message.length);

//Template Literals
//lets recap:
//Object {}
//Boolean true , false,
//String '' , ""
//then, Template literals ``
// const another = `This is my
//  'first' message`;
// console.log(another);
// //This will appear exactly as it is when logged into the console
// We can also add placeholders

// example:
// const user = "John";
// const message = `Hi ${user}--->This is the placeholder and you can add expreesion that returns a value or you can even call a function
// Thankyou for joining our mail list
// Regards,
// Tony`;
// console.log(message);

//Date Objects
// const now = new Date(0)

// console.log(now)
// we also have get and set methods

// Exercise 1 :
// const address = {
//   street: "Pewa Street",
//   city: "Nairobi",
//   zipcode: 90200,
// };
// function showAddress(address) {
//   for (let key in address) console.log(key, ":", address[key]);
//   return showAddress;
// }
// showAddress(address);

// function createAddress(street, city, zipcode) {
//   return {
//     street,
//     city,
//     zipcode,
//   };
// }
// let address = createAddress("pewaStreet", "Nairobi", 90200);
// console.log(address);

// function CreateAddress(street, city, zipcode) {
//   this.street = street;
//   this.city = city;
//   this.zipcode = zipcode;
// }

// let address = new CreateAddress("koinange", "Nairobi", "90200");
// console.table(address);

// function CreateAddress(street, city, zipcode) {
//   this.street = street;
//   this.city = city;
//   this.zipcode = zipcode;
// }
// let address1 = new CreateAddress("koinange", "Nairobi", "90200");
// let address2 = new CreateAddress("koinange", "Nairobi", "90200");
// function areEqual(address1, address2) {
//   return address1 === address2;
// }
// console.log(areEqual(address1, address2));

// This returns False since the memory allocation is different
//Object blog post
//Price Range Object
// const post = {
//   title: "Matrix",
//   body: "Action",
//   author: "Smith",
//   views: 1000,
//   comments: [
//     { author: "Smith", body: "Action" },
//     { author: "Smith", body: "Action" },
//   ],
//   isLive: true,
// };
// console.log(post);

// const priceRanges = [
//   { label: "$", tooltip: "inexpensive", minPerPerson: 0, maxPerPerson: 10 },
//   { label: "$$", tooltip: "Moderate", minPerPerson: 11, maxPerPerson: 20 },
//   { label: "$$$", tooltip: "Expensive", minPerPerson: 21, maxPerPerson: 50 },
// ];

// let restaurants = [{ averagePerPerson: 5 }];

const numbers = [3, 4];
numbers.push(1, 2, 3);
numbers.unshift(6, 5, 7);
numbers.splice(4, 0, "c", "e", "f");
console.log(numbers);
// we start by adding numbers at an array:
// At the end you use numbers.push(),
//At the beginning you use unshift,
//also for splice ..
