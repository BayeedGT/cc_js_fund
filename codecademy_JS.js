//FUNCTION : 
function add (x,y){

}
const add = function (x,y){

}
const add = (x,y) => {

}


//ARRAY :
const hobbies = ['spoon', true, 2];
push, pop, length
//lookup -> array js mdn for reference, has many array methods


//ITERATORS:
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];
artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

//map returns a new array
const numbers = [1, 2, 3, 4, 5];
const squareNumbers = numbers.map(number => {
  return number * number;
});
console.log(squareNumbers);

//filter returns a new array, those that returns true on the condition
const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];
const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});
console.log(onlyNumbers);


//Objects
const alienShip = {
    //ES6 function inside object literal
    invade () { 
      console.log('Hello!')
    }
};
alienShip.invade();

//Looping through objects inside object
let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 
// Write your code below
for (let member in spaceship.crew){
  console.log(`${member}: ${spaceship.crew[member].name}`)
}


//Destructuring
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};
// Here
const {functionality} = robot; // Same as-> const functionality = robot.functionality; 
functionality.beep();



////// REACT
//JSX className
const myDiv = (
  <div className="big">
    I AM A BIG DIV
  </div>
)
ReactDOM.render(myDiv, document.getElementById('app'))

//self closing tags 
//single tag elements should be  closed with '/'
<img src="images/jenkins.png" />

//js inside jsx 
ReactDOM.render(
  <h1>2 + 3</h1>, document.getElementById("app") //prints 2 + 3
)

ReactDOM.render(
  <h1>{2 + 3}</h1>, document.getElementById("app") // prints 5
) // here the curly braces is used to say its js inside jsx

//Using js from outside the jsx
const theBestString = 'tralalalala i am da best';
ReactDOM.render(<h1>{theBestString}</h1>, document.getElementById('app'));