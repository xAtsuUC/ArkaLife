import { TextChannel } from "discord.js";
import { Message, MessageEmbed } from "discord.js";
let d = new Date()

module.exports = {
    name: "messageDelete",
    run: async (message: Message) => {
        let client = message.client
        const e = new MessageEmbed()
        .setTitle("Mensaje eliminado!")
        .setDescription(d.toUTCString())
        .addField("Contenido:", message.content ?? "Error: No pude recuperar el contenido")
        let logs = client.channels.cache.get('845436480570261554') as TextChannel
        logs?.send(e)
    }
}