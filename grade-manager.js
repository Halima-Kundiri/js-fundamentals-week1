let grades = [56,85,93,65,83,93,74];
let highestGrade = Math.max(...grades);
console.log("the highest grade is "+ highestGrade);

let lowestGrade = Math.min(...grades);
console.log("the lowest grade is "+ lowestGrade);

//  An array was defined and an the obeject math was used to determine the maximum and minimum numbers in the array
// The spread opertaor ... was essential for the math obeject to treat each item in the array as individual arguments.

let count = 0;
for( let i = 0; i < grades.length; i++){
    if (grades[i] > 80){
        count++;
    }
}
console.log("the count of numbers that are higher than 80 is " +count);
// count is defined as 0. a For loop is initiated from the first item in the array , the loop continues through the entire 
// length of the array and the value of i increases by 1. Now if grades is greater than 80 it increases by 1

let sum = grades.reduce((acc,grade) => acc + grade, 0);
let average = sum/ grades.length
console.log(" the average of the array length is "+ average);


//  the average is defined as the sum fo all the numbers , divided by number of items. reduce sums all the numbers in the arrays.
// averrage is now a varible that inculdes thes sum divided by the array length. 

// Challenges
// 1. There was no inbuliit function for average but i used the logic of finding the averyage to work around it. 
// 2. The use of the spread opertaor was soemthing completly new to me. i thought of using an If statemnt for the count variable. 
//  i thought it was not a fool proof way. 
// 3. I had a problem with understanding the callback function for the accumulator. I solved this by looking it up and futher understanding 
// how reduce works.

