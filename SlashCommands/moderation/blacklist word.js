const db = require('quick.db')
const moment = require('moment');
const { Client, CommandInteraction } = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "blacklist",
    description: "Warn A User,Remove A Warn,Clear All Warns",
    //permissions : ["KICK_MEMBERS", "BAN_MEMBERS"],
    options: [
      {
            type: "SUB_COMMAND",
            name: "addwords",
            description: "Add Words To Blacklist In Your Server",
            options: [{
                name: 'words',
                type: 'STRING',
                description: 'If there is more than a word, then split words with space, eg.()',
                required: true,
            }],
        },
        {
            type: "SUB_COMMAND",
            name: "checkwords",
            description: "Check The BlackListed Words In The Server",
            
        },
        {
            type: "SUB_COMMAND",
            name: "clearall",
            description: "Clear All Blacklisted Words In The Server",
            
        },
        
        
      
        
        
         
    ],


    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      
        const [subcommand] = args;
      const infperms = new MessageEmbed()
      .setColor("DARK_RED")
      .setDescription(
        "Sorry, you dont have permissions to execute this command!"
      )
      .setAuthor("Permission Error");

    if (!interaction.member.permissions.has("MANAGE_GUILD"))
      return interaction
        .followUp({ embeds: [infperms] })
        if(subcommand === 'addwords'){
            const embednoob = new MessageEmbed()
        
            const string = interaction.options.getString('words')
            
            const array = string.split(' ').filter(w => w !== '');
            let nob = new MessageEmbed()
            .setColor("#363636")
            .setDescription(`${client.config.cross} **You Can Only Add 10 Words At Once**`)
            if(array.length>9) return interaction.followUp({embeds : [nob]})
            let bruh;
            let n = 1;
               
            for(i=0; i < array.length; i++){
              db.push(`blacklistedwords_${interaction.guildId}.words`, array[i])
              bruh += `\`${n}\`. ${array[i]}` + '\n';
              n++;
            }    
            
            
            
            embednoob.setTitle('**Added These Words As Blacklisted Words For This Servers**')
            embednoob.setDescription(bruh.replace('undefined', ''))
         embednoob.setColor("363636")
    
                    
                    
             return interaction.followUp({ embeds: [embednoob] });
        }
        if(subcommand === 'checkwords'){
            let noob = db.fetch(`blacklistedwords_${interaction.guildId}.words`)
        
        if(noob === null) return interaction.followUp({content : 'There Are No Blacklisted Words In This Server!!!'})
        let bruh;
        let n = 1;
           
        for(i=0; i < noob.length; i++){
          
          bruh += `\`${n}\`. ${noob[i]}` + '\n';
          n++;
        }    
        let embed = new MessageEmbed()
        .setTitle(`Current Blacklisted Words In This Server`)
        .setColor("363636")
        .setDescription(`${bruh.replace('undefined', '')}`)
       return interaction.followUp({embeds : [embed]})
        }
        if(subcommand === 'clearall'){
         let noob = db.fetch(`blacklistedwords_${interaction.guildId}`)   
         db.delete(`blacklistedwords_${interaction.guildId}`)
                if(noob === null){
                    let bruh = new MessageEmbed()
                    .setDescription(`There Are No Blacklisted Words To Delete`)
.setColor("#363636")
                    return interaction.followUp({embeds : [bruh]})
                }
                
         return interaction.followUp({content: 'Deleted The Black Listed Words From Database'});
        }
            
        
    }
}