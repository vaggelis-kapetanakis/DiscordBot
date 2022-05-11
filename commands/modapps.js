module.exports = {
  name: "modapps",
  description: "mod apps",
  execute(message, args, Discord) {
    const modapps = new Discord.MessageEmbed()
      .setTitle("Mod Applications")
      .setDescription(
        "We're looking for __**active**__ <@&750101392282222635> members. Check \nthe detail below!\n\nAll you have to do is __go to this link__:\nhttps://dyno.gg/form/51d2ddd6\n\nYou'll fill out an application and we'll get back to\n you __if you have been selected__.\nThose best qualified will be brought on to the team.\nThat simple...we hope to work with you soon!\n\n`MOD APPLICATIONS ARE OPEN TO ALL THAT ARE RANK \n10 AND ABOVE.`\n\nJust go to <#724741801889497119> and type `?rank` to \nfind out what level you are."
      )
      .setColor("#8008F6")
      .setImage(
        "https://tourneytimenetwork.com/wp-content/uploads/2021/02/Logo-White-Network.png"
      )
      .setThumbnail(
        "https://tourneytimenetwork.com/wp-content/uploads/2021/02/Logo-White-Network.png"
      );

    if (message.member.permissions.has("ADMINISTRATOR")) {
      message.channel.send(modapps);
    }
    /* if (message.member.roles.cache.has("906277798530932807")) {
      message.channel.send(modapps);
    } */
  },
};
