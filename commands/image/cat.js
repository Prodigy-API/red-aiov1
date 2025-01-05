const axios = require('axios');
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "randomcat",
  aliases: ["cat"],
  description: "Get a random cat image.",
  async run(client, message, args) {
    const url = "https://api.thecatapi.com/v1/images/search";
    let image = null;

    try {
      const response = await axios.get(url);
      image = response.data[0].url;
    } catch (e) {
      return message.channel.send("Failed to fetch cat image :c");
    }

    const embed = new MessageEmbed()
      .setTitle("Random Cat")
      .setImage(image)
      .setColor("RANDOM");

    message.channel.send({ embeds: [embed] });
  }
};