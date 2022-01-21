const ver = '0.9';
const prefix = 't!';

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('☻ | Uptime Server Started')
});

app.listen(3000, () => {
  console.log('🤖 | Uptimer is running');
});

// const {Database} = require("@replit/database") 
// const db = new Database()
const {Client, MessageEmbed} = require("discord.js")
const bot = new Client({intents: [
      'GUILDS',
      'GUILD_MESSAGES',
      'GUILD_MEMBERS',
      'DIRECT_MESSAGES',
    ] 
  })

bot.on('ready', () => {
  console.log('🤖 | ' + bot.user.tag + ' is running')
}) 

bot.on('rateLimit', () => {
  console.log('❌ | ' + bot.user.username + ' is being ratelimited')
})

bot.on('messageCreate', async message => {
  if(message.author.bot) {
    return null;
  }
    if(message.content === `${prefix}help`) { // use ' 
  const helpEmbed = new MessageEmbed()
    .setTitle("Help System")
    .setDescription("Coming Soon")
    .setColor("RANDOM")
    .setFooter({ text: `RPG on the Table | Version ${ver}`})
      message.channel.send({content: `<@${message.author.id}>, here`, embeds: [helpEmbed]})
    } // fight cmd time!1!1!1!1!
    if(message.content.startsWith(`${prefix}fight`)) {
      const mentionxd = message.mentions.users.first()
      if(mentionxd === null || !mentionxd) {
        const noMentionEmbed = new MessageEmbed()
        .setTitle('Error')
        .setDescription ('You have to mention someone to fight them!')
        .setFooter({ text: 'RPG on the Table | Version ' + ver})
        .setColor('#FFFF00')
        // setup git? k | DatEmage acc or create a new one | DatEmage acc i guess | k
  
      } else { // here
        message.channel.send('')
      }
    }
})
bot.login(process.env.TOKEN) 