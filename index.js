// Question 1
let totalValue = 2000;
let discountPercentage = 20;

if ( discountPercentage >=0 && discountPercentage <= 100 ) {
    let discountAmount = (totalValue * discountPercentage) / 100;

    let discountedPrice = totalValue - discountAmount;

    console.log("discounted value:" , discountedPrice);
} else {
    console.log("Invalid discount percentage, please enter between 0 to 100 ");
}

// question 2

let userName = "admin";
let password = "12345";

if (userName ==  "admin" && password == "12345") {

    console.log("Login Successful");
} else {
    console.log("Invalid credentials");
}

// question 3 

let inr = 850;
const usd = 1;

if (usd == 1 && inr >= 0) {

    const currencyConverter = usd * 82;

    let currencyPrinter = inr / currencyConverter;

    console.log(currencyPrinter , "Usd");
} else {
    console.log("please change only inr");
}

// Question 4

let numberOfChilds = 2;
let numberOfAdults = 1;
let numberOfSeniors = 1;

    let numberOfChildsAddition = numberOfChilds *100 ;

    let numberOfAdultsAddition = numberOfAdults * 150 + numberOfChildsAddition;

    let numberOfSeniorsAddition = numberOfSeniors * 120 + numberOfAdultsAddition;

    console.log(numberOfSeniorsAddition);


// question 5
let package = "standard";
// let package = "express";
// let package = "overnight";
switch (package) {
    case "standard":
        console.log("might take 3-5 days");
        break;
    case "express":
        console.log("1-2 days");
        break;
    case "overnight":
        console.log("would be delivered the next day.");
        break;
    default:
        console.log("Invalid package type. Please enter 'standard', 'express', or 'overnight");
        break;
}

// question 6

let name = "Mithun"
let email = "mithun.s@pw.live";
let age = 21;

if (typeof name !== "string") { 
    console.log("Name should be a string");
} 
else if (typeof email !== "string"){
    console.log("Email should be a string");
}
else{
    if (typeof age !== "number") {
        console.log("Age should be a Number");  
    }
}

// question 7

const shoppingLists = ["Mango", "Flour", "Soap", "Pen"];

for (let index = 0; index < shoppingLists.length; index++) {
    console.log(shoppingLists [index]);   
}

// question 8
let i = 10;
let ii = 1;

while (ii <= i) {
    console.log(i);
    i = i - 1
}

// question 9

const firstString = [1, 2, 999, 56, "Mithun", 1234, "pw"]

for (let index = 0; index < firstString.length; index++) {
    if (typeof firstString[index] == "string") {
        console.log(firstString[index]);
        break;
    }
    
}

// question 10

let positiveNumber = [1, 2, -3, 5, -9, -8, -7, 7];

for (let index = 0; index < positiveNumber.length; index++) {
    if (positiveNumber[index] >= 0) {
        console.log(positiveNumber[index]);
    }
    
}