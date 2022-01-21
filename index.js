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

const {Database} = require("@replit/database") 
const db = new Database()
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
    if(message.content === `${prefix}help`) {
  const helpEmbed = new MessageEmbed()
    .setTitle("Help System")
    .setDescription("Coming Soon")
    .setColor("RANDOM")
    .setFooter({ text: `RPG on the Table | Version ${ver}`})
      message.channel.send({content: `<@${message.author.id}>, here`, embeds: [helpEmbed]})
    }
    if(message.content.startsWith(`${prefix}fight`)) {
      const mentionxd = message.mentions.users.first()
      if(!mentionxd) {
        const noMentionEmbed = new MessageEmbed()
        .setTitle('Error')
        .setDescription ('You have to mention someone to fight them!')
        .setFooter({ text: 'RPG on the Table | Version ' + ver})
        .setColor('#FFFF00')
    message.channel.send({embeds: [noMentionEmbed]})
  
      } else { 
    db.get(`user_${message.author.id}`)
        const fightEmbed = new MessageEmbed()
        .setTitle("Fight against magic show user player is fighting against")
        .setDescription(`**Username:** user_${message.author.id}\n`)
        .setColor("BLUE")
        .setFooter({ text: 'RPG on The Table | Version ' + ver})
      }
    }
})
bot.login(process.env.TOKEN) 