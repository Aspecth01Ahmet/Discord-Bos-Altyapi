const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {
  
  let prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = "v!";
  
  const yardım = new Discord.MessageEmbed()
    .setTimestamp()
    .setTitle(`Valiant Bot`)
    .setColor("#F0FFFF")
    .setDescription(`
**Bot Kullanım Kılavuzu**
> Prefix : ${prefix}
> Dil : 🇹🇷 \`(Dil Sistemi Bulunmamakta)\`
**Menü Başlıkları**
> **[${prefix}genel](https://discord.gg/jdRXZqa)**
> **[${prefix}moderasyon](https://discord.gg/jdRXZqa)**
> **[${prefix}koruma](https://discord.gg/jdRXZqa)**
**Duyuru**
> json.squlite Silindiği İçin Sistemleri Tekrardan Oluşturunuz
    `)
    .setImage(
    "https://cdn.discordapp.com/attachments/764488757637283870/764488789061926932/standard.gif"
);

  message.channel.send(yardım);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım", "help", "h"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Yardım Menüsünü Gösterir.",
  usage: "yardım"
};
