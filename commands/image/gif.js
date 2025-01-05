const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'gif',
  description: 'Get a GIF from Giphy based on a keyword',
  run: async (client, message, args) => {
    const keyword = args.join(" ");
    if (!keyword) {
      return message.channel.send('Please provide a keyword to search for a GIF.');
    }

    // Your Giphy API key
    const GIPHY_API_KEY = '9oGtUHZZbqg5pPIysLkA0wBgpxKAY0cb';
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${encodeURIComponent(keyword)}&limit=1`;

    try {
      const response = await fetch(apiURL);
      const data = await response.json();

      // If there's no data or an empty array is returned
      if (!data.data || data.data.length === 0) {
        return message.channel.send('No GIFs found for that keyword.');
      }

      // Find the URL of GIF
      const gifUrl = data.data[0].images.original.url;

      // Creating an embed with the GIF
      const gifEmbed = new MessageEmbed()
        .setColor('#00FF00')
        .setTitle(`GIF for '${keyword}'`)
        .setImage(gifUrl)
        .setFooter('Powered by Giphy');

      // Sending the embed to the channel
      message.channel.send({ embeds: [gifEmbed] });
    } catch (error) {
      console.error('Error fetching gif: ', error);
      message.channel.send('Could not fetch GIF 😞');
    }
  }
};
