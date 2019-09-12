const input = require('readline-sync');
const join = require('./utils/join');

console.log('  _  __          _                       _        _____   _                                            \r\n | |\/ \/         | |                     | |      \/ ____| | |                                           \r\n | \' \/    __ _  | |__     ___     ___   | |_    | (___   | |_    ___    _ __   _ __ ___     ___   _ __ \r\n |  <    \/ _` | | \'_ \\   \/ _ \\   \/ _ \\  | __|    \\___ \\  | __|  \/ _ \\  | \'__| | \'_ ` _ \\   \/ _ \\ | \'__|\r\n | . \\  | (_| | | | | | | (_) | | (_) | | |_     ____) | | |_  | (_) | | |    | | | | | | |  __\/ | |   \r\n |_|\\_\\  \\__,_| |_| |_|  \\___\/   \\___\/   \\__|   |_____\/   \\__|  \\___\/  |_|    |_| |_| |_|  \\___| |_|   \r\n                                                                                                       \r\n             ')

async function app() {
    gamePin = input.question("    Game's Pin: ")
    name = input.question("    Enter your bot's name: ")
    numberOfBot = input.question("    Number of bot (Maximun at 90): ")

    for (let i = 0; i < numberOfBot; i++)  {
        await join(name, i, gamePin);
    }
}

app()