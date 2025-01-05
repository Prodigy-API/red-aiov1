const { MessageActionRow, MessageButton, MessageSelectMenu, MessageEmbed } = require("discord.js")
const { version: discordjsVersion } = require("discord.js")
const config = require("../../botconfig/main")
module.exports = {
  name: "help",
  run: async (client, message, args) => {
    const row = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
          .setCustomId('select')
          .setPlaceholder('REDEngine Menu')

          .addOptions([
            {
              label: 'Main Menu',
              description: 'Shows the main menu',
              emoji: "<a:x_dot:1323875767381262387>",
              value: '0',
            },
            {
              label: 'Config Commands',
              description: 'Shows all the config commands',
              emoji: "<a:x_dot:1323875767381262387>",
              value: '1',
            },

            {
              label: 'Fun Commands',
              description: 'Shows all the fun commands',
              emoji: "<a:x_dot:1323875767381262387>",
              value: '3',
            },
            {
              label: 'Games Commands',
              description: 'Shows all the game commands',
              emoji: "<a:x_dot:1323875767381262387>",
              value: '4',
            },

            {
              label: 'Information Commands',
              description: 'Shows all the information commands',
              emoji: "<a:x_dot:1323875767381262387>",
              value: '5',
            },
            {
              label: 'Moderation Commands',
              description: 'Shows all the moderation commands',
              emoji: "<a:x_dot:1323875767381262387>",
              value: '6',
            },
            {
              label: 'Coding Commands',
              description: 'Shows all the coding commands',
              emoji: "<a:x_dot:1323875767381262387>",
              value: '8',
            },
            {
              label: 'Uptimer Commands',
              description: 'Shows all the uptimer commands',
              emoji: "<a:x_dot:1323875767381262387>",
              value: '9',
            },
            {
              label: 'Utility Commands',
              description: 'Shows all the utility commands',
              emoji: "<a:x_dot:1323875767381262387>",
              value: '7',
            },
            {
              label: 'Image Commands',
              description: 'Shows all the image commands',
              emoji: "<a:x_dot:1323875767381262387>",
              value: '10',
            },
            {
              label: 'Economy Commands',
              description: 'Shows all the economy commands',
              emoji: "<a:x_dot:1323875767381262387>",
              value: '11',
            },
          ]),
      );
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
          .setURL("https://discord.gg/xhz64SqHYC"),
        new MessageButton()
          .setLabel("Vote me")

          .setStyle("LINK")
          .setEmoji("<:Like:1323520539868008568>")
          .setURL("https://discord.gg/xhz64SqHYC")
      )

    const embed = new MessageEmbed()
      .setTitle("**HELP MENU**")
      .setDescription(`<a:Admin:1323523637969686609> __**BOT INFO**__
  <a:x_dot:1323875767381262387>  Prefix: \` ${config.prefix}\`

  <a:Admin:1323523637969686609> __**BOT'S COMMANDS**__
  <a:x_dot:1323875767381262387> Config Commands
  <a:x_dot:1323875767381262387> Fun Commands
  <a:x_dot:1323875767381262387> Games Commands
  <a:x_dot:1323875767381262387> Information Commands
  <a:x_dot:1323875767381262387> Moderation Commands
  <a:x_dot:1323875767381262387> Coding Commands
  <a:x_dot:1323875767381262387> Uptimer Commands
  <a:x_dot:1323875767381262387> Utility Commands
  <a:x_dot:1323875767381262387> Image Commands
  <a:x_dot:1323875767381262387> Economy Commands

<a:Admin:1323523637969686609> __**BOT'S STATUS**__
  <a:x_dot:1323875767381262387> Current Ping  ${client.ws.ping}ms
  <a:x_dot:1323875767381262387> Discord.js Version: ${discordjsVersion}
  <a:x_dot:1323875767381262387> Running on Node ${process.version} on ${process.platform} ${process.arch}`)
      .setImage("https://media.discordapp.net/attachments/1322782102214676557/1324475322841960562/PRODIGYBANNER.png?ex=67784944&is=6776f7c4&hm=a91ff4a73ab1ece869d77e1b6012341ffcec59a66a267fe02c5f13a68313844c&=&width=1100&height=330")
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setColor("#ff3131")


    let sendmsg = message.channel.send({ embeds: [embed], components: [row, row2] })

    let embed1 = new MessageEmbed()
      .setColor('#ff3131')
      .setTitle('**HELP MENU**')
      .addFields(
        { name: "**CONFIG COMMANDS**", value: "`set-countingchannel`, `setwelcomechannel`, `setleavechannel`" })
      .setImage(" https://media.discordapp.net/attachments/1322782102214676557/1324475322841960562/PRODIGYBANNER.png?ex=67784944&is=6776f7c4&hm=a91ff4a73ab1ece869d77e1b6012341ffcec59a66a267fe02c5f13a68313844c&=&width=1100&height=330")
      .setColor("#ff3131")
      .setFooter('Page 1')




    let embed3 = new MessageEmbed()
      .setTitle('**Help Menu**')
      .setColor('#ff3131')
      .addFields(
        { name: "**FUN COMMANDS**", value: "`8ball`, `activity`, `pixelize`, `meme`" })
      .setColor("#ff3131")
      .setImage("https://media.discordapp.net/attachments/1322782102214676557/1324475322841960562/PRODIGYBANNER.png?ex=67784944&is=6776f7c4&hm=a91ff4a73ab1ece869d77e1b6012341ffcec59a66a267fe02c5f13a68313844c&=&width=1100&height=330")
      .setFooter('Page 3')

    let embed4 = new MessageEmbed()

      .setTitle('**Help Menu**')
      .setColor('#ff3131')
      .addFields(
        { name: "**GAMES COMMANDS**", value: "`c4`, `tictactoe`, `roadrace`, `snake`, `quickclick`, `catchthefish`" })
      .setImage("https://media.discordapp.net/attachments/1322782102214676557/1324475322841960562/PRODIGYBANNER.png?ex=67784944&is=6776f7c4&hm=a91ff4a73ab1ece869d77e1b6012341ffcec59a66a267fe02c5f13a68313844c&=&width=1100&height=330")
      .setColor("#ff3131")
      .setFooter('Page 4')

    let embed5 = new MessageEmbed()
      .setTitle('**Help Menu**')
      .setColor('#ff3131')
      .addFields(
        { name: "**INFO COMMANDS**", value: "`help`, `cmdhelp`, `botinfo`, `ping`, `invite`, `embed`" })
      .setImage("https://media.discordapp.net/attachments/1322782102214676557/1324475322841960562/PRODIGYBANNER.png?ex=67784944&is=6776f7c4&hm=a91ff4a73ab1ece869d77e1b6012341ffcec59a66a267fe02c5f13a68313844c&=&width=1100&height=330")
      .setColor("#ff3131")
      .setFooter('Page 5')

    let embed6 = new MessageEmbed()
      .setTitle('**Help Menu**')
      .setColor('#ff3131')
      .addFields(
        { name: "**MOD COMMANDS**", value: "`ban`, `addroleall`, `removeroleall`, `softban`, `purge`, `mute`, `kick`, `tempmute`, `nuke` `stealemoji`" })
      .setFooter('Page 6')
      .setImage("https://media.discordapp.net/attachments/1322782102214676557/1324475322841960562/PRODIGYBANNER.png?ex=67784944&is=6776f7c4&hm=a91ff4a73ab1ece869d77e1b6012341ffcec59a66a267fe02c5f13a68313844c&=&width=1100&height=330")
      .setColor("#ff3131")
    let embed8 = new MessageEmbed()
      .setTitle('**Help Menu**')
      .setColor('#ff3131')
      .addFields(
        { name: "**Coding Commands**", value: "`Src`" })
      .setFooter('Page 8')
      .setImage("https://media.discordapp.net/attachments/1322782102214676557/1324475322841960562/PRODIGYBANNER.png?ex=67784944&is=6776f7c4&hm=a91ff4a73ab1ece869d77e1b6012341ffcec59a66a267fe02c5f13a68313844c&=&width=1100&height=330")
      .setColor("#ff3131")
    let embed7 = new MessageEmbed()
      .setTitle('**Help Menu**')
      .setColor('#ff3131')
      .addFields({ name: "**UTILITY COMMANDS**", value: "`addtag`, `edittag`, `removetag`, `afk`, `rolelist`, `snipe`, `timer`, `calculator`, `avatar`, `serverinfo`, `ss`, `dump`" })
      .setImage("https://media.discordapp.net/attachments/1322782102214676557/1324475322841960562/PRODIGYBANNER.png?ex=67784944&is=6776f7c4&hm=a91ff4a73ab1ece869d77e1b6012341ffcec59a66a267fe02c5f13a68313844c&=&width=1100&height=330")
      .setColor("#ff3131")
      .setFooter('Page 7')
      .setImage("https://media.discordapp.net/attachments/1322782102214676557/1324475322841960562/PRODIGYBANNER.png?ex=67784944&is=6776f7c4&hm=a91ff4a73ab1ece869d77e1b6012341ffcec59a66a267fe02c5f13a68313844c&=&width=1100&height=330")
      .setColor("#ff3131")

    let embed9 = new MessageEmbed()
      .setTitle('**Help Menu**')
      .setColor('#ff3131')
      .addFields({ name: "**UPTIMER COMMANDS**", value: "`add-monitor`" })
      .setImage("https://media.discordapp.net/attachments/1221788310935179294/1304710462591598612/standard_2.gif")
      .setColor("#ff3131")
      .setFooter('Page 9')

    let embed11 = new MessageEmbed()
      .setTitle('**Help Menu**')
      .setColor('#ff3131')
      .addFields({ name: "**ECONOMY COMMANDS**", value: "`balance`, `deposit`, `withdraw`, `search`, `shop`, `inv`, `pet`, `adopt`, `buy`, `sell`, `use`, `gamble`, `multi`, `beg`, `daily`, `fish`, `hunt`, `rob`, `rich` `postmeme`" })
      .setImage("https://media.discordapp.net/attachments/1322782102214676557/1324475322841960562/PRODIGYBANNER.png?ex=67784944&is=6776f7c4&hm=a91ff4a73ab1ece869d77e1b6012341ffcec59a66a267fe02c5f13a68313844c&=&width=1100&height=330")
      .setColor("#ff3131")
      .setFooter('Page 11')

    let embed10 = new MessageEmbed()
      .setTitle('**Help Menu**')
      .setColor('#ff3131')
      .addFields({ name: "**UTILITY COMMANDS**", value: "`anime`, `art`, `banner`, `cat`, `color`, `dog`, `gif`, `ss`" })
      .setImage("https://media.discordapp.net/attachments/1322782102214676557/1324475322841960562/PRODIGYBANNER.png?ex=67784944&is=6776f7c4&hm=a91ff4a73ab1ece869d77e1b6012341ffcec59a66a267fe02c5f13a68313844c&=&width=1100&height=330")
      .setColor("#ff3131")
      .setFooter('Page 10')
    const filter = i => i.user.id === message.author.id;
    const collector = message.channel.createMessageComponentCollector({
      filter,
      time: 40000000,
      componentType: "SELECT_MENU"
    });

    collector.on("collect", async (collected) => {
      const value = collected.values[0]
      if (value === "0") {
        collected.update({ embeds: [embed], components: [row, row2] })
      }
      if (value === "1") {
        collected.update({ embeds: [embed1], components: [row, row2] })
      }
      if (value === "3") {
        collected.update({ embeds: [embed3], components: [row, row2] })
      }
      if (value === "4") {
        collected.update({ embeds: [embed4], components: [row, row2] })
      }
      if (value === "5") {
        collected.update({ embeds: [embed5], components: [row, row2] })
      }
      if (value === "6") {
        collected.update({ embeds: [embed6], components: [row, row2] })
      }
      if (value === "8") {
        collected.update({ embeds: [embed8], components: [row, row2] })
      }
      if (value === "9") {
        collected.update({ embeds: [embed9], components: [row, row2] })
      }
      if (value === "7") {
        collected.update({ embeds: [embed7], components: [row, row2] })
      }
      if (value === "10") {
        collected.update({ embeds: [embed10], components: [row, row2] })
      }
      if (value === "11") {
        collected.update({ embeds: [embed11], components: [row, row2] })
      }
    })
  }
}