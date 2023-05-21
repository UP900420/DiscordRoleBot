/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
const { SlashCommandBuilder } = require('@discordjs/builders');
const { PermissionsBitField, ButtonStyle, ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('This is the help command!'),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setColor('Blue')
      .setTitle('Reaction Roles')
      .setDescription(`**Welcome to the Reaction Role Bot**
        \n This bot was built to assist discord servers in moderating their roles using multiple methods.
        \n __Bot commands:__
        \n - **/help** - **__Help Command__** - This displays instructions of how to utilise the bots commands within the server.
        \n - **/buttonrole** - **__Button Based Role Command__** - To use this command simply enter the slash command and enter what roles you want underneath the message. **ADMIN ONLY**`);

    await interaction.reply({ embeds: [embed] });
  },

};
