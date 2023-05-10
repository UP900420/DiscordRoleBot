const { SlashCommandBuilder } = require('@discordjs/builders');
const { PermissionsBitField, ButtonStyle, ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require(`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
    .setName('testrole')
    .setDescription(`This is the reaction role message command`)
    .addRoleOption(option => option.setName(`role1`).setDescription(`This is the first role you want to set up`).setRequired(true))
    .addRoleOption(option => option.setName(`role2`).setDescription(`This is the second role you want to set up`))
    .addRoleOption(option => option.setName(`role3`).setDescription(`This is the third role you want to set up`))
    .addRoleOption(option => option.setName(`role4`).setDescription(`This is the fourth role you want to set up`))
    .addRoleOption(option => option.setName(`role5`).setDescription(`This is the fifth role you want to set up`)),

    async execute (interaction, client ){
        const role1 = interaction.options.getRole(`role1`);
        const role2 = interaction.options.getRole(`role2`);
        const role3 = interaction.options.getRole(`role3`);
        const role4 = interaction.options.getRole(`role4`);
        const role5 = interaction.options.getRole(`role5`);

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return await interaction.reply ({content: "You must have admin to create a reaction role message", ephemeral: true});

        
        const button = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId('button1')
            .setLabel(`${role1.name}`)
            .setStyle(ButtonStyle.Secondary),
        )
        .addComponents(
            new ButtonBuilder()
            .setCustomId('button2')
            .setLabel(`${role2.name}`)
            .setStyle(ButtonStyle.Secondary),
        )
        .addComponents(
            new ButtonBuilder()
            .setCustomId('button3')
            .setLabel(`${role3.name}`)
            .setStyle(ButtonStyle.Secondary),
        )
        .addComponents(
            new ButtonBuilder()
            .setCustomId('button4')
            .setLabel(`${role4.name}`)
            .setStyle(ButtonStyle.Secondary),
        )
        .addComponents(
            new ButtonBuilder()
            .setCustomId('button5')
            .setLabel(`${role5.name}`)
            .setStyle(ButtonStyle.Secondary),
        )


        const embed = new EmbedBuilder()
        .setColor("Blue")
        .setTitle(`Reaction Roles`)
        .setDescription(`React with the buttons below to get the specified roles! (${role1}, ${role2}, ${role3}, ${role4}, ${role5})`)

        await interaction.reply({ embeds: [embed], components: [button]});

        const collector = await interaction.channel.createMessageComponentCollector();

        collector.on('collect', async (i) => {

            const member = i.member;

            if (i.guild.members.me.roles.highest.position < role1.position) {
                i.update ({ content: "My role is below the roles that I'm trying to give; This reaction message has been shut down. ", embeds:[], ephemeral: true})
                return;
            } else if (i.guild.members.me.roles.highest.position < role2.position) {
                i.update ({ content: "My role is below the roles that I'm trying to give; This reaction message has been shut down. ", embeds:[], ephemeral: true})
                return;
            } else if (i.guild.members.me.roles.highest.position < role3.position) {
                i.update ({ content: "My role is below the roles that I'm trying to give; This reaction message has been shut down. ", embeds:[], ephemeral: true})
                return;
            } else if (i.guild.members.me.roles.highest.position < role4.position) {
                i.update ({ content: "My role is below the roles that I'm trying to give; This reaction message has been shut down. ", embeds:[], ephemeral: true})
                return;
            } else if (i.guild.members.me.roles.highest.position < role5.position) {
                i.update ({ content: "My role is below the roles that I'm trying to give; This reaction message has been shut down. ", ephemeral: true})
                return;
            }

            if (i.customId === 'button1') {
                member.roles.add(role1);
                i.reply({ content: `You now have the role: ${role1.name}`, ephemeral:true});
            }

            if (i.customId === 'button2') {
                member.roles.add(role2);
                i.reply({ content: `You now have the role: ${role1.name}`, ephemeral:true});
            }

            if (i.customId === 'button3') {
                member.roles.add(role3);
                i.reply({ content: `You now have the role: ${role1.name}`, ephemeral:true});
            }

            if (i.customId === 'button4') {
                member.roles.add(role4);
                i.reply({ content: `You now have the role: ${role1.name}`, ephemeral:true});
            }

            if (i.customId === 'button5') {
                member.roles.add(role5);
                i.reply({ content: `You now have the role: ${role1.name}`, ephemeral:true});
            }


        
        })
    }
}