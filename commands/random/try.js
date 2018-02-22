const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'try',
            group: 'random',
            memberName: 'roll',
            description: 'Rolls a die',
        });
    }

    async run(message, args){
            var roll = Math.round(Math.random());
            if(roll == 0){
                message.channel.sendMessage('Неудачно');
            }
            if(roll == 1){
                message.channel.sendMessage('Удачно');
            }
        }
}


module.exports = DiceRollCommand;