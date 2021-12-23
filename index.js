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

// const numbers = [3, 4];
// numbers.push(1, 2, 3);
// numbers.unshift(6, 5, 7);
// numbers.splice(4, 0, "c", "e", "f");
// console.log(numbers);
// we start by adding numbers at an array:
// At the end you use numbers.push(),
//At the beginning you use unshift,
//also for splice ..

//Finding elements in an array
//We use .index0f() to see the index of the item we want to find

// const numbers = [1, 2, 3, 4];
// numbers.indexOf(1);
// console.log(numbers.indexOf(8));
// //This gives the output as (-1 ) since this item is not available
// // Look at these one:
// console.log(numbers.includes(1)); //returns true,
// //This checks if this item is available and returns true if availbale, otherwise,false

//  const courses = [
//    { id: 1, name: "Ben" },
//   { id: 3, name: "Bensss" },
// ];

// console.log(courses.includes({ id: 1, name: "Ben" }));
// //This returns false since these two objects target different reference points in memory

// //Now lets look at this code below:
// var array = [5, 12, 8, 130, 44];
// var found = array.find(function (element) {
//  return element > 10;
// });
//  console.log(found);
// //This applies to object literals eg below:

// const courses = [
//   { id: 1, name: "Ben" },
//   { id: 3, name: "Bensss" },
// ];
// const found = courses.find(function (element) {
//   return courses.name != "Ben";
// });
// console.log(found);

// let isPositive = (number) => number >= 0;

//BrB Sturday Break

// document.getElementById("page-banner");
// //This grabs this element
// let banner = document.getElementById("page-banner");

// let titles = document.getElementsByClassName("title");

// //We then turn this variable titles to arrays as ashown below

// let arr = Array.from(titles);
// console.log(arr);

// //So now arr is now an array
// arr.forEach(function (item) {
//   console.log(item);
// });

// //Now we look at Querying the document
// const wrap = document.querySelector("#wrapper");
// console.log(wrap);
// const wmf = document.querySelector("#book-list li:nth-child(2) .name");
// console.log(wmf);

// //Now we look at the selectorAll for when we have a list of more than 1 element to be chosen
// let books = document.querySelectorAll("#book-list li .name");
// console.log(books);

// let books1 = Array.from(books);
// books1.forEach(function (item) {
//   console.log(item);
// });

//Changing Text and HTML Content
// let books = document.querySelectorAll("#book-list li .name");
// Array.from(books).forEach(function (book) {
//   book.textContent += "test";
//   //This code must run from this loop
//   //Also, we can append (write next to) the already existing text
//   // and this can be done by book.textContent += "(test)";
// });
// //This literally grabs the textcontent
// //As you can see, we have changed variable books to an array but that is not neccessary, we can still work with it without changing into an array since the output will be a nodeList

//const bookList = document.querySelector("#book-list");
//console.log(bookList.innerHTML);
//bookList.innerHTML = "<h1>Books and more books</h1>";
//bookList.innerHTML += "<p>This is how you add HTML </P>";

//Now you can also use arrow Functions to make it shorter;
//Have a look at it below:
// let book = document.querySelectorAll("#book-list li .name");

// book.forEach((books) => {
//   books.textContent = "test";
// });

//Now we look at Nodes
// const banner = document.querySelector("#page-banner");
// console.log("#page-banner node type is", banner.nodeType); //This returns the type of node
// console.log("#page-banner node name is", banner.nodeName); // This returns the node name :div ,h1 etc
// console.log("#page-banner has child nodes", banner.hasChildNodes()); // This returns true if a node has child elements otherwise false

// const clonedBanner = banner.cloneNode(true); // This clones the whole nodes aswell as the child nodes
// const clonedBanner = banner.cloneNode(false); // This returns the cloned node but no child nodes

// Now we look at traversing the DOM(part 1)
// const bookList = document.querySelector("#book-list");
// console.log(bookList.parentElement);
// console.log(bookList.parentNode); // This returns the parent node of the current node
// //This above works all the same
// console.log(bookList.parentNode.parentNode); // This returns 2 steps above the hierarchy
// console.log(bookList.childNodes); // This grabs all the nodes including all the line breaks etc
// console.log(bookList.children); //This grabs ONLY the the children nodes and comes as a HTML COLLECTION

//Now we lok at traversing the dom element from children to children
const book = document.querySelector("#book-list");
console.log(book.nextSibling);
console.log(book.nextElementSibling); // This ignores all the line breaks
console.log(book.previousSibling);
console.log(book.previousElementSibling); // This ignores all the line breaks

book.previousElementSibling.querySelector("p").innerHTML;

//Thurs Break
