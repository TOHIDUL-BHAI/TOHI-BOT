const axios = require('axios');

// Reduced bot replies for absolute fallbacks only
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

// Helper functions
const randomFromArray = arr => arr[Math.floor(Math.random() * arr.length)];

const getBaseApiUrl = async () => {
  try {
    const response = await axios.get('https://raw.githubusercontent.com/Mostakim0978/D1PT0/refs/heads/main/baseApiUrl.json', {
      timeout: 10000
    });
    return response.data.api;
  } catch (error) {
    console.error('[BABY] Failed to get base API URL:', error.message);
    throw error;
  }
};

const getUserName = async (api, uid) => {
  try {
    const userInfo = await api.getUserInfo(uid);
    return userInfo[uid]?.name || "জান";
  } catch {
    return "জান";
  }
};

const callBabyApi = async (text, senderID, retries = 3) => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const baseUrl = await getBaseApiUrl();
      console.log(`[BABY] API Attempt ${attempt}: Calling ${baseUrl}/baby`);

      const response = await axios.get(`${baseUrl}/baby`, {
        params: {
          text: text,
          senderID: senderID,
          font: 1
        },
        timeout: 20000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      });

      if (response.data && response.data.reply) {
        console.log(`[BABY] API Success on attempt ${attempt}`);
        return response.data.reply;
      }

      if (response.data && response.data.message) {
        console.log(`[BABY] API Success on attempt ${attempt}`);
        return response.data.message;
      }

      throw new Error('Invalid API response format');
    } catch (error) {
      console.error(`[BABY] API Attempt ${attempt} failed:`, error.message);

      if (attempt < retries) {
        await new Promise(resolve => setTimeout(resolve, attempt * 2000));
        continue;
      }

      return null;
    }
  }
};

// Cooldown management
const cooldowns = new Map();
const checkCooldown = (uid) => {
  const now = Date.now();
  const lastUsed = cooldowns.get(uid) || 0;
  if (now - lastUsed < 3000) return false;
  cooldowns.set(uid, now);
  return true;
};

// Main module configuration
module.exports.config = {
  name: "baby",
  version: "8.0.0",
  credits: "TOHI-BOT-HUB",
  cooldowns: 0,
  hasPermssion: 0,
  description: "AI-powered chatbot with Bengali support",
  commandCategory: "chat",
  category: "chat",
  usePrefix: true,
  prefix: true
};

// Main command handler
module.exports.run = async function ({ api, event, args }) {
  try {
    const uid = event.senderID;

    if (!checkCooldown(uid)) return;

    if (!args[0]) {
      return api.sendMessage("বলো বেবি, কি বলবে? 😊", event.threadID, event.messageID);
    }

    const input = args.join(" ").toLowerCase();

    if (args.length === 1 && args[0].toLowerCase() === "bot") {
      const apiResponse = await callBabyApi("bot", uid);

      if (apiResponse) {
        return api.sendMessage(apiResponse, event.threadID, (err, info) => {
          if (!err && info) {
            global.client.handleReply.push({
              name: module.exports.config.name,
              type: "botReply",
              messageID: info.messageID,
              author: event.senderID
            });
          }
        }, event.messageID);
      } else {
        const reply = randomFromArray(botReplies);
        return api.sendMessage(reply, event.threadID, (err, info) => {
          if (!err && info) {
            global.client.handleReply.push({
              name: module.exports.config.name,
              type: "botReply",
              messageID: info.messageID,
              author: event.senderID
            });
          }
        }, event.messageID);
      }
    }

    const apiResponse = await callBabyApi(input, uid);

    if (apiResponse) {
      return api.sendMessage(apiResponse, event.threadID, (err, info) => {
        if (!err && info) {
          global.client.handleReply.push({
            name: module.exports.config.name,
            type: "chatReply",
            messageID: info.messageID,
            author: event.senderID
          });
        }
      }, event.messageID);
    } else {
      console.log('[BABY] All API attempts failed, using fallback');
      return api.sendMessage("API এ কিছু সমস্যা হচ্ছে, পরে আবার চেষ্টা করো 😔", event.threadID, event.messageID);
    }

  } catch (error) {
    console.error('[BABY] Command Error:', error.message);
    return api.sendMessage("কিছু একটা সমস্যা হয়েছে 😔", event.threadID, event.messageID);
  }
};

