const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Shows just what Jill can do.'),
    async execute(interaction: any) {
        await interaction.reply(`\`\`\`bash
"ping" - Will reply with Pong!"
            \`\`\``)
    }
}