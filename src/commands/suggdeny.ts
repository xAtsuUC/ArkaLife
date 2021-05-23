import { MessageEmbed } from "discord.js";
import { Message, Client } from "discord.js"

module.exports = {
    name: "suggestdeny",
    aliases: ["deny", "denegar"],
    permissions: ["ADMINISTRATOR"],
    run: async(client: Client, message: Message, args) => {
        if(!args[1] || !args[0]) return client.errors.makeEmbed("Formato invalido, uso: \n`a!denegar <ID de la sugerencia> <Razón>`")
        let reason = message.content.split(" ").slice(2).join(" ")
        let SiD = args[0]
        client.suggestions.reviewSuggestion(SiD, 0, reason, message.member.id)
        message.reply(
            new MessageEmbed()
            .setDescription(`Sugerencia \`${SiD}\` **denegada**, razón: \n${reason}`)
        )
    }
}