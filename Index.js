const express = require("express");
const app = express();
app.listen(3000, () => {
  console.log("Yay!");
})

app.get("/", (req, res) => {
  res.send("Hello");
})

const Discord = require("discord.js")
const client = new Discord.Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES"
  ]
});

  client.on("messageCreate", message => {
    if (message.content.toLowerCase() === "happy") {
      message.channel.send("Remember that every single week since the beginning of the semester, you have made it through every homework, quiz, all of it!")
    }
  },

    client.on("messageCreate", message => {
      if (message.content.toLowerCase() === "welcome".ignoreCase) {
        let welcome = new Discord.MessageEmbed()
          .setTitle("Welcome to the fundies love bot!")
          .setDescription("I'm here to help you in any way I can! Below are my current features.")
          .addField("Happy words", "Enter 'happy' into the chat.", true)
          .addField("Cute animals", "Enter either 'kitten' or 'puppy' in the chat.", true)
          .addField("Study tunes", "Enter 'cafe' or 'ghibli' into the chat", true)
          .setImage("https://media.tenor.com/p_3zmvVFS8kAAAAi/cute-heart.gif")
          .setFooter("Only developed recently, so if you find any bugs, have any comments or would like me to add any other resource that this bot can provide, please let me, Annabelle (chung.anna@northeaster.edu), know :)")
          .setColor("WHITE")

        message.channel.send({ embeds: [welcome] })
      }
      if (message.content.toLowerCase() === "kitten") {
        let kitten = new Discord.MessageEmbed()
          .setTitle("this little guy says to keep going!")
          .setImage("https://i.pinimg.com/736x/23/86/e3/2386e3023848e6754b8f0ad9597676a7.jpg")
          .setFooter("so! what are you waiting for!")
          .setColor("WHITE")

        message.channel.send({ embeds: [kitten] })
      }
      if (message.content.toLowerCase() === "puppy") {
        let puppy = new Discord.MessageEmbed()
          .setTitle("this little guy says to keep going!")
          .setImage("https://i.pinimg.com/originals/8d/f8/07/8df807d0c5198bb49b5cacfed2631ade.jpg")
          .setFooter("so! what are you waiting for!")
          .setColor("WHITE")

        message.channel.send({ embeds: [puppy] })
      }
      if (message.content.toLowerCase() === "cafe") {
        let cafe = new Discord.MessageEmbed()
          .setTitle("Maybe this will help create a cozier working environment, just like you're in a cafe :)")
          .setURL("https://www.youtube.com/watch?v=MYPVQccHhAQ")
          .setImage("https://i.ytimg.com/vi/6WXMivVkiR8/maxresdefault.jpg")
          .setColor("WHITE")
          .setFooter("enjoy your study session!")

        message.channel.send({ embeds: [cafe] })
      }
      if (message.content.toLowerCase() === "ghibli") {
        let ghibli = new Discord.MessageEmbed()
          .setTitle("Do you like Studio Ghibli? Maybe this will help make you feel better for studying :)")
          .setURL("https://www.youtube.com/watch?v=xTY0SlyVfCQ")
          .setImage("https://deadline.com/wp-content/uploads/2021/11/img_2947.jpg")
          .setColor("WHITE")
          .setFooter("enjoy your study session!")

        message.channel.send({ embeds: [ghibli] })
      }
    })


  )

  client.login(process.env.token)
