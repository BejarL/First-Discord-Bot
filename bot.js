require('dotenv').config();
const token = process.env.BOT_TOKEN;

const { Client, GatewayIntentBits, Partials } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
    partials: [Partials.Message, Partials.Channel]
});

const BOT_PREFIX = '!'
const MUTE_COMMAND = 'mute'

client.on("ready", () => {
    console.log("Our bot is ready to go!!");
});

client.on('messageDelete', msg => {
    msg.channel.send("Deja de borrar mensajes!")
})

client.on("messageCreate", msg => {
    if (msg.content === "ping") {
        msg.reply("Pong!");
    }
    if (msg.content === "ying") {
        msg.reply("Ya callate!");
    }
    if (msg.content === "pancho") {
        msg.reply("mamahuevo 🥵")
    }
    if (msg.content === "lolaso") {
        msg.reply("No es Lolaso, es Trollaso 🥵")
    }
    if (msg.content === `${BOT_PREFIX}${MUTE_COMMAND}`) {
        muteUser(msg.member)
    }
});

function muteUser(member) {
    msg.member.roles.add("1049547348700827679")
}

client.login(token);