// JS: reviewing simple to advanced js again before going back to React
// notes from https://www.youtube.com/watch?v=lfmg-EJ8gm4&t=1114s

// #1   JavaScript tutorial for beginners
// #2   Variables
// #3   Arithmetic operators
// #4   Accept user input
// #5   Type conversion
// #6   Constants
// #7   Counter program
// #8   Math object
// #9   Random number generator
// #10  If statements
// #11  Checked property
// #12  Ternary operator
// #13  Switches
// #14  String methods
// #15  String slicing
// #16  Method chaining
// #17  Logical operators
// #18  Strict equality
// #19  While loops
// #20  For loops
// #21  Number guessing game
// #22  Functions
// #23  Variable scope
// #24  Temperature conversion program
// #25  Arrays
// #26  Spread operator
// #27  Rest parameters
// #28  Dice Roller program
// #29  Random password generator
// #30  Callbacks
// #31  forEach()
// #32  map()
// #33  filter()
// #34  reduce()
// #35  Function expressions
// #36  Arrow functions
// #37  JavaScript Objects
// #38  What is THIS
// #39  Constructors
// #40  Classes
// #41  STATIC keyword
// #42  Inheritance
// #43  SUPER keyword
// #44  Getters & Setters
// #45  Destructuring
// #46  Nested objects
// #47  Arrays of objects
// #48  Sorting
// #49  Shuffle an array
// #50  Dates
// #51  Closures
// #52  setTimeout()
// #53  Digital Clock program
// #54  Stopwatch program ⏱
// #55  ES6 Modules
// #56  Asynchronous code
// #57  Error handling
// #58  Calculator program
// #59  What is the DOM?
// #60  Element selectors
// #61  DOM navigation
// #62  Add & change HTML
// #63  Mouse events
// #64  Key events
// #65  Hide/show HTML
// #66  NodeLists
// #67  classList
// #68  Rock Paper Scissors
// #69  Image Slider
// #70  Callback Hell?
// #71  Promises
// #72  Async/Await
// #73  JSON files
// #74  Fetch data from an API
// #75  Weather App project

// console.log(`Hello`);
/*
   create a popup alert
*/

// window.alert(`This is an alert`);

document.getElementById('notesH1').textContent = `JS Notes`;
// document.getElementById('notesP').textContent = `paragraph text`;

/*
   notes on ===================    variables behave as if it were the value it contains   =======================================
   1. declaration  let x
   2. assignment   x = 100

    let x;
    x = 100;

   or let x = 100
   if you might want to do assignment later use 2 steps version

   let price = 10.99;
    // and show the $ 
   console.log(`The price is $${price}`);

   console.log(`x is: ${x}`);
   console.log(typeof x);

   let firstName = "Scott";  // string
   console.log(`My name is ${firstName}`)

   // booleans
   let online = true; 
   console.log(`Am I online?: ${online}`)
   
*/

let firstName = 'scotcorm';
document.getElementById('p2').textContent = `My name is ${firstName}`;

/*
   notes on ===================    arithametic operators   =======================================
   operands (values, variables, etc.)
   operators (+ - * / ** %)
   ex. 11 = x + 5

   let total = 30;
   total = total + 1
   console.log(total)  // gives the updated variable's amount

   total = total % 2  // provides the remainder after the total is divided evenly so if total = 31  //  1
   let extraNumbers = total % 3   // 1

   // augmented assignment operators
   total += 1  (or use  -=, *=, /=, **=, or %= to tell if there is a remainder or if a number is even or odd)
   // 32

   increment operator increases by 1
   total++

   decrement operator
   total--

   // operator precedence 
   1. parenthesis()
   2. exponents
   3. multiplication and devision and modulo 
   4. addition and subtraction

   let result = 1 + 2 * 3 + 4**2
   would equal 1 + 2 * 3 + 16
   would equal 1 + 6 + 16
   would equal 23
   
*/

