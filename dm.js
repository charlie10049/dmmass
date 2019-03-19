
const Discord = require("discord.js");
const bot = new Discord.Client();
bot.login("NTU3MzE4MzMxMDk5NTEyODQy.D3Gisg.VQs07b0OZaisD7gTK79cVxOLg2w");

bot.on("ready", function() {
console.log("Ready.");
bot.user.setPresence({ status: 'online', game: { name: 'ADD OUR BOT' } });
})

bot.on('message', message => {
  // If the message is "hi"
  if (message.content === 'hi') {
    // Send "pong" to the same channel
    message.channel.send('yo wassup g');
  }
});


bot.on("message", function(message) {
	if(message.content.toLowerCase() == "?dm") {
		console.log("starting")
		bot.guilds.get(message.guild.id).members.forEach(member1 => {
			console.log(`DM'ed ${member1.user.tag}`)
			member1.send('looking for suppliers, dm charlie')
		
		});
	}
	});
