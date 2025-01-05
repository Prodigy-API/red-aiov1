
const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js")
const config = require("../../botconfig/main")
const client = require("../../index")
client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.guild.me.permissionsIn(message.channel).has("SEND_MESSAGES"))
    return;


  // mentioned bot

  const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(prefixMention)) {

    let embed = new MessageEmbed()
      .setTitle(`${client.user.username} IS HERE!`)
      .setDescription(`**Hey!! ${message.author.username},**
        > <a:exe_blueheart:1304704319035146281> This Code Is Provided By <@970987607611830272> 

        > <a:exe_dot:1304701925807357972> Don't Know The Prefix: \`${config.prefix}\` 
        > <a:exe_dot:1304701925807357972> If You Don't Know Where to Start Type :**${config.prefix}help**
        > <a:exe_dot:1304701925807357972> If you continue to have problems [Click Here](https://discord.gg/2QDwvbn23X)
        > <a:exe_dot:1304701925807357972> If Bot is not Responding Type : **${config.prefix}ping**`)
      .setThumbnail(client.user.displayAvatarURL())
      .setColor("#ff3131")
      .setFooter(`Thanks For Using Me`)
    const row2 = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setLabel("Youtube")

          .setStyle("LINK")
          .setEmoji("<:YouTube:1323523442653528155>")
          .setURL("https://www.youtube.com/@whatsupdwag"),
        new MessageButton()
          .setLabel("Support Server")

          .setStyle("LINK")
          .setEmoji("<:Ticket:1323523459585933436>")
          .setURL("https://dsc.gg/redenginedsc"),
        new MessageButton()
          .setLabel("Vote me")

          .setStyle("LINK")
          .setEmoji("<:Like:1323520539868008568>")
          .setURL("https://dsc.gg/redenginedsc")
      )
    message.channel.send({ embeds: [embed], components: [row2] })

  }

})
