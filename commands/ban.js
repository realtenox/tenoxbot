const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send(":x: Konnte Nutzer nicht finden.");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(":x: Das kannst du nicht tun!");
    if(bUser.hasPermission("MANAGE_ROLES")) return message.channel.send(":x: Diese Person kann nicht gekickt werden.");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("BAN")
    .setColor("#bc0000")
    .addField("Gebannter Nutzer", `${bUser} with ID ${bUser.id}`)
    .addField("Gebannt von", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Im Channel", message.channel)
    .addField("Uhrzeit", message.createdAt)
    .addField("Grund", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "meldungen");
    if(!incidentchannel) return message.channel.send(":x: Konnte Channel nicht finden.");
    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
}

module.exports.help = {
  name:"ban"
}
