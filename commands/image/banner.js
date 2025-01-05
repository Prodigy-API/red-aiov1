const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "banner",
  aliases: ["userbanner", "profilebanner"],
  description: "Get the banner image from a user's profile.",
  async run(client, message, args) {
    let user = message.mentions.users.first() || message.author;

    // Need to fetch the user in order to get banner details
    client.users.fetch(user.id, { force: true }).then(fetchedUser => {
      const bannerUrl = fetchedUser.bannerURL({ size: 1024, dynamic: true });

      if (bannerUrl) {
        const embed = new MessageEmbed()
          .setTitle(`${fetchedUser.tag}'s Banner`)
          .setImage(bannerUrl)
          .setColor("RANDOM");

        message.channel.send({ embeds: [embed] });
      } else {
        message.channel.send("This user does not have a banner.");
      }
    }).catch(err => {
      console.error(err);
      message.channel.send("Unable to fetch user banner.");
    });
  }
};