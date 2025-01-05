const config = require("../../botconfig/main")

const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")
const client = require("../../index")
client.on('guildCreate', guild => {
    const channel = guild.channels.cache.find(channel => channel.type === 'GUILD_TEXT' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
    let embed = new MessageEmbed()
        .setColor('#87CEEB')
        .setTitle('<:exe_plus:1304703174656917586> **__CONNECTED TO NEW SERVER__**')
        .setURL('https://discord.gg/2QDwvbn23X')
        .setDescription(`> <a:exe_dot:1304701925807357972>  THANKS YOU FOR INVITING ME. MY PREFIX IS w!`)

        .addFields(
            { name: '<:exe_bot:1304700213872820295> **__CREATORS__**', value: '> <a:exe_dot:1304701925807357972> ray.dev' }
        )

        .setImage('https://media.discordapp.net/attachments/1221788310935179294/1304710462591598612/standard_2.gif')
        .setTimestamp()
        .setFooter('REDEngine', 'https://dsc.gg/redenginedsc');
    channel.send({ embeds: [embed] });
}) 
