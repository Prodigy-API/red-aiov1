const { Client, CommandInteraction } = require("discord.js");
const simplydjs = require("simply-djs") 
module.exports = {
   name: "embed",
   description: "Create embed",
   type: "CHAT_INPUT",
   run: async (client, interaction, args) => {
 

simplydjs.embedCreate(interaction, {
   slash: true,
   // other options
})
   },
};
