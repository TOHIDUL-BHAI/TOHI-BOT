const axios = require("axios");

let cachedApiUrl = null;
const botReplies = [
  "বেশি bot Bot করলে leave নিবো কিন্তু😒😒",
  "bolo bby tmi amake valobasho",
  "kire joker 🤡",
  "🤡",
  "শুনবো না😼তুমি আমাকে প্রেম করাই দাও নাই🥺পচা তুমি🥺",
  "আমি আবাল দের সাথে কথা বলি না,ok😒",
  "এতো ডেকো না,প্রেম এ পরে যাবো তো🙈",
  "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋",
  "বার বার ডাকলে মাথা গরম হয়ে যায় কিন্তু😑",
  "হ্যা বলো😒, তোমার জন্য কি করতে পারি😐😑?",
  "এতো ডাকছিস কেন?গালি শুনবি নাকি? 🤬",
  "I love you janu🥰"
];

const getBaseApiUrl = async () => {
  if (cachedApiUrl) return cachedApiUrl;
  try {
    const res = await axios.get('https://raw.githubusercontent.com/Mostakim0978/D1PT0/main/baseApiUrl.json', { timeout: 5000 });
    cachedApiUrl = res.data?.api;
    return cachedApiUrl;
  } catch (err) {
    console.error("[BABY] Failed to fetch base API URL:", err.message);
    throw new Error("API URL error");
  }
};

const callBabyApi = async (text, senderID, retries = 3) => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const baseUrl = await getBaseApiUrl();
      const res = await axios.get(`${baseUrl}/baby`, {
        params: { text, senderID, font: 1 },
        timeout: 7000,
        headers: {
          'Connection': 'keep-alive',
          'User-Agent': 'Mozilla/5.0'
        }
      });

      const reply = res.data?.reply || res.data?.message;
      if (reply) return reply;
      throw new Error("Invalid API response");
    } catch (err) {
      console.warn(`[BABY] API attempt ${attempt} failed: ${err.message}`);
      if (attempt === retries) return null;
      await new Promise(r => setTimeout(r, 1000 * attempt));
    }
  }
};

const randomFromArray = arr => arr[Math.floor(Math.random() * arr.length)];

const cooldowns = new Map();
const checkCooldown = (uid) => {
  const now = Date.now();
  const lastUsed = cooldowns.get(uid) || 0;
  if (now - lastUsed < 3000) return false;
  cooldowns.set(uid, now);
  return true;
};

module.exports.config = {
  name: "baby",
  version: "9.0.1",
  credits: "TOHI-BOT-HUB (No-Retry-Version)",
  cooldowns: 0,
  hasPermssion: 0,
  description: "Fast AI chatbot with Bengali replies 💬",
  commandCategory: "chat",
  usePrefix: true,
  prefix: true
};

module.exports.run = async function ({ api, event, args }) {
  try {
    const uid = event.senderID;
    if (!checkCooldown(uid)) return;
    if (!args[0]) return api.sendMessage("বলো বেবি, কি বলবে? 😊", event.threadID, event.messageID);

    const input = args.join(" ").toLowerCase();
    const reply = await callBabyApi(input, uid) || randomFromArray(botReplies);

    return api.sendMessage(reply, event.threadID, (err, info) => {
      if (!err && info) {
        global.client.handleReply.push({
          name: module.exports.config.name,
          type: "chatReply",
          messageID: info.messageID,
          author: uid
        });
      }
    }, event.messageID);

  } catch (err) {
    console.error("[BABY] Run Error:", err.message);
    return api.sendMessage("কিছু সমস্যা হয়েছে 😔", event.threadID, event.messageID);
  }
};

module.exports.handleReply = async function ({ api, event, handleReply }) {
  try {
    if (handleReply.author !== event.senderID || !checkCooldown(event.senderID)) return;
    const userInput = event.body.toLowerCase();
    const reply = await callBabyApi(userInput, event.senderID) || "API সমস্যা 😔 পরে আবার বলো";

    return api.sendMessage(reply, event.threadID, (err, info) => {
      if (!err && info) {
        global.client.handleReply.push({
          name: module.exports.config.name,
          type: "chatReply",
          messageID: info.messageID,
          author: event.senderID
        });
      }
    }, event.messageID);
  } catch (err) {
    console.error("[BABY] Reply Error:", err.message);
    return api.sendMessage("সমস্যা হয়েছে 😅", event.threadID, event.messageID);
  }
};

module.exports.handleEvent = async function ({ api, event }) {
  try {
    const body = event.body?.toLowerCase().trim();
    const senderID = event.senderID;
    if (!body || senderID === api.getCurrentUserID() || !checkCooldown(senderID)) return;

    const triggers = [
      "baby", "bby", "sona", "chuna", "jan", "xan", "kolija", "kolixa",
      "bbz", "babu", "bou", "habibi", "bebi", "বি", "সোনা", "চুনা",
      "জান", "কলিজা", "কোলিক্সা", "বিবিজেড", "বাবু", "বউ", "হাবিবি",
      "বেবি", "বিবি", "bot"
    ];

    const isExact = triggers.includes(body);
    const startsWithTrigger = triggers.some(t => body.startsWith(t + " "));

    if (isExact || startsWithTrigger) {
      const text = isExact ? body : body.split(" ").slice(1).join(" ");
      const reply = await callBabyApi(text, senderID) || (body === "bot" ? randomFromArray(botReplies) : null);

      if (reply) {
        return api.sendMessage(reply, event.threadID, (err, info) => {
          if (!err && info) {
            global.client.handleReply.push({
              name: module.exports.config.name,
              type: "chatReply",
              messageID: info.messageID,
              author: senderID
            });
          }
        }, event.messageID);
      }
    }
  } catch (err) {
    console.error("[BABY] Event Error:", err.message);
  }
};
