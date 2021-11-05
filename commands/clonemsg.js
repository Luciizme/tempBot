//template
exports.run = async (client, msg, args, prefix) => {
    var today = new Date();
    var time = today.getDate() + ':' + today.getHours() + ":" + today.getMinutes();
    let sentence = msg.content.split(" ");
    sentence.shift();
    sentence = sentence.join(" ");
    const idUser = msg.author.id;
    
     msg.guild.channels.cache.find(i => i.name === 'log-message').send(`${time} <@${idUser}>: ${sentence}`);

    msg.delete()
    msg.channel.send(sentence);

};
exports.conf = {
  aliases:["s"]
};

exports.help = {
  name: "say",
  description: "talking",
  usage: "say <something>"
};
