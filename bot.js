const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "-";

client.on('ready', () => {
     client.user.setActivity(" -help -Mircale System",{type: 'S'})

});


client.on("message", message => {
    var prefix = "-";
 if (message.content === "-help") {
  const embed = new Discord.RichEmbed()  
      .setColor("RANDOM") 
      .setDescription(`Mircale System Bot | Help Menu :

${prefix}ban ⇏ خاصية الباند
${prefix}bc ⇏ خاصية البرودكاست
${prefix}kick ⇏ خاصية الطرد
${prefix}clear ⇏ خاصية مسح الشات
${prefix}bans ⇏ لمعرفة عدد المحظورين من سيرفر
${prefix}mute ⇏ لاعطاء شخص ميوت
${prefix}ping ⇏ لمعرفة سرعة البوت
${prefix}server ⇏ لمعرفة معلومات السيرفر
${prefix}roles ⇏ لعرض كل رتب السيرفر
${prefix}rules ⇏ القوانين
${prefix}id ⇏ لمعرفة ايدي الديسكورد الخاص بك
${prefix}warn ⇏ لتحذير شخص ما
      `)
   message.channel.sendEmbed(embed)
    
   }
   });

client.on('message', message =>{
    let args = message.content.split(' ');
    let prefix = '-';
    
    if(args[0] === `${prefix}avatar`){
        let mentions = message.mentions.members.first()
        if(!mentions) {
          let sicon = message.author.avatarURL
          let embed = new Discord.RichEmbed()
          .setImage(message.author.avatarURL)
          .setColor("RANDOM") 
          .setDescription(`**${message.author.username}#${message.author.discriminator}** Avatar :`);
          message.channel.send({embed})
        } else {
          let sicon = mentions.user.avatarURL
          let embed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setDescription(`**${mentions.user.username}#${mentions.user.discriminator}** Avatar :`)
          .setImage(sicon)
          message.channel.send({embed})
        }
    };
});

client.on('message', message => {
    if (message.content === '-roles') {
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('Roles :',`**[ ${roles} ]**`)
        message.channel.sendEmbed(embed);
    }
});


	client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('-ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken :**',msg + " ms :signal_strength: ")
                        .addField('**WebSocket :**',api + " ms :signal_strength: ")
         message.channel.send({embed:embed});
                        }
                    });
					
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'hi') {
              message.channel.send('Welcome :heart:');
              message.channel.sendFile("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8KNSG9XDY6qOJ8G8IRcLiIUDD-dCY7wCzKwIs8Idi5Y55qOxGgg");
               

            }
});

