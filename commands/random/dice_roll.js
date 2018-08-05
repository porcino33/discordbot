const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command {
    constructor(client) {
        super(clients, {
            name: 'roll',
            group: 'random',
            memberName: 'roll',
            description: 'Rola um dado',
        });
    }

    async run(message, args){
            var roll = Math.floor(Math.random() * 6) + 1;
            message.reply("Você rolou um dado:" + roll);
        }
}

module.exports = DiceRollCommand;
