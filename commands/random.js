//template
exports.run = async (client, msg, args, prefix) => {
  
    const ae = ['Trường','Công Quang','Quang Vinh','Tấn Đạt','Tuấn Mẫn']
    
    const idMem = ['529474880488603659','754939196447391855','514281853360930818','534380117711912996','895470223703023617','894737107094999060','531060971767201802']
    const idUser = msg.author.id;
//
  const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
  async function sendRand(){
    msg.channel.send(`Bro may mắn được chọn là`)
    for(let i=1;i<=3;i++){
      msg.channel.send(i)
      await sleep(1000)
    }
msg.channel.send(randombro(ae))
function randombro(items){
return items[Math.floor(Math.random()*items.length)] 
}}
//check
let check = idMem.includes(idUser);
  if(!check){
     msg.channel.send('bro không chung nhóm random làm dì!!')
     
  }
  if(check){
    sendRand()
    console.log(check)
  };
};

exports.conf = {
  aliases:["rand"]
};

exports.help = {
  name: "random",
  description: "random",
  usage: "random"
};
