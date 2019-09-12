const Kahoot = require('kahoot.js-updated');


module.exports =  async function botJoin(name, botNum, gamePin) {
    let bot = new Kahoot;
    botName = name + botNum;
    console.log(botName + " is Joining kahoot...");
    bot.join(gamePin, botName).then(() =>{
        console.log(botName+ ' Has Been Joined!')
        bot.leave();
        return true;
    });
}
