function isPrime(number){
    if(number < 2 ){
        return false;
    }
    // The function isPrime has a parameter which is number since 0 and 1 are not prime numbers this if statement ditates the 
    // the response, for 0 and 1 as they are not prime numbers.
    for(let i = 2; i < number; i++){
        if(number % i === 0){
            return false;
        }  
    }
    // the for loop will have a start, i has to be less than the input of isprime and that creates a list of numbers
    // that starts at 2 and ends before the value of (number). The if statements checks that when the value of number 
    // provides an even divison false would be returned as it is not a prime number and true if there is a reminder hinting 
    // to an uneven division and hence a prime number. 
    return true;
}


console.log(isPrime(7));
console.log(isPrime(6));



//  Challlenges
// 1. as we discuseed this task would be completed with a formula, from my understanding formuals provide a fool prove method 
// of excetting tasks. I couldnt understand anything i came across. I did more reserch and decided to go for this method
// as it provides the way to solve it. I will make more attempts to study how to handle tasks with formulas in the future. 




