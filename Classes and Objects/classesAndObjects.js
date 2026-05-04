// Before ES6, JavaScript did not have a built-in class syntax.
// Instead, developers used constructor functions and prototypes to create objects and implement inheritance.
// Here's how you could create a simple class-like structure using constructor functions:

let Animal = function (username, age, gender) {
  this.username = username;
  this.age = age;
  this.gender = gender;
};

let obj = new Animal("Aditya", 20, "M");
let obj2 = new Animal("Sonia", 18, "F");

console.log(obj);
console.log(obj2);
