function person() {
  this.fullName = "Tony Maluki";
  const parts = this.fullName.split(" ");
  let firstName = parts[0];
  let lastName = parts[1];
  console.log(parts);
}
person();
