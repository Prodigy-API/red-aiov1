const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch'); // Make sure you have node-fetch installed

module.exports = {
  name: 'animepic',
  description: 'Get a random anime image',
  run: async (client, message, args) => {
    try {
      // Fetching a random anime image from nekos.life API
      const response = await fetch('https://nekos.life/api/v2/img/neko');
      const data = await response.json();

      // Creating an embed with the anime image
      const animeEmbed = new MessageEmbed()
        .setColor('#FFC0CB')
        .setTitle('Random Anime Image')
        .setImage(data.url)
        .setFooter('Powered by nekos.life');

      // Sending the embed to the channel
      message.channel.send({ embeds: [animeEmbed] });
    } catch (error) {
      console.error('Error fetching anime image: ', error);
      message.channel.send('Could not fetch anime image 😞');
    }
  }
};
