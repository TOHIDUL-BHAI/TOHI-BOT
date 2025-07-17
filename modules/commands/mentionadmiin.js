module.exports.config = {
  commandCategory: "USER",
  name: "MENTION ADMIN",
  version: "1.0.2",
  permission: 0,
  credits: "TOHI-BOT-HUB",
  description: "If someone mentions @MD Tohidul Islam, send a random reply",
  usePrefix: true,
  category: "USER",
  usages: "tag",
  cooldowns: 5,
};

// Change this to your display name as it appears in group mention
const ownerName = ["MD Tohidul Islam", "tohidul", "Tohidul", "@TO HI Dul", "@MD Tohidul Islam"];

module.exports.handleEvent = function({ api, event }) {
  // Check if anyone mentioned "MD Tohidul Islam" in this message
  if (event.mentions) {
    // Find if any mentioned name matches ownerName (case insensitive)
    for (const uid in event.mentions) {
      const name = event.mentions[uid];
      if (
        typeof name === "string" &&
        ownerName.some(owner => name.trim().toLowerCase() === owner.toLowerCase()) &&
        event.senderID !== uid // Don't reply if sender is the owner
      ) {
        const msgList = [
          "মেনশন দিও না, তহিদুল বস এখন মোটেও ভালো নেই আজকে-!💔🥀",
          "- আমার সাথে কেউ কথা বলে না, একদম একা লাগে আজকাল 🫂💔",
          "একটা আপন মানুষ খুব দরকার, কারণ চোখে পানি আসার আগেই নাকে সর্দি চলে আসে 🤣🤣",
          "এত মেনশন না দিয়ে গ্রুপে এসো, হট কিছু পাবা 🤷‍♂️😘🥒",
          "মেনশন দিলে চুমু দিয়ে ঠোঁটের কালার চেঞ্জ করে দিবো 💋😾🔨",
          "এত ইমোশনাল কথা বলো যে মনে হচ্ছে মন দিয়ে অঝোরে বৃষ্টি হচ্ছে 😭😭",
          "তহিদুল বস এখন বিজি, যা বলার আমাকে বলো! 😼🥰",
          "এত মেনশন না দিয়ে সিঙ্গেল তহিদুলকে একটা গফ দে 😒 😏",
          "মেনশন না দিয়ে প্রেম করতে চাইলে ইনবক্সে চলে আসো!",
          "মেনশন দিস না, পারলে একটা গফ দে!",
          "মেনশন দিস না, তহিদুল অনেক বিজি 🥵🥀🤐",
          "চুমু খাওয়ার বয়সটা চকলেট 🍫 খেয়ে উড়িয়ে দিলাম 🤗"
        ];
        const randomMsg = msgList[Math.floor(Math.random() * msgList.length)];
        return api.sendMessage(randomMsg, event.threadID, event.messageID);
      }
    }
  }
};

module.exports.run = async function({}) {};