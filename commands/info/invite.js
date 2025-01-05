const { MessageActionRow, MessageButton, MessageSelectMenu, MessageEmbed } = require("discord.js")

module.exports = {
  name: "invite",
  run: async (client, message, args) => {

    const row = new MessageActionRow()
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
          .setURL("https://www.youtube.com/@whatsupdwag"),
        new MessageButton()
          .setLabel("Vote me")

          .setStyle("LINK")
          .setEmoji("<:Like:1323520539868008568>")
          .setURL("https://www.youtube.com/@whatsupdwag")
      )

    let embed = new MessageEmbed()
      .setTitle(`Invite & Dive With Prod `)
      .setURL("https://discord.com/api/oauth2/authorize?client_id=1322782675987202152&permissions=8&scope=bot")
      .setDescription(`Invite ${client.user.username} to your server`)
      .setFooter(client.user.tag, client.user.displayAvatarURL({ dynamic: true }))
      .setColor("#ff3131")
      .setTimestamp()



    message.channel.send({ embeds: [embed], components: [row] })
  }
}