// Handle replies
module.exports.handleReply = async function ({ api, event, handleReply }) {
  try {
    if (handleReply.author !== event.senderID) return;

    const userInput = event.body.toLowerCase();

    if (!checkCooldown(event.senderID)) return;

    if (handleReply.type === "botReply" || handleReply.type === "chatReply") {
      const apiResponse = await callBabyApi(userInput, event.senderID);

      if (apiResponse) {
        await api.sendMessage(apiResponse, event.threadID, (err, info) => {
          if (!err && info) {
            global.client.handleReply.push({
              name: module.exports.config.name,
              type: "chatReply",
              messageID: info.messageID,
              author: event.senderID
            });
          }
        }, event.messageID);
      } else {
        await api.sendMessage("API সমস্যায় আছে, একটু পরে চেষ্টা করো 😅", event.threadID, event.messageID);
      }
    }

  } catch (error) {
    console.error('[BABY] HandleReply Error:', error.message);
    api.sendMessage("সমস্যা হয়েছে 😅", event.threadID, event.messageID);
  }
};

// Handle events (auto-response to trigger words)
module.exports.handleEvent = async function ({ api, event }) {
  try {
    if (!event.body || event.senderID === api.getCurrentUserID()) return;

    const body = event.body.toLowerCase().trim();

    // Comprehensive trigger words list
    const triggers = [
      "baby", "bby", "sona", "chuna", "jan", "xan", "kolija", "kolixa", 
      "bbz", "babu", "bou", "habibi", "bebi", "বি", "সোনা", "চুনা", 
      "জান", "কলিজা", "কোলিক্সা", "বিবিজেড", "বাবু", "বউ", "হাবিবি",
      "বেবি", "বিবি", "bot"
    ];

    // Single trigger word
    if (triggers.includes(body)) {
      if (!checkCooldown(event.senderID)) return;

      const apiResponse = await callBabyApi(body, event.senderID);

      if (apiResponse) {
        return api.sendMessage(apiResponse, event.threadID, (err, info) => {
          if (!err && info) {
            global.client.handleReply.push({
              name: module.exports.config.name,
              type: "chatReply",
              messageID: info.messageID,
              author: event.senderID
            });
          }
        }, event.messageID);
      } else {
        // Fallback only if API fails
        if (body === "bot") {
          const reply = randomFromArray(botReplies);
          return api.sendMessage(reply, event.threadID, (err, info) => {
            if (!err && info) {
              global.client.handleReply.push({
                name: module.exports.config.name,
                type: "botReply",
                messageID: info.messageID,
                author: event.senderID
              });
            }
          }, event.messageID);
        }
      }
    }

    // Commands starting with trigger words
    for (const trigger of triggers) {
      if (body.startsWith(trigger + " ")) {
        const text = body.replace(new RegExp(`^${trigger}\\s+`), "");
        if (!checkCooldown(event.senderID)) return;

        const apiResponse = await callBabyApi(text, event.senderID);

        if (apiResponse) {
          return api.sendMessage(apiResponse, event.threadID, (err, info) => {
            if (!err && info) {
              global.client.handleReply.push({
                name: module.exports.config.name,
                type: "chatReply",
                messageID: info.messageID,
                author: event.senderID
              });
            }
          }, event.messageID);
        } else {
          return api.sendMessage("API এ সমস্যা, একটু পরে চেষ্টা করো 😔", event.threadID, event.messageID);
        }
      }
    }

  } catch (error) {
    console.error('[BABY] HandleEvent Error:', error.message);
    // Silent fail to avoid spam
  }
};