const Kahoot = require('kahoot.js-updated');
var increment = 0;

async function loopJoin() {
    for (let i = 0; i < 100; i++) {
        await createBot()
    }
}

async function createBot() {
    let bot = new Kahoot;
    botName = 'TEST '+ increment;
    increment++;
    console.log(botName + " is Joining kahoot...");
    bot.join(657138, botName).then(() =>{
        console.log(botName+ ' Has Been Joined!')
        return true;
    });
}

loopJoin()