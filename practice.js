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
*/

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




  



