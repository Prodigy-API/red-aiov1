const Discord = require("discord.js");
const premiumGuildSchema = require("../../schemas/premium")
const { MessageEmbed } = require("discord.js")
module.exports = {
   name: "source-code",
   aliases: ["src", "source"],
   description: "Source Code Of this Bot",
   botpermissions: ["ADMINISTRATOR"],
   usage: "Source Code Of this Bot",
   cooldowns: 1,
   developersOnly: false,
   toggleOff: false,
   run: async (client, message, args) => {

      message.channel.send(`Loading...`).then((m4) => {
         setTimeout(() => {
            m4.edit(`This Code Is Made By Team REDEngine`);
         }, 2000);
      })
   }
}