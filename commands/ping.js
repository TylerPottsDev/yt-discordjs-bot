const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("ping")
		.setDescription("Pong!"),
	async execute(interation) {
		interation.reply({
			content: "Pong!",
			ephemeral: true
		});
	}
}