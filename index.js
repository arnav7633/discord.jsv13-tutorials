//First we are going to import the 'Client' from discord.js
const { Client } = require("discord.js");
//Now lets create our own client. In V13 we need to add intents aswell
const bot = new Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"],
});

//now lets make a even listener to listen for messages
//my bad i used "message" instead of "messageCreate" as of now both work.!
//as you can see the message sent can be accessed by message.content
//lets make our first command!
bot.on("messageCreate", (message) => {
  if (message.content.toLowerCase() === "!ping") {
    return message.reply("pong!");
  }
});

//Now a listener which tells us when the bot logs in to discord

bot.on("ready", () => {
  console.log("Logged in!");
});

//now we specift the username/pass(token) to our client

bot.login("");
