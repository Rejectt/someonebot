const Discord = require('discord.js');
const client = new Discord.Client();



client.login('NTE4MTQ5NDc0ODgzOTkzNjAy.DuXJ7g._nnDc7xfRNeoSlHmaZsuoq_t1FM'); 



client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('by mohamed');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('is online')
client.user.setStatus("dnd");
});
// playing
client.on('ready', () => {                           
client.user.setGame(`-help`,'https://www.twitch.tv/tarikrs');                                                                                                                                                                                                                                                                                                                                                                                                                             client.user.setGame(`-help | On 20 Servers`,'https://www.twitch.tv/v5bz');
});          


client.on('message', message => {
     if (message.content === "-help") {
message.author.send("**,,..**" + `  ** 
لمسح الشات !مسح وعدد الرسائل المراد مسحها 
لـ انشاء الوان -cc عدد الالوان 
حصول علي رتبه ريمبو  يجب اولا الحصول علي [Premuim] لتفعيل البريميوم تواصل مع [TU||FV 4005 Stage II#6372]
لـ رابط دعوه البوت : -invite
لـ عمل كيك لاي عضو : -kick
لـ عمل باند لاي عضو : -ban 
لـ عمل ميوت لـ عضو :-mute [محتمل عطل]
لـ عرض صورتك الشخصية:-avatar
لـ عمل قرعه : -roll <الرقم>
لـ رؤيه معلومات الروم :-ch
**`);
    }
});    

	var prefix = "-";
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "مسح") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الكلمات التي تريد مسحها```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```Cleard: " + textxt + "\n Messages```").then(m => m.delete(3000));
        }    
    }
}
});

client.on('message', message => {
    if(!message.channel.guild) return;
var prefix = "-";
if(message.content.startsWith(prefix + 'ch')) {
    let channel = message.channel
    var embed = new Discord.RichEmbed()
      .setTitle("معلومات الروم")
      .setColor("RANDOM")
      .setDescription(`ايدي الروم <#${channel.id}>\nChannel ID: ${channel.id}`)
      .addField("صنع في", `${channel.createdAt}`)
      .addField("نوع الروم", `${channel.type}`)
      .addField("Extra Information", `Channel is NSFW => ${channel.nsfw}\nChannel Topic=> ${channel.topic}\nChannel Parent => ${channel.parent}\nChannel Position => ${channel.position}`)
 
     message.channel.send({ embed: embed });
  }
 
    });
	


client.on('message', message => {
var prefix = "-";
      if(message.content === prefix + "قفل") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms ❌');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('تم اخفاء القناه , لا يمكن لاي عضو كتابه اي شئ ! ✅  ')
 }
});


client.on('message', message => {
var prefix = "-";
      if(message.content === prefix + "فتح") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('❌');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: true
 })
              message.channel.send('تم فتح القناه , يمكن لاي عضو ارسال رسالة والكتابه ✅ ')
 }
});

      client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('!ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms 📶 ")
                        .addField('**WebSocket:**',api + " ms 📶 ")
         message.channel.send({embed:embed});
                        }
                    });


client.on('message', message => {
	var prefix = "-"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد هذا العضو لانه يملك رتبه اعلي من رتبه البوت**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});

 client.on('message', message => {
	var prefix = "-"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد هذا الشخص لانه يملك رتبه اعلي من رتبه البوت**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

	client.on('message', async message =>{
  if (message.author.boss) return;
	var prefix = "!";

if (!message.content.startsWith(prefix)) return;
	let command = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
	let args = message.content.split(" ").slice(1);
	if (command == "mute") {
		if (!message.channel.guild) return;
		if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("**:x: , ليس لديك صلاحيات لأعطاء ميوت**").then(msg => msg.delete(5000));
		if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("**:x: , البوت لأيملك صلاحيات لأعطاء ميوت**").then(msg => msg.delete(5000));;
		let user = message.mentions.users.first();
		let muteRole = message.guild.roles.find("name", "Muted");
		if (!muteRole) return message.reply("**'Muted' : لا يوجد رتبة الميوت**").then(msg => {msg.delete(5000)});
		if (message.mentions.users.size < 1) return message.reply('**منشن للشخص المراد اسكاته**').then(msg => {msg.delete(5000)});
		let reason = message.content.split(" ").slice(2).join(" ");
		message.guild.member(user).addRole(muteRole);
		const muteembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setThumbnail(user.displayAvatarURL)
		.addField("**العضو**",  '**[ ' + `${user.tag}` + ' ]**',true)
		.addField("**: تم بواسطة**", '**[ ' + `${message.author.tag}` + ' ]**',true)
		.addField("**: السبب**", '**[ ' + `${reason}` + ' ]**',true)
		message.channel.send({embed : muteembed});
		var muteembeddm = new Discord.RichEmbed()
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setDescription(`      
[ ${user} ] : انت معاقب بميوت كتابي
[ ${message.author.tag} ] : تمت معاقبتك بواسطة
[ ${reason} ] : السبب
`)
		.setColor("RANDOM")
	user.send( muteembeddm);
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**:x: , ليس لديك صلاحيات لألغاء الميوت عن شخص**").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**:x: , البوت لأيملك صلاحيات لألغاء الميوت عن شخص**").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**منشن للشخص المراد اسكاته**");

  let role = message.guild.roles.find (r => r.name === "Muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذا شخص ميوت من الأساس**")

  await toMute.removeRole(role)
  message.channel.sendMessage("**:white_check_mark: , لقد تم فك الميوت عن الشخص بنجاح**");

  return;

  }

});
client.on('message',function(message) {
    let prefix = "-";
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
if(!args) return;
message.channel.send(`**${args}**`);
}
});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:pray: نورت السيرفر ياحب , انشاء الله تستمتع معانا وتكون ف مقدمة السيرفر :pray:  
:radioactive: اسمك :  ${member}:radioactive:   
انت العضو رقم  ${member.guild.memberCount} `) 
}).catch(console.error)
})

client.on('message', message => {
  if (true) {
if (message.content === '-invite') {
      message.author.send('  https://discordapp.com/oauth2/authorize?client_id=515951600154705960&scope=bot&permissions=36760572|  رابط دعوه  بوت     ').catch(e => console.log(e.stack));

    }
   } 
  });


client.on('message', message => {
     if (message.content === "-invite") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField("تم ارسال رابط البوت في الخاص , شكرا لاستخدام البوت ")
     
     
     
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
    if (message.content.startsWith("-avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

var prefix ='-'
client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**Put a number**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});

