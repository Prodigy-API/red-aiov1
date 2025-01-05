// Hug command
// file: commands/roleplay/hug.js
module.exports = {
  name: 'hug',
  description: 'Hug another user',
  execute(message, args) {
    const userToHug = message.mentions.users.first();
    if (userToHug) {
      return message.channel.send(`${message.author} gave ${userToHug} a hug! 🤗`);
    } else {
      return message.reply('you need to mention a user to hug them!');
    }
  },
};

// Kiss command
// file: commands/roleplay/kiss.js
module.exports = {
  name: 'kiss',
  description: 'Kiss another user',
  execute(message, args) {
    const userToKiss = message.mentions.users.first();
    if (userToKiss) {
      return message.channel.send(`${message.author} gave ${userToKiss} a kiss! 😘`);
    } else {
      return message.reply('you need to mention a user to kiss them!');
    }
  },
};

// Clap command
// file: commands/roleplay/clap.js
module.exports = {
  name: 'clap',
  description: 'Clap for someone or something',
  execute(message, args) {
    const clappingText = args.join(' ') || 'Someone did something amazing!';
    return message.channel.send(`👏 ${clappingText} 👏`);
  },
};

// Slap command
// file: commands/roleplay/slap.js
module.exports = {
  name: 'slap',
  description: 'Slap another user (virtually)',
  execute(message, args) {
    const userToSlap = message.mentions.users.first();
    if (userToSlap) {
      return message.channel.send(`${message.author} just slapped ${userToSlap}! 🖐️`);
    } else {
      return message.reply('you need to mention a user to slap them!');
    }
  },
};
