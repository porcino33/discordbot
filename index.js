const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login('MzkxMzgzOTIzNDg3Mjc3MDYx.DXAxzw.0soSDcw3FlYS8dGEjpeBqSG5iIs');