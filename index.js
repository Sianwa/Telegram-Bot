process.env.NTBA_FIX_319 = 1;
const TelegramBot = require('node-telegram-bot-api');

require('dotenv').config();
const token = process.env.TOKEN;

const bot = new TelegramBot(token, {polling : true})

bot.onText(/\/echo (.+)/, (msg, match) =>{
    const chatId = msg.chat.id;
    const resp = match[1];

    bot.sendMessage(chatId, resp)
});