const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  //!warn @daeshan <reason>
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply(":x: Das kannst du nicht tun!");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Couldn't find them yo");
  if(wUser.hasPermission("MANAGE_ROLES")) return message.reply(":x: Die Person kann nicht gewarnt werden.");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("Warns")
  .setAuthor(message.author.username)
  .setColor("#fc6400")
  .addField("Gewarnter Nutzer", `<@${wUser.id}>`)
  .addField("Gewarnt in", message.channel)
  .addField("Anzahl von Warns", warns[wUser.id].warns)
  .addField("Grund", reason);

  let warnchannel = message.guild.channels.find(`name`, "meldungen");
  if(!warnchannel) return message.reply("Couldn't find channel");

  warnchannel.send(warnEmbed);

  if(warns[wUser.id].warns == 3){
    let muterole = message.guild.roles.find(`name`, "muted");
    if(!muterole) return message.reply("You should create that role dude.");

    let mutetime = "172800s";
    await(wUser.addRole(muterole.id));
    message.channel.send(`<@${wUser.id}> wurde für 48 Stunden gemuted`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.reply(`<@${wUser.id}> ist nun nicht mehr gemuted.`)
    }, ms(mutetime))
  }
}

module.exports.help = {
  name: "warn"
}