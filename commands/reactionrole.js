module.exports = {
  name: "reactionrole",
  description: "Sets up a reaction role message!",
  async execute(message, args, Discord, client) {
    const channel = process.env.OWNER_CHANNEL;
    const yellowTeamRole = message.guild.roles.cache.find(
      (role) => role.name === "Tournament Organizer"
    );
    const blueTeamRole = message.guild.roles.cache.find(
      (role) => role.name === "Members"
    );

    const yellowTeamEmoji = process.env.YELLOW_TEAM_EMOJI;
    const blueTeamEmoji = process.env.BLUE_TEAM_EMOJI;

    let embed = new Discord.MessageEmbed()
      .setColor(process.env.PRIMARY_COLOR)
      .setTitle("Choose a team to play on!")
      .setDescription(
        "Choosing a team will allow you to interact with your teammates!\n\n" +
          `${yellowTeamEmoji} for yellow team\n` +
          `${blueTeamEmoji} for blue team`
      );

    let messageEmbed = await message.channel.send(embed);
    messageEmbed.react(yellowTeamEmoji);
    messageEmbed.react(blueTeamEmoji);

    client.on("messageReactionAdd", async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
      if (user.bot) return;
      if (!reaction.message.guild) return;

      if (reaction.message.channel.id == channel) {
        if (reaction.emoji.name === yellowTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(yellowTeamRole)
            .then(async () => {
              const userReactions = reaction.message.reactions.cache.filter(
                (reaction) => reaction.users.cache.has(user.id)
              );
              try {
                for (const reaction of userReactions.values()) {
                  await reaction.users.remove(user.id);
                }
              } catch (error) {
                console.error("Failed to remove reactions.");
              }
            });
        }
        if (reaction.emoji.name === blueTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(blueTeamRole)
            .then(async () => {
              const userReactions = reaction.message.reactions.cache.filter(
                (reaction) => reaction.users.cache.has(user.id)
              );
              try {
                for (const reaction of userReactions.values()) {
                  await reaction.users.remove(user.id);
                }
              } catch (error) {
                console.error("Failed to remove reactions.");
              }
            });
        }
      } else {
        return;
      }
    });
  },
};
