const { RichEmbed } = require('discord.js');
const subReddits = ["NSFW_Snapchat", "snapchat_sluts", "snapchatleaks"];

exports.run = async (client, msg, args) => {
	if (!msg.channel.nsfw) return msg.channel.send(`🚫 ***This channel is not NSFW so I can't send it here...***`);
	try{
		let img = await client.util.scrapeSubreddit(subReddits[Math.floor(Math.random() * subReddits.length)]);
		if(!img) return msg.channel.send('The image cannot be fetched. Try again 😏');
		if (img.indexOf(".mp4")) img = await client.util.scrapeSubreddit(subReddits[Math.floor(Math.random() * subReddits.length)]);
		const embed = new RichEmbed()
		.setColor('RANDOM')
		.setURL(img)
		.setImage(img)
		.setTitle('Click here if image failed to load 😏')
		return msg.channel.send(embed);
	}catch(e){
		return msg.channel.send(`Oh no an error occured :( \`${e.message}\` try again later`);
	}
}

exports.conf = {
  aliases: [],
  clientPerm: 'EMBED_LINKS',
  authorPerm: ''
}

exports.help = {
  name: 'nsfwsnapchat',
  description: 'Show random nsfwsnapchat porn',
  usage: 'nsfwsnapchat',
  example: ['nsfwsnapchat']
}