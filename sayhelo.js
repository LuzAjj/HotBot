const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_TELEGRAM_BOT_TOKEN' with your actual Telegram bot token
const token = 'YOUR_TELEGRAM_BOT_TOKEN';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Listen for any kind of message
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text ? msg.text.toLowerCase() : '';

    // Check if the message contains 'gm' or any other word
    if (messageText.includes('gm') || messageText.includes('good morning')) {
        // Respond with a greeting
        bot.sendMessage(chatId, 'Good morning!');
    } else {
        // Respond with a default message
        bot.sendMessage(chatId, 'I can only respond to messages containing "gm" or "good morning".');
    }
});

// Log errors
bot.on('polling_error', (error) => {
    console.error(error);
});
