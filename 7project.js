console.log(`1.Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
Programmatically subtract the value of the first element in the array from the value in the last element of the array.
Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages[0] is not allowed!
Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
Use a loop to iterate through the array and calculate the average age.`)
// 1. Array, I have chosen to use an array lateral..
const ages=[3,9,23,64,2,8,28,93];
let lastNum= ages[ages.length-1];
let firstNum = ages [0];
console.log(lastNum-firstNum)
// here i will be adding a new age to the array by using the push method:
ages.push(47);
console.log (ages);
// here i will use a for loop in oorder to iterate the average age (30.8)
let sum = 0;
for(let i = 0; i < ages.length; i++) {
  sum += ages[i];
}
const average = sum / ages.length;
console.log (average)

console.log(`Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
Use a loop to iterate through the array and calculate the average number of letters per name.
Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.`)
//2. Array,:
const names =[ 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob' ];

 //A LOOP here we have a for loop to show the average number of letters in string
let sum2= 0;
for(let i = 0; i < names.length; i++){
    sum2 += names[i].length;
}
let average2 = sum2/names.length;
console.log (average2)
// B LOOP used loop to concatenate strings withiin the array

let result = ' ';

for (let i = 0; i < names.length; i++) {
    result = result.concat(names[i]);
    if (i < names.length - 1) {
        result = result.concat(" ");
    }
}
console.log(result)

console.log(`How do you access the last element of any array?`)
// 3. you can access the last number in an array like this;
let array = [1, 2, 3, 4];
let last = array[array.length - 1];
console.log (last)

console.log(`How do you access the first element of any array?`)
// 4. In order to access the first number an array, simply;
let first =array[0];
console.log (first)

console.log(`Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.`)
 // 5. Created a New array and combined with the "names" array  ;
 const nameLengths = [3,5,3,5,4,3];
 
 for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i]);
 } 
 console.log (nameLengths);

 console.log(`Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
 `)
 //6.I am using this loop to try too sum all the numeric vslues but it is not doing what i intended, I knoow it should  not be 5
  
let sum3 = 0
for (let i =0; i<nameLengths; i++); {
    sum3+= nameLengths [1]
} console.log (sum3)

console.log (`Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
`)

//7. using a loop to concatenate word
function funcOne(word,n) {
    let result =" ";     
    for (let i =0;i < n;i++){
        result +=word;
    } return result;
}
    let repeatedWord= funcOne("Hello",3);
    console.log(repeatedWord);

    console.log(`Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
    `)
   
//8.here I am using the tick marks for the string and ${} to space it 
function funcTwo(firstName,lastName){
   const fullName= `${firstName} ${lastName}`;
    return fullName;
} 
fullName= funcTwo("Shishka","Bob");
console.log (fullName);

console.log(`Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
`)
//9.This function takes an array as the input thenn sums up iits numbers,  checks if it's less thsn or greater than 100 iit will return true if it is and false if it's not
function hyperCent(numbers){
    const sum=numbers.reduce((accumulator,current) => accumulator+current,0);
    return sum > 100;

} //first array comes up false
let arrayNine = [7,9,0,3,10,15,16];
console.log (hyperCent(arrayNine));
// this array will come up true
let arrAyy= [ 50,70,94];
console.log (hyperCent(arrAyy));
console.log(`Write a function that takes an array of numbers and returns the average of all the elements in the array`)
10.// here is a function that calculates the aversge of all the elements within an array of numbers, the .reduce was used to calculate the sum of the arra's elements
function calcAverage (numberArray){
    if (numberArray.length ===0) {
        return 0;
    }
    let sum = numberArray.reduce((accumulator,currentValue)=> accumulator+currentValue,0);
    let average= sum/ numberArray.length;
    return average;
}
// the average comes out to 30
let myArray=[10,20,30,40,50];
console.log(calcAverage(myArray));

console.log(`Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.`)
11.// here we pretty much adde the steps from the two previous problems
function averageComparison( arr1,arr2){
    const firstArrAverage = calculateAverage(arr1);
const averageSecondArr= calculateAverage(arr2);
return firstArrAverage> averageSecondArr;
}
// need to use another function to calculate average, inuse the one from the previous problem
function calculateAverage(numArray){
    if (numArray.length===0){
        return 0;
    }
    let sum= numArray.reduce((accumulator,currentValue)=> accumulator+ currentValue,0);
    let average = sum/numArray.length;
    return average;
}
let arr1=[1,2,3,4,5];
let arr2=[2,3,4,5,6];
console.log(averageComparison(arr1,arr2));
//will log false\
console.log(`Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
`)
12.//
 function willBuyDrink(isHotOutside,moneyInPocket) {
    return isHotOutside && moneyInPocket> 10.50;
}
console.log(willBuyDrink(true,11)) //this will log true because it is hot ooutside and money in pocket is greater than 10.50
console.log(`Create a function of your own that solves a problem. In comments, write what the function does and why you created it.`)
13.
// my function will calculate weekly gas usage versus available funds.we will take into account the average number of miles driiven per week , the car's fuel efficiency, the current price of gas per gallon and the weekly budget for gas, so we will compare four parameters.
 ,
function weeklyGasMoneyCalc(milesPerWeek,mpg,gasPricePerGallon,weeklyBudget) {
    // calculate gallons needed for week
    const gallonsNeeded=milesPerWeek/mpg;
    // then we;; calculate total weekly gas cost
    const totalCost= gallonsNeeded*gasPricePerGallon;
    // then find out if there's enoough money
    const enoughMoney=weeklyBudget>=totalCost;
    //then calculate the difference between budget and actual cost
    const budgetDifference=weeklyBudget-totalCost;
    //we will return an object with relevant info
}
// the last question goot a little hairy foe me to finish
    
