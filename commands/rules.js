module.exports = {
  name: "rules",
  description: "rule embed",
  execute(message, args, Discord) {
    const ruleEmbed = new Discord.MessageEmbed()
      .setTitle("General Rules")
      .addFields(
        {
          name: "\u200B",
          value:
            "- Golden rule: In the wise words of Bill & Ted: “Be \nExcellent To Each Other” \nThis rule applies to all interactions with our \nmembers, regardless of where they occur, including \nDM's and within other servers.\n- You must be respectful at all times. Your \ncontributions to the server must positively \ncontribute to the betterment of the server and its \nmembers. The <@&750101392282222635> reserve the right to remove \nanyone from the server where it is felt their \nbehaviour has a negative impact on community as a whole.\n- Members must use <#825510367194906654> for questions \nrelating to the server. Do not DM staff.",
        },
        {
          name: "No language or behaviour that is:",
          value:
            "- Insulting;\n- Defamatory\n- Accusatory;\n- Violent;\n- Sexist;\n- Racist;\n- Homophobic;\n- Discriminatory;\n\nPlease keep conversations in English.",
        },
        {
          name: "No content that is:",
          value:
            "- Illegal;m- NSFW;\n- NSFL;\n- Personal/confidential information;\n- Misleading/deceptive.",
        },
        {
          name: "No advertising or self-promotion of any kind.",
          value:
            "- The only exception to this rule is posting \nhighlights/clips in <#768840326814892032>, only if you have the \n<@&768201791820136468>\n- Having TTV, FB, YT or any streaming platform \nreference in your nickname, is not permitted \nunless you have the <@&768201791820136468>.\n- Only those with the <@&768201791820136468> are permitted \nto use the <@&773960412001075260>.",
        },
        {
          name: "Other Rules",
          value:
            "- No spamming of messages or emojis.\n- No begging.\n- No recruiting.\n- No boosting.\n- No gambling.\n- No mass groups of server nicknames.\n- No undermining server staff.\n- You must always adhere to Activision's, Blizzard's \nand Discord's terms of use.\n- Do not ping other members unnecessarily.\n- Do not DM staff. If you need help go to <#825510367194906654> \nand open a ticket.\n- Only the Server <@&799752432745840720> is permitted to enter \ninto any agreement with any person or entity that \nobligates the server or its staff members to perform \nany function. This may include but is not limited to \npaid promotion/advertising of third-party \nservices/servers.",
        }
      )

      .setColor(process.env.PRIMARY_COLOR)
      .setImage(
        "https://tourneytimenetwork.com/wp-content/uploads/2021/02/Logo-White-Network.png"
      )
      .setThumbnail(
        "https://tourneytimenetwork.com/wp-content/uploads/2021/02/Logo-White-Network.png"
      );
    if (message.member.permissions.has("ADMINISTRATOR")) {
      message.channel.send(ruleEmbed);
    }
    /* if (message.member.roles.cache.has("906277798530932807")) {
      message.channel.send(ruleEmbed);
    } */
  },
};
