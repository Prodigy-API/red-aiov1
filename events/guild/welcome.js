const client = require('../../index');
const { MessageEmbed, MessageAttachment } = require("discord.js");
const wlcSchema = require("../../schemas/welcome");
const pop = require("popcat-wrapper");
const ultrax = require("ultrax") 
client.on('guildMemberAdd', async(member) => {

  

//ignore the upper part ^^

  
  
//WELCOMING SYSTEM

const wData = await wlcSchema.findOne({Guild: member.guild.id});

if(!wData) return;
  
  
   let  bg = 'https://media.discordapp.net/attachments/1221788310935179294/1304710462591598612/standard_2.gif'
// defining the member's avatar with "PNG" as format.
let  avatar = member.user.displayAvatarURL({ format:  "png" })
// defining text_1 (title)
let  text1 = "Welcome"
// defining text_2 (subtitle)
let  text2 = member.user.tag
// defining text_3 (footer)
let  text3 = `Now we have ${member.guild.memberCount} member`
// defining the color, here its white
let  color = '#87CEEB'
// defining the options and setting them (Those are optional)

// creating the image
const image = await  ultrax.welcomeImage(bg, avatar, text1, text2, text3, color)



client.channels.cache.get(wData.Channel).send({
 files: [image]
})
  
})