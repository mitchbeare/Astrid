// Main process file for the bot
require("dotenv").config()
const {Client, GatewayIntentBits} = require("discord.js")

// Config the discord bot and what intents it has access to
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})

// Listen to discord for the message event
client.on('messageCreate', async function (message){
    try{
        console.log(message.content)
    }catch(error){
        console.log(error)
    }
})

// Login to discord and run must be final line
client.login(process.env.DISCORD_KEY)