/*
   notes on ===================    accepting input   =======================================
   1. easy way = window prompt
   2. professional way = html textbox

   let username; 
   username = window.prompt("Enter Username: ")
   console.log(username)

   or in html create a textbox
   <h1 id="myH1"> Welcome </h1>
   <input id="myText">
   create a label and button
   <label>username: </label>
   <input id="myText">  (<br><br> to add two spaces)
   <button id="mySubmit"> submit </button>

   and then in js add the following: 

   // we need a username variable outside the function
   let username;

   document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username)
    document.getElementById("myH1").textContent = `Hello ${username}`
   }

    
   
*/

/*
   notes on ===================   type conversion   =======================================
    change the datatype of a value to another 
    (strings, numbers, booleans)

    let age = window.prompt("How old are you")
    age += 1 // 251
    age = Number(age)   (or String(x), or Boolean(x)) if there is a value there the boolean will be true
    age += 1 // 26

    test using 
    let x = " "
    let y = " "
    let z = " "

    x = Number(x)
    y = String(y)
    z = Boolean(z)

    console.log(x, typeof x);
    console.log(y, typeof y);
    console.log(z, typeof z);

    Boolean(z) if there is a value there the boolean will be true
    If the variable is declared but blank it will be NaN if number, or undefined for string, or false for booleans
*/

/*
   notes on ===================   constants   =======================================
   // const = a variable that cannot be changed 
   // for primitive datatypes like numbers or booleans capitalize the const (do not capitalize reference datatypes like strings)

   const PI = 3.14159; 
   let radius;
   let circumference;

   radius = window.prompt('enter the radius of a circle')
   // convert the entry from string to num
   radius = Number(radius);
   circumference = 2 * pi * radius; 
   console.log(circumference)

   so html might look like: 
   <h1 id="myH1">Enter the radius of a circle</h1>
   <label> radius: </label>
   <input type="text" id="myText"><br><br>
   <button id="mySubmit">submit</button>
   <h3 id="myH3"></h3>

   and the js for what happens if/when the button is clicked
      const PI = 3.14159; 
      let radius;
      let circumference;

      document.getElementById("mySubmit").onclick = function(){
      // get the value from the text box and assign it to radius then typecast as a number
        radius = document.getElementById("myText").value;   
        radius = Number(radius);
        circumference = 2 * PI * radius; 
        document.getElementById("myH3").textContent = circumference + " cm";
      }
  
*/

/*
   notes on ===================   counter program   =======================================
*/

const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const increaseBtn = document.getElementById('increaseBtn');
const countLabel = document.getElementById('countLabel');
let count = 0;

increaseBtn.onclick = function () {
  count++;
  countLabel.textContent = count;
};

decreaseBtn.onclick = function () {
  count--;
  countLabel.textContent = count;
};

resetBtn.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};

/*
   notes on ===================   math    =======================================
   MATH = built in object that provides a collectionof properties and methods 

   console.log(Math.PI); //3.141592653589793
   console.log(Math.E)

   let x = 3.21; 
   let y = 2; 
   let z;
   
   z = Math.round(x); 
   z = Math.floor(x); //to round down
   z = Math.ceil(x); to round up 
   z = Math.trunc(x); to eliminate any decimal numbers
   z = Math.pow(y, x); // gives y to the power of x 
   z = Math.sqrt(x); gives the squareroot 
   z = Math.log(x); gives the natural logarithm of a number 
   // sin. cosign, tangent
   z = Math.sin(x);
   z = Math.cos(x);
   z = Math.tan(x)

   z = Math.abs(x); // makes a negative value into a positive one 
   z = Math.sign(x) // to find the sign of a function 

   let max = Math.max(x,y,z);
   console.log(max)

   let min = Math.min(x,y,z);
   console.log(min)
    

   console.log(z);  //3




*/

/*
   notes on ===================   random number generator    =======================================




*/
