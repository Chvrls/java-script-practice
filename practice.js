/*
const myArray = [
  {
    title: 'hello world',
    author: 'Charles',
    date: 'May 21'
  },
  {
    title: 'JavaScript',
    author: 'Julia',
    date: 'May 27'
  },
  {
    title: 'Object',
    author: 'Charles',
    date: 'December 21'
  },
  {
    title: 'Array',
    author: 'Julia',
    date: 'June 21'
  }
  ];
  
  function func () {
    for (let i = 0; i < myArray.length; i++) {
      const postTitle = myArray[i].title;
      const postAuthor = myArray[i].author;
      const postDate = myArray[i].date;

      console.log(postTitle);
      console.log(postAuthor);
      console.log(postDate);
    }
    
  };
  func();
  

  const arr = ['safdsadfsdfg', 'dsfsdvsdv', 'fdssdbfddaf', 'gdfgdvd', 20, 20, 40, 50, 60, 'dsadasf', 'dfsvsv', null, null];

  function functionForArr () {
    for (let i = 0; i < arr.length; i++) {
      let output = arr[i];
      console.log(output);

      if (arr[i == null]) {
        break;
      }
    }
    //removeNull();
  };
  functionForArr();


  function removeNull () {
  let arrFiltered = arr.filter ((el) => {
    return el != null;
  });

  console.log(arrFiltered);
};

//removeNull();
 

let userInput = prompt("What is your name?").toLowerCase();
let oneUpperCase = userInput.slice(0, 1).toUpperCase();

alert("Hello " + userInput.slice(0, 1).toUpperCase() + userInput.slice(1, userInput.length));


let dogAge = prompt("Enter the dog's age to convert it to human age: ");
humanAge = ((dogAge - 2) * 4) + 21;

alert("Your dog's human age is: " + humanAge);


function getMilk (money) {
  let milk = 1.5;
  let ableToBuy = Math.floor(money / milk);

  console.log("The robot bought " + ableToBuy + " bottles of milk");
}

getMilk(5);

// take your current age
// expectancy of life span is 90 yrs old
// tells how many days weeks and months we have left
//
function lifeInWeeks (age) {
  age = prompt("How old are you?");
  let lifeSpan = 90;
  let daysLeft;
  let weeksLeft;
  let monthsLeft;

  daysLeft = (lifeSpan - age) * 365;
  weeksLeft = (lifeSpan - age) * 52;
  monthsLeft = (lifeSpan - age) * 12
  console.log("You have " + daysLeft + " days " + weeksLeft + " weeks " + monthsLeft + " months left");;
}
lifeInWeeks();



// getMilk with change
function getMilk (money) {
  let costOfMilk = 2;

  console.log("The robot bought " + calcBottles(money, costOfMilk) + " bottles of milk.");
  
  //return money % costOfMilk;
 return calcChange(money, costOfMilk);
}



function calcBottles (startingMoney, pricePerBottle) {
  let numberOfBottles = Math.round(startingMoney / pricePerBottle);

  return numberOfBottles;
}


function calcChange (startingAmount, pricePerBottle) {
  let changeAmount = (startingAmount % pricePerBottle);

  return changeAmount;
}

console.log("Hello, The change is " + getMilk(5) + " dollar/s" );


//BMI CALCULATOR


function bmiCalculator(weight, height) {
  let calculatedBMI = Math.round(weight / height**2).toFixed(2); 
  
  return calculatedBMI;
}

let bmi = bmiCalculator(65, 1.8);
console.log("Your BMI is " + bmi);


function main (number) {
  prompt("Enter the first name:");
  prompt("Enter the second name");

  alert("Your love score is " + calcRandomNumber(number) + "%");
}
// random number between 1 - 100
function calcRandomNumber (randomNumber) {
  randomNumber = Math.random();
  randomNumber *= 100;
  randomNumber = Math.floor(randomNumber) + 1;
  
  return randomNumber;
}

main();

//BMI Calculator advanced if else
// if below 18.5 you are underweight
// if the bmi is in the range of 18.5 and 24.9 you are normal weight
// if bmi is over 24.9 you are overweight

function bmiCalculator (weight, height) {
  let bmi = Math.round(weight / height**2).toFixed(1);

  if (bmi < 18.5) {
    console.log("Your BMI is " + bmi + " you are underweight");
  }
  else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Your BMI is " + bmi + " you are normalweight");
  }
  else if (bmi >= 25) {
    console.log("Your BMI is " + bmi + " you are overweight");
  }
  
}

bmiCalculator(100, 1.8);


// if modulo returns 0 then it is divisible otherwise it is not

function isLeap(year) {
  year = prompt("Enter a year to check if it is a leap year:");

  if (year % 4 !== 0) {
    console.log(year + " is not divisible by 4");
    console.log("So " + year + " is not a leap year");
  } 
  else if ((year % 4 === 0) && (year % 100 === 0) && (year % 400 === 0)){
    console.log(year + " is divisible by 4");
    console.log(year + " is  divisible by 100");
    console.log(year + " is divisible by 400");
    console.log("So " + year + " is a leap year");
  }
  else if ((year % 4 === 0) && (year % 100 !== 0)) {
    console.log(year + " is divisible by 4");
    console.log(year + " is not divisible by 100");
    console.log("So " + year + " Is a leap year");
  }
  else if ((year % 4 === 0) && (year % 100 === 0) && (year % 400 !== 0)) {
    console.log(year + " is divisible by 4");
    console.log(year + " is divisible by 100");
    console.log(year + " is not divisible by 400");
    console.log("So " + year + " is not a leap year");
  }

}
  

isLeap();
//Angela Yu's Answer:
function isLeap (years) {
  years = prompt();
  if (years % 4 === 0) {
    if (years % 100 === 0) {
      if (years % 400 === 0) {
        //return "is a leap year";
        console.log("is a leap year");
      } else {
        //return "is not a leap year";
        console.log("is not a leap year");
      }
    } else {
      //return "is a leap year";
      console.log("is a leap year");
    }
  } else {
    //return "is not a leap year";
    console.log("is not a leap year");
  }
}

isLeap();


function guestList() {
  let userName = prompt("Please type in your name");

  let guests = ["Charles", "Julia", "Andrei", "Jhulianne", "Lara"];

  if (guests.includes(userName)) {
    return console.log("Welcome");
  } else {
    return console.log("Sorry maybe next time");
  }
}
guestList();


// My solution to fizz buzz

  let output = [];

  function fizzBuzz () {
    output.push(output.length + 1); 
    
    console.log(output);
  }

  fizzBuzz();
  fizzBuzz();
  fizzBuzz();

  //Angela yu's solution to fizz buzz
  
  let output = [];
  let count = 1;

  function fizzBuzz() {

    output.push(count);
    count++

    console.log(output);
  }

  fizzBuzz();
  fizzBuzz();
  fizzBuzz();

  //my solution for the fizz buzz
  let output = [];
  let count = 1;

  function fizzBuzz () {
    output.push(count);
    count++;

    if(output.length % 3 === 0) {
      output.pop();
      output.push("Fizz");
      if (output.length % 5 === 0) {
        output.pop();
        output.push("Buzz");
        if ((output.length % 3 === 0) && (output.length % 5 === 0)) {
          output.pop();
          output.push("FizzBuzz");
        };
      }
    }
  

    
    
    

    console.log(output);
  }

  fizzBuzz();
  fizzBuzz();
  fizzBuzz();
  fizzBuzz();
  fizzBuzz();
  fizzBuzz();
  fizzBuzz();
  fizzBuzz();
  fizzBuzz();
  fizzBuzz();
  fizzBuzz();
  fizzBuzz();
  fizzBuzz();
  fizzBuzz();
  fizzBuzz();
  fizzBuzz();
  fizzBuzz();
  
  
  //Angela Yu's solution for the fizz buzz

  let output = [];
  let count = 1;

  function fizzBuzz () {

    if(count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");
    } 
    else if (count % 3 === 0) {
      output.push("Fizz");
    }
    else if (count % 5 === 0) {
      output.push("Buzz");
    }
    else {
      output.push(count);
    }
    
    count++;

   

    
    

    console.log(output);
  }

  fizzBuzz();
  fizzBuzz();
  fizzBuzz();
  fizzBuzz();
  fizzBuzz();
  fizzBuzz();
  fizzBuzz();
  fizzBuzz();
  fizzBuzz();
  fizzBuzz();
  fizzBuzz();
  fizzBuzz();
  fizzBuzz();
  fizzBuzz();
  fizzBuzz();
  fizzBuzz();
  fizzBuzz();

  */
  // My solution to whos going to buy lunch today

  let persons = ["Angela", "Ben", "Jenny", "Michael", "Chloe",];

  function whosBuyingLunch (randomNumber) {
    //console.log(persons[0]);
    //console.log(persons.length);
    randomNumber = Math.random();
    randomNumber *= persons.length;
    randomNumber = Math.floor(randomNumber);

    return console.log(persons[randomNumber] + " is going to buy lunch today");
    //console.log(randomNumber);
    //console.log(persons);
  }

  whosBuyingLunch();



  



