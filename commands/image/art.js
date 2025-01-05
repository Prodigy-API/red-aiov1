const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch'); // Make sure you have node-fetch installed

module.exports = {
  name: 'randomart',
  description: 'Get a random piece of art from the Metropolitan Museum of Art',
  run: async (client, message, args) => {
    try {
      // Fetching a random art object ID from the Met's collection
      const objectResponse = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects');
      const objectData = await objectResponse.json();

      // Select a random object ID
      const randomObjectId = objectData.objectIDs[Math.floor(Math.random() * objectData.objectIDs.length)];

      // Fetching the detailed information of the random object
      const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomObjectId}`);
      const data = await response.json();

      // Check if the object has an image
      if (data.primaryImage) {
        // Creating an embed with the artwork
        const artEmbed = new MessageEmbed()
          .setColor('#DDA0DD')
          .setTitle(data.title)
          .setImage(data.primaryImage)
          .setDescription(`${data.artistDisplayName}\n${data.objectDate}`)
          .setFooter('Provided by The Metropolitan Museum of Art');

        // Sending the embed to the channel
        message.channel.send({ embeds: [artEmbed] });
      } else {
        message.channel.send('Could not find an image for this art piece 😞');
      }
    } catch (error) {
      console.error('Error fetching art: ', error);
      message.channel.send('Could not fetch art 😞');
    }
  }
};
