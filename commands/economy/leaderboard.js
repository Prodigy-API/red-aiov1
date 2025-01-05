const { MessageEmbed } = require('discord.js');
const ecoSchema = require('../../schemas/economy'); // Replace with your actual path to economy schema

module.exports = {
  name: 'leaderboard',
  description: 'Show the top users by balance',
  run: async (client, message, args) => {
    const leaderboard = await ecoSchema.find({}).sort({ balance: -1 }).limit(10);

    const leaderboardEmbed = new MessageEmbed()
      .setTitle('Economy Leaderboard')
      .setColor('#00FF00')
      .setDescription('Top 10 users with the highest balance')
      .setTimestamp();

    leaderboard.forEach((user, index) => {
      leaderboardEmbed.addField(
        `${index + 1}. ${user.username}`,
        `Balance: ${user.balance}`,
        true
      );
    });

    message.channel.send({ embeds: [leaderboardEmbed] });
  },
};