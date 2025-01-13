// 1. Variables and Types

//Types:
// String
// Numbers
// Boolean
// Array
// Object
// Function

let courseName = "Software Engineering"; // string
var weekCount = 6; // number
const isActive = true; // boolean
let grades = [95, 88, 92]; // array

let subjects = [
  {
    subject: "Mathematics",
    grade: "A",
  },
  {
    subject: "English",
    grade: "B",
  },
];

const student = {
  name: "Halima Kundiri",
  age: 20,
  grades: [95, 88, 92],
  gender: "female",
};

courseName = "Data Entry";

// access array

// access object
// console.log(student.age);
// console.log(student["age"]);

//access array
// console.log(subjects[1]);

//array methods
// push, pop, shift, unshift, splice
grades.push(34);
console.log(grades);

// grades.pop();

grades.splice(1, 2);
console.log(grades);