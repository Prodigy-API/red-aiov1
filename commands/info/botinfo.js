const { MessageEmbed, version: djsversion, MessageActionRow, MessageButton } = require("discord.js");
const moment = require("moment");
const momentDurationFormatSetup = require("moment-duration-format");
const version = require("../../package.json").version;
const { utc } = require("moment");
const os = require("os");
const ms = require("ms")
module.exports = {

  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  name: "stats",
  aliases: ['bs', 'botinfo'],
  description: "Check the info of the bot",
  run: async (client, message, args, utils) => {
    const row = new MessageActionRow().addComponents(

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
    );
    const uptime = moment
      .duration(client.uptime)
      .format(" D [Days] - H [Hours] - m [Minutes] - s [Seconds]");

    const upvalue = (Date.now() / 1000 - client.uptime / 1000).toFixed(0);

    const core = os.cpus()[0];
    const embed = new MessageEmbed()

      .setThumbnail(client.user.displayAvatarURL())
      .setColor('#ff3131')
      .addField(
        "**❯ General : **",
        `**❯ Client :** ${client.user.tag} (${client.user.id}),
        **❯ Commands :** ${client.commands.size},
        **❯ Servers :** ${client.guilds.cache.size.toLocaleString()}, 
        **❯ Users :** ${client.guilds.cache
          .reduce((a, b) => a + b.memberCount, 0)
          .toLocaleString()},
        **❯ Channels :** ${client.channels.cache.size.toLocaleString()},
        **❯ Creation Date :** ${utc(client.user.createdTimestamp).format(
            "Do MMMM YYYY HH:mm:ss"
          )}
        **❯ Node.js :** ${process.version}
        **❯ Discord.js :** v${djsversion}
        **❯ Up Since :**  <t:${upvalue}:T>
        \u200b`
      )
      .setColor('#ff3131')
      .addField(
        "**❯ CPU :**",
        `**Cores : **${os.cpus().length}
        **Model :** ${core.model}
        ** Speed :** ${core.speed}MHz`
      )
      .setColor('#ff3131')
      .addField(
        "**❯ OWNER : Prod**",
        `**Owner : ** <@970987607611830272> , <@970987607611830272>
        **Developer :** <@970987607611830272> , <@970987607611830272>
        **Manager :** <@970987607611830272>`
      )

      .setTimestamp();
    message.channel.send({ embeds: [embed], components: [row] });
  },
};