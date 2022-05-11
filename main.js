const Discord = require("discord.js");
require("dotenv").config();

const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});

const prefix = "-";

const fs = require("fs");

client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.on("ready", () => {
  console.log("TTN WarBot is online!");
});

client.on("message", (message) => {
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  else {
    switch (command) {
      case "embed":
        client.commands.get("embed").execute(message, args, Discord);
        break;
      case "modapps":
        client.commands.get("modapps").execute(message, args, Discord);
        break;
      case "reactionrole":
        client.commands
          .get("reactionrole")
          .execute(message, args, Discord, client);
        break;
      case "rules":
        client.commands.get("modapps").execute(message, args, Discord);
        break;

      default:
        /* client.commands.get("notfound").execute(message, args, Discord); */
        break;
    }
  }

  /* 
  if (command === "embed") {
    client.commands.get("embed").execute(message, args, Discord);
  }
  if (command === "modapps") {
    client.commands.get("modapps").execute(message, args, Discord);
  }
  if (command === "reactionrole") {
    client.commands.get("reactionrole").execute(message, args, Discord, client);
  } */
});

client.login(process.env.LOGIN_TOKEN);
