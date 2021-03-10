const readline = require('readline');
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


r1.question("What's your name? Nicknames are also acceptable", (name) => {
  r1.question("What's an activity you like doing?", (activity) => {
    r1.question("What do you listen to while doing that?", (listen) => {
      r1.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (meal) => {
        r1.question("What's your favourite thing to eat for that meal?", (eat) => {
          r1.question("Which sport is your absolute favourite?", (sport) => {
            r1.question("What is your superpower? In a few words, tell us what you are amazing at!", (superpower) => {
              console.log(`${name} loves listening to ${listen} while ${activity}, devouring ${eat} for ${meal} prefers ${sport} over any other sport, and is amazing at ${superpower}`);
              r1.close();
            });
          });
        });
      });
    });
  });
  
});
 
