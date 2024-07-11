const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bitches')
        .setDescription('Shows how many bitches you have.'),
    async execute(interaction: any) {
        await interaction.reply(`https://i.redd.it/8d30a5nb43i81.jpg`)
    }
}