const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Pings Jill.'),
    async execute(interaction: any) {
        await interaction.reply(`Pong!`)
    }
}