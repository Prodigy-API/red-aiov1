


const {
  Client,
  MessageEmbed,
  CommandInteraction,
  Guild,
  IntegrationApplication,
  Message,
} = require("discord.js");
const moment = require("moment");

module.exports = {
  name: "kick",
  description: "kick command",
  type: "CHAT_INPUT",
  options: [
    {
      name: "mention",
      description: "Mention the user.",
      type: "USER",
      required: false,
    },
    {
      name: "id",
      description: "Paste ID of the user to here.",
      type: "STRING",
      required: false,
    },

    {
      name: "reason",
      description: "Reason to ban the user?",
      type: "STRING",
      required: false,
    },
    
  ],
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   *
   */

  run: async (client, interaction, args) => {
    const guild = interaction.guild;
    const id = interaction.options.getString("id");

    const reason = interaction.options.getString("reason");
    const member =
      interaction.options.getMember("mention") ||
      interaction.guild.members.cache.get(id);
      

    const infperms = new MessageEmbed()
      .setColor("DARK_RED")
      .setDescription(
        "Sorry, you dont have permissions to execute this command!"
      )
      .setAuthor("Permission Error");

    if (!interaction.member.permissions.has("KICK_MEMBERS"))
      return interaction
        .followUp({ embeds: [infperms] })
        .then((m) => {
          setTimeout(() => m.delete(), 5000);
        })
        .catch((err) => {
          console.log(err);
        });


      if(!reason) {
        const reason = `No Reason Specified.`
      }

      

      if(!member) {
        const noban = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Error')
        .setDescription('Please Tell Me Who to kick.')
        interaction.followUp({ embeds: [noban] })
      }

      const banembed = new MessageEmbed()
      .setColor("DARK_AQUA")
      
      .setDescription(
        `User Got Kicked ${member.user.username}#${member.user.discriminator} \n \n Kicked by ${interaction.user.username}#${interaction.user.discriminator}`
      );


    member.kick({ reason});

    interaction.followUp({ embeds: [banembed] });
  },
}; 
