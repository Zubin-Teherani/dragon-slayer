#!/usr/bin/env node

// TODO 1 : First, import the prompt libary, so we can receive inputs from our users



// TODO 2 : Next, let's create a Character object that will have the properties for our dragon and user



// TODO 3 : Now, create our dragon and user!



// TODO 4 : Create a variable called welcomeMessage to greet everyone to our game



// TODO 5 : Now, create our function that will run our app.  Call it runApp()

function runApp() {
      
// TODO 6 : Start the prompt and set it to receive the value "decision".   Use the decision to guide our app logic.
      
      prompt.start();
      prompt.get(['decision'], function(err, result){
        console.log("You decided to " + result.decision)

// TODO 7 : Write a switch statement to filter our answers.  We've written the fight, protect, and run statements.  Can you write the default one?

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
            //Use the console.log() function to tell them to choose fight, protect, or run.
            
            //Run our runApp() function
            
            //Don't forget a break sequence!
            
        }
    
    });
  }

// TODO 8 : Go ahead and run our app using the runnApp()

