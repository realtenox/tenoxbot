const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete().catch(O_o=>{});
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setAuthor("Bot Info", "https://i.imgur.com/kc4zrel.png")
    .setColor("#272be1")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Erstellt am", bot.user.createdAt)
    .addField("Erstellt von", "TENOX \n*realtenox#4245*")
    .addField("Version", "1.22")
    .setFooter("TENOX Bot", bot.user.displayAvatarURL);
    message.channel.send(botembed).then(m => m.delete(20000));
}

module.exports.help = {
  name:"botinfo"
}
