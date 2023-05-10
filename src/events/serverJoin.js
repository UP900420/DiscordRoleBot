module.exports - client => {
    client.on("guildMemberAdd", member => {
        console.log(`${client.user.tag} new member joined`)
        member.send("What is your UP number? (please enter it like so: UP1234567)")
        
    });

};