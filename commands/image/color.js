const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'color',
  description: 'Displays a color based on a provided hex code',
  run: async (client, message, args) => {
    const color = args[0];

    // Default color if no argument is given, or validation for the hex code
    if (!color || !/^#([0-9A-F]{3}){1,2}$/i.test(color)) {
      return message.channel.send('Please provide a valid hex color code. Example: `!color #123abc`');
    }

    const colorEmbed = new MessageEmbed()
      .setColor(color)
      .setTitle('Color Display')
      .setDescription(`Here is the color ${color}`)
      .setThumbnail(`https://singlecolorimage.com/get/${color.substring(1)}/100x100`);

    message.channel.send({ embeds: [colorEmbed] });
  }
};
