module.exports = {
	name: "guildMemberRemove",
	async execute(member) {
		member.guild.channels.cache.get("849283385808912384").send(`${member.user} has left the server!`);
	}
}