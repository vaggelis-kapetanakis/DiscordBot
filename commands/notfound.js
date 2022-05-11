module.exports = {
  name: "notfound",
  description: "Not Found",
  execute(message, args, Discord) {
    const notfound = new Discord.MessageEmbed()
      .setTitle("Not Found")
      .setDescription("Oups")
      .setColor(process.env.PRIMARY_COLOR)
      .setImage(
        "https://preview.redd.it/aeivc825stc31.png?width=779&format=png&auto=webp&s=a02fc4e007243243d7eddf439c9c4e9fb45bfe68"
      )
      .setThumbnail(
        "https://preview.redd.it/aeivc825stc31.png?width=779&format=png&auto=webp&s=a02fc4e007243243d7eddf439c9c4e9fb45bfe68"
      );
    if (message.member.roles.cache.has("906277798530932807")) {
      message.channel.send(notfound);
    }
  },
};
