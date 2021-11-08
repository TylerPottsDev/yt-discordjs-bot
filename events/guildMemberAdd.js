const Discord = require('discord.js');

module.exports = {
	name: "guildMemberAdd",
	async execute(member) {
		// member.guild.channels.cache.get("849283385808912384").send(`${member.user} has joined the server!`);
		console.log(member.user);

		const newMemberEmbed = new Discord.MessageEmbed()
			.setColor("#d81e5b")
			.setTitle("New Member!")
			.setDescription(`${member.user} has joined the server! We hope you enjoy your stay!`)
			.setThumbnail(member.user.displayAvatarURL())
			.setTimestamp();
		
			member.guild.channels.cache.get("849283385808912384").send({
				embeds: [newMemberEmbed] 
			})
	}
}