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


//type coversion
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


//Truthy and Falsy Values
//Falsy values are not exactly false but will become false when we try to convert them in a booleans
// 5 falsy values: 0, '', undefined, null, NaN, false
//truthy values are true when we attempt to convert them to a boolean
//anything apart from the falsy values are truthy values examples any number that is not zero any string that is notan empty string

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean());
console.log(Boolean({}));
console.log(Boolean(''));
//conversion to boolean is always implicit not explicit, Js does type coercion to booleans in 2 scenerios 1st when using logical operator and 
//2nd in logical context like in the condition on if else statements

const money = 0;
if(money) {
  console.log("Don't spend it all 😊");
} else {
  console.log("Don't Borrow, Get a Job!");
}

const naira = 100;
if(naira) {
  console.log("Don't spend it all 😊");
} else {
  console.log("Don't Borrow, Get a Job!");
}

let height;
if(height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}

let length;
if(length) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}

//= assignment
//== loose equality operator does type coercion, introduces bug
//=== strict equality operator becos it does not perform type coercion, return wen both values and data types are the same
const age = 10;
if(age === 10)
console.log('You just became an adult (strict)');
if(age == 10)
console.log('You just became an adult (loose)');

18 === 18;
18 === 19;
'18' == 18;
'18' === 18;

const favourite = prompt("what's your favorite number?");
console.log(favourite);
console.log(typeof favourite);

if (favourite == 23) { //'23'== 23
  console.log('Cool! 23 is an amazing number!')
}

const lucky = Number(prompt("what's your lucky number?"));
console.log(lucky);
console.log(typeof lucky);

if (lucky === 34) {
  console.log('Cool! 34 is the luckiest number!')
}

const size = Number(prompt("what's your measurement?"));
console.log(size);
console.log(typeof size);

if (size === 15) {
  console.log('Wooow! You are an Aries!')
} else if (size === 25) {
  console.log('Mheeeeeennnn! You are LEO')
} else {
  console.log('You are neither an Aries or a Leo, WELCOME!')
}

const club = Number(prompt("what's your Football Club Number?"));
console.log(club);
console.log(typeof club);

if (club === 12) {
  console.log('Nice One! Up Barca!')
} else if (club === 20) {
  console.log('Bravo! Up Gunners')
} else if (club === 32) {
  console.log('Naso! Never Walk Alone')
} else {
  console.log('You are not a Football Fan, BLESSINGS!')
}

//Different Operator != loose version !== strict version
if(favourite !== 23) console.log('why not 23');
*/

const hasDriversLicense = true; // A
const hasGoodVision = false; // B (change to true to check result)

console.log(hasDriversLicense && hasGoodVision); // And operator
console.log(hasDriversLicense || hasGoodVision); // Or operator
console.log(!hasDriversLicense); // Not operator 

const shouldDrive = hasDriversLicense && hasGoodVision;

if(hasDriversLicense && hasGoodVision) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}

const isTired = true; // C set to false
console.log(hasDriversLicense || hasGoodVision || isTired);
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}