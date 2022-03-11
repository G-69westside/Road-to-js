// const circle = {
//   radius: 12,
//   draw() {
//     console.log("draw");
//   },
// };

// for (let key in circle) {
//   console.log(key, circle[key]);
// }

// let alien = {
//   name: "Tony",
//   tech: "JS",
//   laptop: {
//     CPU: "i5",
//     brand: "Asus",
//     RAM: "4GB",
//   },
// };

// for (let key in alien.laptop) {
//   console.log(key, ":", alien.laptop[key]);
// }

// function circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }
// const dummy_circle = new circle();

// for (let key in dummy_circle) {
//   console.log(key);
// }

// // From line 32, is const dummy_circle same as:

// // function dummy_circle(radius){
// //   this.radius = radius;
// //   this.draw = function () {
// //     console.log("draw");
// //   };
// // }

// const circle = {
//   radius: 12,
//   draw() {
//     console.log("let me draw");
//   },
// };
// // const circle_copy = {};
// // for (let key in circle) {
// //   circle_copy[key] = circle[key];
// //   console.log(key, ":", circle_copy[key]);
// // }

// // const dummy = Object.assign({}, circle);
// // for (let key in dummy) {
// //   console.log(key, ":", dummy[key]);
// // }

// const dummy = { ...circle };
// console.log(dummy);

// String object

// const message = "This is my \n'first message'";
// console.log(message);

// // Template Literals

// const another = `This is my
// first message`;
// console.log(another);

// const name = "Tony";
// const mail = `Hi ${name}, Thankyou`;
// console.log(mail);

//The date Objects

// const date_today = new Date();
// console.log(date_today);

// const date1 = new Date(2018, 4, 11, 9);
// console.log(date1);

// const address = {
//   street: "pewa",
//   city: "Nairobi",
//   zipCode: 90200,
// };
// function showAddress(address) {
//   for (let key in address) {
//     console.log(key, ":", address[key]);
//   }
// }
// showAddress(address);

// function address_fun() {
//   const address = {
//     street: "pewa",
//     city: "Nairobi",
//     zipCode: 90200,
//   };
// }

// function Address(street, city, zipCode) {
//   this.street = street;
//   this.city = city;
//   this.zipCode = zipCode;
// }
// let address1 = new Address("pewa", "Nairobi", 90200);
// let address2 = new Address("pewa", "Nairobi", 90200);

// function areEqual(address1, address2) {
//   if (address1 === address2) {
//     console.log("They are equal");
//   } else {
//     console.log("They are not equal");
//   }
// }

// areEqual(address1, address2);
// // Object equality
// function areSame(address1, address2) {
//   if (
//     address1.street === address2.street &&
//     address1.city === address2.city &&
//     address1.zipCode === address2.zipCode
//   ) {
//     console.log("They are same");
//   } else {
//     ("They are not the same");
//   }
// }
// areSame(address1, address2);
// const blog = {
//   title: "The Great man",
//   body: "Good book",
//   author: "Amstrong Anderson",
//   view: 6996,
//   comments: [
//     {
//       author: "Tony",
//       body: "Good work",
//     },
//   ],
//   isLive: true,
// };

// for (let key in blog) {
//   console.log(key, ":", blog[key]);
// }

// function Post(title, body, author) {
//   this.title = title;
//   this.body = body;
//   this.author = author;
//   this.views = 0;
//   (this.comments = []), (this.isLive = false);
// }

// let blog = new Post("Wise mans", "Good book", "Amstrong");

// for (let key in blog) {
//   console.log(key, ":", blog[key]);
// }

const priceRanges = [
  { label: "$", tooltip: "inexpensive", minPerPerson: 0, maxPerPerson: 10 },
  { label: "$$", tooltip: "moderate", minPerPerson: 11, maxPerPerson: 20 },
  { label: "$$$", tooltip: "Expensive", minPerPerson: 21, maxPerPerson: 30 },
];
let restaurants = [{ averagePerPerson: 5 }];

const User = {
  name: "Tony",
  age: 21,
  interests: [],
};

// const numbers = [3, 4];

// numbers.splice(2, 0, 5, 77);
// console.log(numbers);

// const numbers = [1, 2, 3, 4, 3];

// console.log(numbers.includes(1));

// let numbers = [1, 2, 3, 4];
// let another = numbers;
// // numbers.length = 0;
// // numbers.splice(0, numbers.length);
// while (numbers.length > 0) numbers.pop();
// console.log(numbers);

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = [...first, "a", ...second, "b"];
// console.log(combined);

// const numbers = [1, 2, 3];
// // for (let number of numbers) {
// //   console.log(number);
// // }
// const joined = numbers.join("-");
// console.log(joined);

// const message = "This is my first message";
// const parts = message.split(" ");
// console.log(parts);
// const combined = parts.join("-");
// console.log(combined);

// const numbers = [2, 1, 5, 2, 2];
// numbers.sort();
// console.log(numbers);
// numbers.reverse();
// console.log(numbers);

// const students = [
//   { id: 1, name: "Smith" },
//   { id: 2, name: "Jane" },
// ];
// students.sort(function (a, b) {
//   if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
//   if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
//   return 0;
// });

// console.log(students);

// const numbers = [1, 2, 3];
// const allPositive = numbers.every(function (value) {
//   return value >= 0;
// });
// console.log(allPositive);

// let arr = [];
// while (arr.length < 100) {
//   let randomNo = Math.floor(Math.random() * 100) + 1;

//   if (arr.indexOf(randomNo) === -1) {
//     arr.unshift(randomNo);
//   }
// }
// arr.unshift("b");

// const allPositive = arr.every(function (value) {
//   return value >= 0;
// });

// console.log(allPositive);

// const courses = [
//   { id: 1, name: "Node.js" },
//   { id: 2, name: "Javascript" },
// ];

// courses.sort(function (a, b) {
//   if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
//   if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
//   return 0;
// });

// console.log(courses);

// const numbers = [1, -1, 2, 3];
// const filtered = numbers.filter((value) => {
//   return value >= 0;
// });

// const items = filtered.map((item) => {
//   const obj = {
//     name: "Tony",
//   };
//   return obj;
// });

// console.log(items);

// const numbers = [1, -5, 2, 3];
// const filtered = numbers.filter(function (value) {
//   return value >= 0;
// });

// const items = filtered.map(function (n) {
//   const obj = { value: n };
//   return obj;
// });
// const html = "<ul>" + items.join("") + "</ul>";
// console.log(items);

// let sum = 0;
// for (let number of numbers) {
//   sum = sum + number;
// }

// const sum = numbers.reduce(function (accumulator, currentValue) {
//   return accumulator + currentValue;
// });
// console.log(sum);

// function arrayFromRange(min, max) {
//   const output = [];
//   for (let i = min; i <= max; i++) output.push(i);
//   return output;
// }
// const numbers = arrayFromRange(4, 1);
// console.log(numbers);
// const numbers = [1, 2, 3, 4];
// function includes(array, searchElement) {
//   for (let element of array) if (element === searchElement) return true;
//  return false;
// }
// console.log(includes(numbers, 15));

const numbers = [1, 2, 3, 4, 1, 1, 6];
function except(array, excluded) {
  const output = [];
  for (let element of array)
    if (excluded.indexOf(element) == -1) output.push(element);
  return output;
}
const output = except(numbers, [1, 2]);
console.log(output);
