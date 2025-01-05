// File: commands/dog/dog.js
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch'); // You may need to install node-fetch if not already installed

module.exports = {
  name: "dog",
  description: "Get a random dog picture",
  run: async (client, message, args) => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      const embed = new MessageEmbed()
        .setColor('#87CEEB')
        .setTitle('Random Dog')
        .setImage(data.message)
        .setFooter('Woof Woof!');
      message.channel.send({ embeds: [embed] });
    } catch (error) {
      console.error('Error fetching dog picture: ', error);
      message.channel.send('Could not fetch dog picture 😞');
    }
  }
};
