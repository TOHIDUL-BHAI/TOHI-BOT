const axios = require("axios");
const axiosRetry = require("axios-retry");

axiosRetry(axios, {
  retries: 2,
  retryDelay: () => 1000,
  shouldResetTimeout: true
});

let cachedApiUrl = null;

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
  "I love you janu🥰",
  " Tor Basai Ki Ma Bon Nai Khali Amare Dakos 😒"
];

const callBabyApi = async (text, senderID) => {
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
    return res.data?.reply || res.data?.message || null;
  } catch (err) {
    console.error("[BABY] API Error:", err.message);
    return null;
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
  version: "9.0.0",
  credits: "TOHI-BOT-HUB",
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
    return api.sendMessage("কিছু একটা সমস্যা হয়েছে 😭", event.threadID, event.messageID);
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
      "বেবি", "বিবি", "bot","bubu","bbu","জানু"," janu"
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
