const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!addrole @andrew Dog Person
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply(":x: Das kannst du nicht machen!");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply(":x: Konnte Nutzer nicht finden");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply(":x: Bitte Rolle angeben.");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply(":x: Konnte Rolle nicht finden.");

  if(rMember.roles.has(gRole.id)) return message.reply(":eight_spoked_asterisk: Nutzer hat bereits diese Rolle!");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`Super, du bist jetzt ${gRole.name}!`)
  }catch(e){
    console.log(e.stack);
    message.channel.send(`:white_check_mark: Der Person <@${rMember.id}> wurde die Rolle ${gRole.name} gegeben`)
  }
}

module.exports.help = {
  name: "addrole"
}
