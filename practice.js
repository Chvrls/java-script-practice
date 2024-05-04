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
*/

let dogAge = prompt("Enter the dog's age to convert it to human age: ");
humanAge = ((dogAge - 2) * 4) + 21;

alert("Your dog's human age is: " + humanAge);