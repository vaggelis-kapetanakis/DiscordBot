module.exports = {
  name: "embed",
  description: "Embed",
  execute(message, args, Discord) {
    const newEmbed = new Discord.MessageEmbed()
      .setTitle("Account Verification")
      .setDescription(
        "-------------------------------------------------------------------"
      )
      .addFields({
        name: "MAKE SURE YOU ARE ACCEPTING DM's FROM SERVER \nMEMBERS.\n.",

        value:
          "1. Make sure you are not connected to any VPN. The bot will not \nverify you if your IP address has changed at all, which can be done \nwith the use of a VPN. \n\n2. Confirm that you are the only person on your Wi-Fi network that is \nin this server.\n\n**-Verification Process-**\n\nIf everything above is made sure of, the bot should send you a DM\n upon joining the server. The DM you receive should look like this:\n\nIf you don't receive a DM, type `dc.verify` in this channel. The bot \nshould then DM you.\n(If the bot has not DM'd u within 1 minute type `dc.verify` again)\n\nClick on the bold blue text that says 'Click me to verify' (it may say \nsomething else, but it will always be the bold blue link)\n\nThat will direct you to a website. If you’ve done everything right, it should say Success! The bot will then send you a dm looking like this:",
      })

      .setImage(
        "https://cdn.discordapp.com/attachments/680849958588645454/860613488644980736/unknown.png"
      )
      .setColor(process.env.PRIMARY_COLOR);

    if (message.member.permissions.has("ADMINISTRATOR")) {
      message.channel.send(newEmbed);
    }
    /* if (message.member.roles.cache.has("906277798530932807")) {
      message.channel.send(newEmbed);
    } */

    const sndembed = new Discord.MessageEmbed()
      .setTitle("AFTER YOU VERIFY, GO TO THE `RULES` CHANNEL!!!")
      .setColor(process.env.PRIMARY_COLOR);
    if (message.member.permissions.has("ADMINISTRATOR")) {
      message.channel.send(sndembed);
    }
    /* if (message.member.roles.cache.has("906277798530932807")) {
      message.channel.send(sndembed);
    } */
  },
};
