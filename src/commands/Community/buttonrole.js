const { SlashCommandBuilder } = require('@discordjs/builders');
const { PermissionsBitField, ButtonStyle, ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require(`discord.js`);

// to do list
// inefficient, need better time complexity, breaks completely if u click the roles too fast. currently cycles through 5 if statements twice.
// need it to post to a specific channel, or message the user that they have their role changed (added or removed)
// make it so the user can change the text for the reaction message
// create reaction role command
// create subsections command (groups, i.e: continent: asia, europe or year: 1 2 3 or course: comp sci, software engineering etc.)
// create command for user just typing command to get basic roles
// create command for user to reply to messages bot has privately dmd them to get the roles they desire.

module.exports = {
    data: new SlashCommandBuilder()
    .setName('buttonrole')
    .setDescription(`This is the button based reaction role message command`)
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

        buttonGlobal = new ActionRowBuilder();
        
        if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return await interaction.reply ({content: "You must have admin to create a reaction role message", ephemeral: true});
            button = buttonGlobal
            .addComponents(
                new ButtonBuilder()
                .setCustomId('button1')
                .setLabel(`${role1.name}`)
                .setStyle(ButtonStyle.Secondary),
            )
            buttonGlobal = button;

            blank = `React with the buttons below to get the specified roles! \n-${role1}`;

        if (role2 != undefined || role2 != null) {
            button2 = buttonGlobal
            .addComponents(
                new ButtonBuilder()
                .setCustomId('button2')
                .setLabel(`${role2.name}`)
                .setStyle(ButtonStyle.Secondary),
            )
            buttonGlobal = button2;
            blank+=`\n-${role2}`
        }
        
        if (role3 != undefined || role3 != null) {
            button3 = buttonGlobal
            .addComponents(
                new ButtonBuilder()
                .setCustomId('button3')
                .setLabel(`${role3.name}`)
                .setStyle(ButtonStyle.Secondary),
            )
            buttonGlobal = button3;
            blank+=`\n-${role3}`
        }
        if (role4 != undefined || role4 != null) {
            button4 = buttonGlobal
            .addComponents(
                new ButtonBuilder()
                .setCustomId('button4')
                .setLabel(`${role4.name}`)
                .setStyle(ButtonStyle.Secondary),
            )
            buttonGlobal = button4;
            blank+=`\n-${role4}`
        }
        if (role5 != undefined || role5 != null) {
            button5 = buttonGlobal
            .addComponents(
                new ButtonBuilder()
                .setCustomId('button5')
                .setLabel(`${role5.name}`)
                .setStyle(ButtonStyle.Secondary),
            )
            buttonGlobal = button5;
            blank+=`\n-${role5}`
        }


        const embed = new EmbedBuilder()
        .setColor("Blue")
        .setTitle(`Reaction Roles`)
        .setDescription(blank)

        await interaction.reply({ embeds: [embed], components: [button]});
        

        const collector = await interaction.channel.createMessageComponentCollector();

        collector.on('collect', async (i) => {

            const member = i.member;

            if (i.guild.members.me.roles.highest.position < role1.position) {
                i.update ({ content: "My role is below one of the roles that I'm trying to give; This reaction message has been shut down. ", embeds:[], ephemeral: true})
                return;
            } else if (role2 != undefined || role2 != null) {
                if (i.guild.members.me.roles.highest.position < role2.position) {
                i.update ({ content: "My role is below one of the roles that I'm trying to give; This reaction message has been shut down. ", embeds:[], ephemeral: true})
                return;
                }
            } else if (role3 != undefined || role3 != null) {
                if (i.guild.members.me.roles.highest.position < role3.position) {
                i.update ({ content: "My role is below one of the roles that I'm trying to give; This reaction message has been shut down. ", embeds:[], ephemeral: true})
                return;
                }
            } else if (role4 != undefined || role4 != null) {
                if (i.guild.members.me.roles.highest.position < role4.position) {
                i.update ({ content: "My role is below one of the roles that I'm trying to give; This reaction message has been shut down. ", embeds:[], ephemeral: true})
                return;
                }
            } else if (role5 != undefined || role5 != null) {
                if (i.guild.members.me.roles.highest.position < role5.position) {
                i.update ({ content: "My role is below one of the roles that I'm trying to give; This reaction message has been shut down. ", embeds:[], ephemeral: true})
                return;
                }
            } 

            if (i.customId === 'button1') {
                member.roles.add(role1);
                i.reply({ content: `You now have the role: ${role1.name}`, ephemeral:true});
            }

            if (i.customId === 'button2') {
                member.roles.add(role2);
                i.reply({ content: `You now have the role: ${role2.name}`, ephemeral:true});
            }

            if (i.customId === 'button3') {
                member.roles.add(role3);
                i.reply({ content: `You now have the role: ${role3.name}`, ephemeral:true});
            }

            if (i.customId === 'button4') {
                member.roles.add(role4);
                i.reply({ content: `You now have the role: ${role4.name}`, ephemeral:true});
            }

            if (i.customId === 'button5') {
                member.roles.add(role5);
                i.reply({ content: `You now have the role: ${role5.name}`, ephemeral:true});
            }
        })
    }
}