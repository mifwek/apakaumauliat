const { RichEmbed } = require('discord.js');
const conf = require('../../config.json');
exports.run = async (client, msg, args) => {
  
  if(args.length < 1) return args.missing(msg, 'No question provided', this.help);

let replies = ["It is decidedly so", "Without a doubt", "Yes, definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful", "Maybe?", "no", "Very Likely", "Probably No", "😇Only Good Knows.", "🙄hmmm...", "😆, What is your question?", "🤔Don\'t see what happening!"];

let postMsg = await msg.channel.send('**Please Wait...**');

let result = Math.floor((Math.random() * replies.length));

let questions = args.join(" ");

let ballembed = new RichEmbed() 
.setAuthor(msg.author.tag) 
.setColor('RANDOM') 
.addField("❓Question", questions)
.addField("📝Answer", replies[result])
.setFooter(`Requested by: ${msg.author.tag}`);

setTimeout(() => {
postMsg.edit(ballembed)
}, 2000);
}

exports.conf = {
  aliases: ['ask', '8b'],
  clientPerm: '',
  authorPerm: ''
}

exports.help = {
  name: '8ball',
  description: 'Ask the magic 8ball',
  usage:'8ball <question>',
  example: ['8ball your owner always online?']
}