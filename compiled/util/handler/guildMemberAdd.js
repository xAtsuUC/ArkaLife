"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const canvas_1 = __importDefault(require("canvas"));
const path_1 = __importDefault(require("path"));
module.exports = {
    name: "guildMemberAdd",
    run: async (member) => {
        /////
        function applyText(canvas, text) {
            const context = canvas.getContext('2d');
            // Declare a base size of the font
            let fontSize = 70;
            do {
                // Assign the font to the context and decrement it so it can be measured again
                context.font = `${fontSize -= 10}px sans-serif`;
                // Compare pixel width of the text to the canvas minus the approximate avatar size
            } while (context.measureText(text).width > canvas.width - 300);
            // Return the result to use in the actual canvas
            return context.font;
        }
        /////
        let client = member.client;
        if (Math.floor(Math.floor(Date.now() - member.user.createdTimestamp) / 86400000) < 30)
            return member.kick("El usuario no tenía 30 dias en discord");
        let channel = client.channels.cache.get('844935680794689597');
        const canvas = canvas_1.default.createCanvas(700, 250);
        const context = canvas.getContext('2d');
        const background = await canvas_1.default.loadImage(path_1.default.join(__dirname, './storage/OIP.jpg'));
        context.drawImage(background, 0, 0, canvas.width, canvas.height);
        context.strokeStyle = '#74037b';
        context.strokeRect(0, 0, canvas.width, canvas.height);
        context.font = '28px sans-serif';
        context.fillStyle = '#ffffff';
        context.fillText('Bienveid@ al servidor,', canvas.width / 2.5, canvas.height / 3.5);
        context.font = applyText(canvas, `${member.user.tag}!`);
        context.fillStyle = '#ffffff';
        context.fillText(`${member.user.tag}`, canvas.width / 2.5, canvas.height / 1.8);
        context.beginPath();
        // Start the arc to form a circle
        context.arc(125, 125, 100, 0, Math.PI * 2, true);
        // Put the pen down
        context.closePath();
        // Clip off the region you drew on
        context.clip();
        const avatar = await canvas_1.default.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
        context.drawImage(avatar, 25, 25, 200, 200);
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome.png');
        channel.send(`Bienvenido al server, ${member}`, attachment);
    }
};