client.on('message', message => {
            if (message.content.startsWith("-قوانين")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **اولا** ' ,' **ممنوع السب** ')
.addField('     **ثانيا** ' ,' **لا تسوي سبام ** ')
.addField('     **ثالثا** ' ,' **لا تزعج الاخرين** ')
.addField('    **رابعا**' ,' **ممنوع الاعلانات** ')
.addField('    **خامسا**' ,' **احترم الاخرين** ')
.addField('    **سادسا**' ,' **لا تنشر في الشات او بل خاص** ')
.addField('    **سابعا**' ,' **لا تنشر روابط!** ')
.addField('    **ثامنا**' ,' **لا تسوي سبام ايموجي** ')
.addField('    **تاسعا**' ,' **لا تطلب رتبه الاداره !** ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});

const moment = require('moment');

client.on("guildMemberAdd", member => {
let welcomer = member.guild.channels.find("name","chat");
      if(!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let norelden = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الديسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
         .addField(': تاريخ دخولك السيرفر',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true)      
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:norelden});          
               
 
      }
      });

client.on('message', message => {
     if(message.content.startsWith("-clear")) {
         var args = message.content.split(" ").slice(1);
 if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**:x: , انت لأتملك صلاحيات لحذف الرسائل**');
  if (!args[0]) return message.channel.send('**:x: | أكتب عدد الرسائل المراد حذفها !**');

  message.channel.bulkDelete(args[0]).then(() => {
    const embed = new Discord.RichEmbed()
      .setColor(0xF16104)
      .setDescription(`[ \`\`${args[0]}\`\` ] : عدد الرسائل التي تم حذفها`);
    message.channel.send({ embed }).then(m => m.delete(2000));

    const actionlog = message.guild.channels.find('name', 'logs...');

    if (!actionlog) return console.log('Can\'t find action-log channel. Are you sure that this channel exists and I have permission to view it? **CANNOT POST LOG.**');
    const embedlog = new Discord.RichEmbed()
      .setDescription('Purge')
      .setColor('RANDOM')
      .addField('Purged By :', `<@${message.author.id}> with ID ${message.author.id}`)
      .addField('Purged in :', message.channel)
      .addField('Time :', message.createdAt);
    actionlog.send(embedlog);
   
  });
};

});


client.on('message', function(message) {
	const myID = "195088897234042880";
    let args = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(prefix + "rename")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('.');
        client.user.setUsername(args);
        message.channel.send(':white_check_mark: , Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "st")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args , 'https://twitch.tv/OBX Comminty');
        message.channel.send(':white_check_mark: , Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "playing")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args);
        message.channel.send(':white_check_mark: , Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "listen")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'LISTENING'});
        message.channel.send(':white_check_mark: , Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "watch")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'WATCHING'});
        message.channel.send(':white_check_mark: , Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "setavatar")) {
				        if(message.author.id !== myID) return;
        client.user.setAvatar(args);
        message.channel.send(':white_check_mark: , Done!').then(msg => {
                if(!args) return message.reply('اكتب الحالة اللي تريدها.');
           msg.delete(5000);
          message.delete(5000);
        });
    }
});

client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('.com', '.net', '.tk')){
        message.delete()
    return message.reply(`**:angry: , لأتنشر هنا !**`)
    }
});

client.on('message', (message)=>{
        if (message.content.startsWith(`!embed`)) {
                var embed = new Discord.RichEmbed()
                .setAuthor(client.user.username,client.user.avatarURL)
                .setDescription(message.content.split(" ").join(" ").slice(7))
                .setColor("RANDOM")
                message.channel.send(embed);
        } else if (message.content.startsWith(`!say`)) {
                message.channel.send(message.content.split(" ").join(" ").slice(5));
        };
})

      client.on('message', msg => { 
        if (msg.content.startsWith(`-warn`)) {
          if(!msg.member.hasPermission("MANAGE_MESSAGES")) return;
           let args = msg.content.split(" ").slice(1);
          if (!msg.mentions.members.first()) return msg.reply('**منشن للشخص الذي تريد تحذيره**')
          if (!args[1]) return msg.reply('**الرجاء كتابة السبب**')
          if (msg.guild.channels.find('name', 'warns')) {
            msg.guild.channels.find('name', 'warns').send(`${msg.mentions.members.first()} : تم أعطائه تنبيه
            ${args.join(" ").split(msg.mentions.members.first()).slice(' ')} : السبب`)
          }
        }
})

    client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='-members')
      var IzRo = new Discord.RichEmbed()
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle(':tulip: | Members Count')
      .addField(': عدد اعضاء السيرفر',`${message.guild.memberCount}`)
      message.channel.send(IzRo);

    });

	client.on('message', async message =>{
  if (message.author.boss) return;
	var prefix = "-";

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

client.on('message', message => {
const adminprefix = "-";
const devs = ['441615240006729728'];
    var command = message.content.split(" ")[0];
    if(command == adminprefix + 'bc') {
        var args = message.content.split(' ').slice(1).join(' ');
        if(message.author.bot) return;
        if(!args) return message.channel.send(`**:x: | الرجاء كتابة رسالة لأرسال البرودكاست**`).then(msg => msg.delete(5000));
       
        let bcSure = new Discord.RichEmbed()
        .setTitle(`**هل أنت متاكد من أرسال البرودكاست الى ( ** ${message.guild.memberCount} ** ) عضو**`)
        .setColor('RANDOM')
        .setDescription(`**\n➥ رسألتك : **\n\n${args}`)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL)
       
        message.channel.send(bcSure).then(msg => {
            msg.react('✅').then(() => msg.react('❎'));
            message.delete();
           
           
            let yesEmoji = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
            let noEmoji = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
           
            let sendBC = msg.createReactionCollector(yesEmoji);
            let dontSendBC = msg.createReactionCollector(noEmoji);
           
            sendBC.on('collect', r => {
                message.guild.members.forEach(member => {
                    member.send(args.replace(`[user]`, member)).catch();
                    if(message.attachments.first()){
                        member.sendFile(message.attachments.first().url).catch();
                    }
                })
                message.channel.send(`:timer: , **عضو ** \`\`${message.guild.memberCount}\`\` **تم ارسال الرسالة الى**`).then(msg => msg.delete(5000));
                msg.delete();
            })
            dontSendBC.on('collect', r => {
                msg.delete();
                message.reply(':white_check_mark: , **تم الغاء ارسال رسالة البرودكاست**').then(msg => msg.delete(5000));
            });
        })
    }
});


client.login(process.env.BOT_TOKEN);
.gitignore
