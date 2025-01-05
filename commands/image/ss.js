const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch'); // Make sure you have node-fetch installed

module.exports = {
  name: 'screenshot',
  description: 'Get a screenshot of a web page',
  run: async (client, message, args) => {
    const url = args[0];
    if (!url) {
      return message.channel.send('Please provide a URL for the screenshot.');
    }

    // Your access key from screenshotlayer
    const access_key = 'YOUR_ACCESS_KEY'; 

    // Construct the API URL
    const apiUrl = `http://api.screenshotlayer.com/api/capture?access_key=${access_key}&url=${encodeURIComponent(url)}&viewport=1440x900&fullpage=1`;

    try {
      // Fetching the screenshot image as a buffer
      const response = await fetch(apiUrl);
      const buffer = await response.buffer();

      // Creating an embed with the screenshot
      const screenshotEmbed = new MessageEmbed()
        .setColor('#3498DB')
        .setTitle('Web Page Screenshot')
        .setImage('attachment://screenshot.jpg')
        .setDescription(url)
        .setFooter('Screenshot provided by screenshotlayer');

      // Sending the embed to the channel along with the image attachment
      message.channel.send({
        embeds: [screenshotEmbed],
        files: [{ attachment: buffer, name: 'screenshot.jpg' }]
      });
    } catch (error) {
      console.error('Error fetching screenshot: ', error);
      message.channel.send('Could not fetch screenshot 😞');
    }
  }
};
