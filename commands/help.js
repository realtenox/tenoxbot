const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete().catch(O_o=>{});
    let helpEmbed = new Discord.RichEmbed()
    .setAuthor("Help", "https://i.imgur.com/0TPJTUo.png")
    .setColor("#272be1")
    .addField("Member", `!report - kann Nutzer melden \n!botinfo - Informationen über den Bot \n!serverinfo - Informationen über den Bot \n!warnlevel - Abfrage der Warnungen \n!tenox - Zeigt Tenox' Social Media`)
    .addField("Mods", `!kick - kickt Mitglieder \n!ban - bannt Mitglieder \n!warn - warnt Mitglieder \n!addrole - fügt einem Mitglied eine Rolle hinzu \n!removerole - entfernt einem Midglied eine Rolle \n!tempmute - mutet ein Mitglied die angegebene Zeit lang [in ms]`)
    .addField("kommende Commands", "!level,  vc commands")
    .setFooter("TENOX Bot", bot.user.displayAvatarURL)
    message.channel.send(helpEmbed).then(m => m.delete(20000));
}

module.exports.help = {
  name:"help"
}
