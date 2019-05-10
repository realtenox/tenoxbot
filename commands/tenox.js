const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete().catch(O_o=>{});
    let botembed = new Discord.RichEmbed()
    .setAuthor("TENOX auf Social Media", "https://i.imgur.com/xTgGUYu.png")
    .setColor("#272be1")
    .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQO82kkwvSyoEomKKkxrH9lstSQVXDiAMx31EaNceUQiP0ervSQQ")
    .addField("Youtube", "https://youtube.com/c/tenoxtv")
    .addField("Twitter", "https://twitter.com/realtenox")
    .addField("Twitch", "https://twitch.tv/realtenox")
    .setFooter("TENOX Bot", bot.user.displayAvatarURL);
    message.channel.send(botembed).then(m => m.delete(20000));
}
module.exports.help = {
  name:"tenox"
}
