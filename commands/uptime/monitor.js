const { MessageActionRow, MessageButton, MessageSelectMenu, MessageEmbed } = require("discord.js")

module.exports = {
  name: "add-monitor",
  run: async (client, message, args) => {

    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setLabel("Add monitor")

          .setStyle("LINK")
          .setEmoji("1173593209499308174")
          .setURL("https://uptimerx.coodies.repl.co/"),
      )

    let embed = new MessageEmbed()
      .setTitle(`Add Your Bot Webview Url For 24/7`)
      .setURL("https://uptimerx.coodies.repl.co/")
      .setDescription(`Visit The Website & Add Your Webview Url To Make It 24/7 Online`)
      .setFooter(client.user.tag, client.user.displayAvatarURL({ dynamic: true }))
      .setColor("#87CEEB")
      .setTimestamp()



    message.channel.send({ embeds: [embed], components: [row] })
  }
}