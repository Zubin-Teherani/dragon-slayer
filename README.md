Building your own Dragon Slayer game!
=======================
This lesson will teach you how to build a simple Dragon Slayer app.  This app uses cool technology like Node.js and Javascript.

# Installation

### On runnable.com:
Create a new node app, and from the terminal, enter or cut and paste the following commands, then press enter or return:
    
    git clone https://github.com/zubin-teherani/dragon-slayer.git spark && spark/setup.sh
    
...some text will fly by as the repository is cloned locally and the project is setup.

Great, you're set to roll!


# Importing the prompt library

Let's get started!  Click the my-lesson.js file.  This is where we will be entering in al our code.

**TODO 1 :** The first thing we need to do is import a library called "prompt".  A library is a bunch of code that someone else wrote and they are letting us use for free :)  This is how importing a library is formatted:

```javascript
#!/usr/bin/env node

// TODO 1 : First, important the prompt and libary to receive inputs from our users
    
    var prompt = require('prompt');
```

# Creating the Object and Properties for each Character in Dragon Slayer
Next, we have to create a Character object that will serve as general outline for our dragon and user (that's you!).  We will give the Character object the same characteristics (in coding characteristics are called properties) - life and power.

```javascript
// TODO 2 : Next, let's create a character object that will have the properties for our dragon and knight

function Object(args){
	this.life = 10;
	this.power = 5;
};
```

#Create a dragon and user instance from the Character object
Now that we create the Character object, we need to make a 'dragon' and 'user' that have the same properties of what we outlined.

```javascript
// TODO 3 : Now, create our dragon and user!

var dragon = new Character();
var user = new Character();
```

# Create welcome message and start writing the function that will run your app!

We are going to start our app by welcoming the user.  Simply create a variable called welcomeMessage to welcome our user.  Afterwards, we are going to use console.log() function to print it to the screen. 

```javascript
var welcomeMessage = "Welcome to the dragon slayer!  The dragon is quick approaching.  What would you like to do?  Fight, protect, or run?"
console.log(welcomeMessage);
```

Next we are going to start writing our function!  First we are going to use the prompt library we imported at the beginning to run a prompt.  Then we are going to write a function that will handle the logic of everything

```javascript
function runApp() {
      
// TODO 6 : Start the prompt and set it to receive the value "decision".   Use the decision to guide our app logic
      
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
            console.log("Uh, that's not an option.  Choose fight, protect, or run.");
            runApp();
            break;
        }
    
    }); 
  }
```
Make sure at the very end you call your runApp function:
```javascript
	#runApp();
```

**Run the App** Switch to the command line, move into the master folder, and go ahead and run the app like so:
And this is how you put a box around your text:
```javascript
	# cd master
  # ./my-lesson.js
```