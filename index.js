const { Collection } = require("discord.js");
const { readdirSync } = require("fs");
const Nana = require("./lib/NanaClient");
const keepAlive = require("./server");
const { MessageEmbed } = require("discord.js");
const Anime_Images = require('anime-images-api')
const Anime = new Anime_Images();

let prefix = '!';
const client = new Nana({
    cacheGuilds: true,
    cacheChannels: true,
    fetchAllMembers: true,
    disableEvents: ["GUILD_SYNC", "PRESENCE_UPDATE", "TYPING_START"]
});

// events
for (const event of readdirSync("./events")) {
    client.on(event.split(".")[0], (...args) =>
        require(`./events/${event}`)(client, ...args)
    );
}
const hmtai = require("hmtai");
//chat
client.on('message', msg => {
   if (!msg.content.startsWith(prefix)) return;
  const args = msg.content.trim().split(/ +/g);
  const cmd = args[0].slice(prefix.length).toLowerCase();
    let user = msg.mentions.users.first()
    let author = msg.author.id;
    if (typeof user === "undefined"){
      let user = 'không khí'; 
    }
  if(cmd === "kiss"){
    kiss();
  }
  async function kiss(){
    let { image } = await Anime.sfw.kiss()
    const embed = new MessageEmbed()
      .setDescription(`<@${author}> vừa hun ${user}`)
      .setImage(image)

    msg.channel.send(embed)
  }
  if(cmd === "punch"){
    punch();
  }
  async function punch(){
    let { image } = await Anime.sfw.punch()
    const embed = new MessageEmbed()
      .setDescription(`<@${author}> vừa đấm ${user}`)
      .setImage(image)

    msg.channel.send(embed)
  }
  if(cmd === "hug"){
    hug();
  }
  async function hug(){
    let { image } = await Anime.sfw.hug()
    let user = msg.mentions.users.first()
    let author = msg.author.id;
    const embed = new MessageEmbed()
      .setDescription(`<@${author}> vừa ôm ${user} thật chặt`)
      .setImage(image)

    msg.channel.send(embed)
  } 
  if(cmd === "slap"){
    slap();
  }
  async function slap(){
    let { image } = await Anime.sfw.slap()
    let user = msg.mentions.users.first()
    let author = msg.author.id;
    const embed = new MessageEmbed()
      .setDescription(`<@${author}> đã tát ${user}`)
      .setImage(image)

    msg.channel.send(embed)
  }
    if(cmd === "pat"){
    pat();
  }
  async function pat(){
    let { image } = await Anime.sfw.pat()
    let user = msg.mentions.users.first()
    let author = msg.author.id;
    const embed = new MessageEmbed()
      .setDescription(`<@${author}> đã xoa đầu ${user}`)
      .setImage(image)

    msg.channel.send(embed)
  }
   if(cmd === "cuddle"){
    cuddle();
  }
  async function cuddle(){
    let { image } = await Anime.sfw.cuddle()
    let user = msg.mentions.users.first()
    let author = msg.author.id;
    const embed = new MessageEmbed()
      .setDescription(`<@${author}> đã vuốt ve ${user}`)
      .setImage(image)

    msg.channel.send(embed)
  }
  if(cmd === 'send'){
    const disableID = ['894736953747075094'];
    const disableChannelid = client.channels.cache.get(894736953747075094);
    let channel = msg.channel.id;
  if(channel != disableID){
    if(args[1] === "chip"){
      let url = hmtai.nsfw.pantsu();
      let name = 'Chíp';
      
      send(url,name);
    }
    if(args[1] === "thigh"){
      let url = hmtai.nsfw.thighs();
      let name = 'Đuồi';
      
      send(url,name);
    }
    if(args[1] === "ahegao"){
      let url = hmtai.nsfw.ahegao();
      let name = 'Ahegao';
      
      send(url,name);
    }
    if(args[1] === 'glasses'){
      let url = hmtai.nsfw.glasses();
      let name = 'Chị gái đeo kính';
      
      send(url,name);
    }
    if(args[1] === 'foot'){
      let url = hmtai.nsfw.foot();
      let name = 'Chân';
      
      send(url,name);
    }
}else{
  msg.channel.send('Dùng ở kênh đùi nha!').then(msg => {
                msg.delete({ timeout: 5000});
            })
}
}
function send(url,name){
const color = 'GREEN';
const embed = new MessageEmbed()
        .setTitle(`${name} đâyyy!`)
        .setColor(color)        
        .setDescription('Đừng xem cuốn quá bỏ học nha bro!')
        .setImage(url);
    msg.channel.send(embed);
}
  if(msg.content === "Tú"){
    msg.channel.send('rách');
  }
  if(msg.content === "Luci"){
    msg.channel.send("con chó rách")
  }
});
// modules
client.commands = new Collection();
client.aliases = new Collection();

for (const command of readdirSync("./commands").filter(x =>
    x.endsWith(".js")
)) {
    let cmd = require(`./commands/${command}`);
    client.commands.set(cmd.help.name.toLowerCase(), cmd);
  // get aliases command
    for (const alias of cmd.conf.aliases) {
        client.aliases.set(alias.toLowerCase(), cmd.help.name.toLowerCase());
    }
}

keepAlive();
const mySecret = process.env['TOKEN']
client.login(mySecret);

module.exports = Nana;
