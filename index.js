/*
let js = 'amazing';
if (js === 'amazing') 
//alert('JavaScript is FUN');
console.log('JavaScript is FUN');
    
console.log(40 + 8 + 23 - 10);
let firstName = "Matilda";
let first = 'Joel';
let firstNamePerson = "Ademofe";
let first_name = "Obiano";

console.log(firstName);
console.log(first);
console.log(firstNamePerson);
console.log(first_name);
console.log(firstName);

//Variable name conventions
let jonas_matilda = "JN";
let $function = 27;

let person = "jones";
let PI = 3.1415;

let myFirstJob = "HR Consultant"
let myCurrentJob = "Programmer"

console.log(myFirstJob);

true;
console.log(true);


let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jones");

javaScriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;

var job = "programmer"
job = "Consultant"

lastName = "Orimoloye";
console.log(lastName);


//Math Operators
const now = 2037;
const ageJones = now - 1991;
const ageSarah = now - 2018;
console.log(ageJones, ageSarah);

console.log(ageJones * 2, ageJones / 10, 2 ** 3);
//2 ** 3 means 2 raise to the power of 3 = 2 * 2 * 2

const firstName = 'Jones';
const lastName = 'Schweman';
console.log(firstName + lastName);
console.log(firstName + ' ' + lastName);

//Assignment Operators
let x = 10 + 5; //15
x += 10; // x = x + 10 (x = 15 + 10) = 25
x *= 4; // x = x * 4 (x = 25 * 4) = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
console.log(x);

//Comparison Operators
console.log(ageJones > ageSarah); //>greater, <, >=, <=
console.log(ageSarah >= 18); //>= greater or equal to

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2020); 


const now = 2037;
const ageJones = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018); //grouping has d highest precedence

//console.log(25 - 10 - 5); //left to right operation

let x, y;
x = y = 25 - 10 - 5; // JS will start from the minus operator and goes from right to left
console.log(x, y);

const averageAge = (ageJones + ageSarah) / 2
console.log(ageJones, ageSarah, averageAge);


const firstName = 'Tayo';
const job = 'Consultant';
const birthYear = '1991';
const year = 2037;

const tayo = "I'm " + firstName + ', a ' + (year - birthYear) + 'years old ' + job + '!';
console.log(tayo);

const tayoNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(tayoNew);

console.log(`Just a regular string...`);

console.log(`String with \n\
multiple \n\
lines`);

console.log(`String
multiple
line`);
*/

const price = 350;
const qualityStands = price >= 300;

if (price >= 300) {
  console.log('Butter should be added');
}

const age = 15;
const isOldEnough = age >= 18;

if(isOldEnough) {
  console.log('Sarah can start her driving lessons 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young, Wait another ${yearsLeft} years 👍`);
}

const birthYear = 1998;

let century;
if(birthYear <= 2000) {
  century = 20;
} else { 
 century = 21;
}
console.log(century);
//console.log(`You were born in the ${century}`);
console.log(`You were born in the ${century}th century`);

// type Conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear); // converts string to number,
console.log(inputYear + 18);  //inputYear variable is still a string, hence the result
console.log(Number(inputYear) + 18);  //inorder to perform the calculation the number should be used not the string

console.log(Number('Jonas')); // Becos what we are trying to convert is a string with get Nan(Not a number)
console.log(typeof NaN); //This NaN, means an invalid number

console.log(String(23)); // converts a number to a string
console.log(String(45), 45); //string type and number type, note the color, Js only converts to string, number and booleans not to null or undefined

// type Coercion
console.log('I am ' + 23 + 'years old'); // + operator trigers a coercion to strings, operation btw a string and a number and the plus operator is used the number will converted to string
console.log('I am ' + '23' + 'years old'); //
console.log('23' - '10' - 3); // - operator converted to a number operation
console.log('23' + '10' + 3); // + operator converted to a string operation
console.log('23' + '10' - 3); // both the string and the number operation is carried 
console.log('23' * '2'); // both strings converted to a number operation becos thats the only way the multiplication operator can work
console.log('23' * '2'); // same with dividing

let n = '1' + 1; // result is string 11
n = n - 1; //the string 11 is converted to a number
console.log(n);

console.log(2 + 3 + 4 + '5');
console.log('10' - '4' - '3' - 2 + '5');