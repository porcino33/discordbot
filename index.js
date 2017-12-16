const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login('MzkxMzgzOTIzNDg3Mjc3MDYx.DRX4NQ.gOpAfWbwFLjGm4yC_CSvQdQCECg');