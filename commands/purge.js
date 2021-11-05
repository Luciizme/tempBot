//template
exports.run = async (client, msg, args, prefix) => {
const ableId = ['312852504201396225','529474880488603659','723542166101819513'];
const idUser = msg.author.id;
let check = ableId.includes(idUser);
  if(check){
  if(!args[0]) return msg.channel.send('nhập số tin nhắn!')
        if(isNaN(args[0])) return msg.channel.send('dùng số!')
        if(parseInt(args[0]) > 99) return msg.channel.send('nhập nhỏ hơn 99')
        await msg.channel.bulkDelete(parseInt(args[0]) + 1)
            .catch(err => console.log(err))
        msg.channel.send('đã xóa ' + args[0]  + " tin nhắn.").then(msg => {
                msg.delete({ timeout: 5000});
            })
}else{
  msg.channel.send('Không đủ quyền thì không được đâu bro!')
}
};
exports.conf = {
  aliases:["pur"]
};

exports.help = {
  name: "purge",
  description: "delete msg",
  usage: "purge <amout>"
};
