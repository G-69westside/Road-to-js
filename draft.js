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

const circle = {
  radius: 12,
  draw() {
    console.log("draw");
  },
};

for (let key in circle) {
  console.log(key,':', circle[key]);
}
