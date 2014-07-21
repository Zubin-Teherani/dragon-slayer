#!/usr/bin/env node

// TODO 1 : First, important the prompt and libary to receive inputs from our users

var prompt = require('prompt')

// TODO 2 : Next, let's create a character object that will have the properties for our dragon and knight

function Character(args) {
  this.life = 10;
  this.power = 5;
}; 

// TODO 3 : Now, create our dragon and Knight!

var dragon = new Character();
var user = new Character();

// TODO 4 : Create a variable called welcomeMessage to great everyone to our game

var welcomeMessage = "Welcome to the dragon slayer!  The dragon is quick approaching.  What would you like to do?  Fight, protect, or run?"
console.log(welcomeMessage)

// TODO 5 : Now, create our function that will run our app.  Entitle it runApp()

function runApp() {
      
// TODO 6 : Start the prompt and set it to receive the value "decision".   Use the decision to guide our app logic
      
      prompt.start();
      prompt.get(['decision'], function(err, result){
        console.log("You decided to " + result.decision)
        
// TODO 7 : Write a switch statement to filter our answers.  Give the options of fight, protect, run, and a default statement.

        switch (result.decision) {
          case 'fight':
            dragon.life -= user.power;
            console.log("You hit the dragon!!  His life is down to " + dragon.life);
            if (dragon.life <= 0) {
              console.log("Congratulations!  You defeated the dragon!");
              process.exit(0);
            }
            runApp();
            break;
          case 'protect':
            user.life -= dragon.power;
            console.log("You were able to deflect the dragon's attack.  Your life is down to " + user.life);
            if (user.life <= 0) {
              console.log("The dragon killed you :(")
              process.exit(0);
            }
            runApp();
            break;
          case 'run':
            user.life = 0;
            console.log("The dragon killed you.  The end.");
            process.exit(0);            
            break;
          default:
            console.log("Uh, that's not an option.  Choose fight, protect, or run.");
            runApp();
            break;
        }
    
    }); 
  }

// TODO 8 : Go ahead and run our app!

runApp();




