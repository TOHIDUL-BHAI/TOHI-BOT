const axios = require('axios');
const fs = require('fs-extra');
const baseApiUrl = async () => {
  const base = await axios.get(`https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json`);
  return base.data.api;
}; 

module.exports={
config:{
    name: "meta",
    version: "6.9.0",
    credits: "TOHI-BOT-HUB",
    cooldowns: 15,
    hasPremssion: 0,
    usePrefix: true,
  prefix: true,
    description: "Photo genarate from meta ai",
    commandCategory: "ai",
  category: "imagination",
    usages: "{pn} [prompt]"
},
run: async function ({ args, event, api }) {
  try {
    const prompt = args.join(" ");
    const wait = await api.sendMessage("𝗪𝗮𝗶𝘁 𝗸𝗼𝗿𝗼 𝗕𝗮𝗯𝘆 <😘", event.threadID);
    const response = await axios.get(`${await baseApiUrl()}/meta?prompt=${encodeURIComponent(prompt)}&key=dipto008`);
    const data = response.data.imgUrls;
     const vid = await axios.get(data,{ responseType: 'stream' });
     await api.unsendMessage(wait.messageID);
    await api.sendMessage({
      body: `✅ | Generated your images`,
      attachment: vid.data
    }, event.threadID ,event.messageID);
  } catch (e) {
    console.error(e);
    await api.sendMessage(`❌ Failed to generate photo!\nError: ${e.message}`, event.threadID, event.messageID);
   }
 }
};