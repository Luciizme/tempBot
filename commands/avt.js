const { MessageEmbed } = require("discord.js");

exports.run = async (client, msg, args, color) => {
const user = msg.mentions.users.first() || msg.author;
let avatar = user.displayAvatarURL({ size: 1024, dynamic: true });
    const avatarEmbed = new MessageEmbed()
        .setColor('CYAN')
        .setAuthor(user.username)
        .setImage(avatar);

    msg.channel.send(avatarEmbed);
};

exports.conf = {
  aliases: ["avt"]
};

exports.help = {
  name: "avatar",
  description: "show ur avatar",
  usage: "avatar <ID_User>"
};
