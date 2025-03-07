"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
let d = new Date();
module.exports = {
    name: "messageUpdate",
    run: async (oldM, newM) => {
        let client = newM.client;
        if (oldM.content === newM.content)
            return;
        let mp;
        let nm;
        if (oldM.partial)
            mp = "No he podido recuperar la data del antiguo mensaje!";
        if (!oldM.partial)
            mp = oldM.content;
        if (!oldM.partial && oldM.content.length > 1024)
            mp = "El contenido del mensaje era demasiado largo!";
        if (newM.content.length > 1024)
            nm = "El contenido del mensaje era demasiado largo!";
        if (newM.content.length <= 1024)
            nm = newM.content;
        const e = new discord_js_1.MessageEmbed()
            .setTitle("Mensaje actualizado!")
            .addField("Antes:", mp, true)
            .addField("Despues:", nm, true)
            .setDescription(d.toUTCString());
        let logs = client.channels.cache.get('845436480570261554');
        logs?.send(e);
    }
};
