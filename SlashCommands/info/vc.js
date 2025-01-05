const Client = require('../../index')
const  {CommandInteraction} = require('discord.js')
  const  db = require('../../schemas/vc')

module.exports = {
    name: 'setvc',
    description: 'Set the channel for the vc',
    options: [
        {
            name: 'channel',
            description: 'The vc to set.',
            type: 'CHANNEL',
            channelTypes: ['GUILD_VOICE']
        }
    ],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {string[]} args
     */
    run: async (client, interaction, args) => {
        const channel = interaction.options.getChannel('channel')
        const data = await db.findOne({Guild: interaction.guild.id})
        if (!data) {
            await db.create({Guild: interaction.guild.id, Channel: channel.id})
            return interaction.followUp({content: `Set the vc channel to ${channel.toString()}`})
        } else {
            await db.findOneAndUpdate({Guild: interaction.guild.id}, {Channel: channel.id})
            return interaction.followUp({content: `Set the vc channel to ${channel.toString()}`})
        }
    }
}
