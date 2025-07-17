const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");

// Canvas with fallback handling
let Canvas;
try {
  Canvas = require("canvas");
} catch (error) {
  console.warn('⚠️ Canvas not available for pair3 command, using text-only mode');
  Canvas = null;
}

module.exports.config = {
  name: "pair3",
  version: "1.0.2",
  credits: "TOHI-BOT-HUB+Copilot",
  description: "Male/female pair with romantic quote and generated image",
  commandCategory: "fun",
  usages: "[male/female]",
  cooldowns: 10,
  hasPermssion: 0,
  usePrefix: true
};

const quotes = [
  "ভালোবাসা মানে কখনো ছেড়ে না যাওয়া 🥰",
  "তুমিই আমার জীবন, তুমিই আমার স্বপ্ন 💞",
  "প্রেম মানে শুধু তোমাকেই চাওয়া 💓",
  "তুমি আর আমি — এটাই আমার পৃথিবী ❤️",
  "তোমার হাসিতেই আমার সকাল, তোমার চোখেই আমার রাত 🌙",
  "তুমিই আমার হৃদয়ের একমাত্র রানী/রাজা 👑",
  "ভালোবাসা কখনো শেষ হয় না, শুধু বাড়তেই থাকে 💖",
  "তোমার জন্যই আমার বেঁচে থাকা 💕"
];

// Download profile picture
async function getPp(uid) {
  try {
    // Use your valid Facebook access token or a public API
    const url = `https://graph.facebook.com/${uid}/picture?height=512&width=512&access_token=EAAJZAWZA...`;
    const res = await axios.get(url, { responseType: "arraybuffer" });
    return Buffer.from(res.data, "binary");
  } catch (e) {
    // fallback avatar
    return fs.readFileSync(path.join(__dirname, "default_avatar.png"));
  }
}

// Pick a random opposite gender user
async function getOppositeGenderUser({ threadInfo, gender }) {
  const oppositeGender = gender === "male" ? "FEMALE" : "MALE";
  const members = threadInfo.userInfo.filter(
    (user) =>
      (user.gender && user.gender.toUpperCase() === oppositeGender) &&
      !user.isBot && !user.isAdmin && !user.isMessengerUser && !user.isPage
  );
  if (!members.length) return null;
  const pick = members[Math.floor(Math.random() * members.length)];
  return {
    id: pick.id,
    name: pick.name,
    gender: pick.gender ? pick.gender.toUpperCase() : "UNKNOWN"
  };
}

// Draw nice multi-color background
function drawNiceMultiColorBg(ctx, w, h) {
  // Gradient
  const grad = ctx.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, "#ffb347");
  grad.addColorStop(0.2, "#ffccff");
  grad.addColorStop(0.4, "#b2fefa");
  grad.addColorStop(0.6, "#f8ffae");
  grad.addColorStop(0.8, "#f7797d");
  grad.addColorStop(1, "#a1c4fd");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // Colorful circles
  for (let i = 0; i < 8; i++) {
    const rad = Math.random() * 70 + 50;
    const x = Math.random() * w;
    const y = Math.random() * h;
    const color = `hsla(${Math.floor(Math.random()*360)},70%,80%,0.24)`;
    ctx.beginPath();
    ctx.arc(x, y, rad, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  }
}

// Generate the pair image
async function makePairImage(malePp, maleName, femalePp, femaleName, quote) {
  const w = 800, h = 400, avatarSize = 210;
  const canvas = Canvas.createCanvas(w, h);
  const ctx = canvas.getContext("2d");

  drawNiceMultiColorBg(ctx, w, h);

  // Heart
  ctx.font = "bold 90px Arial";
  ctx.fillStyle = "#ff3385";
  ctx.textAlign = "center";
  ctx.fillText("❤️", w / 2, h / 2 + 25);

  // Draw avatars
  function drawCircleImg(img, x, y) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(x + avatarSize / 2, y + avatarSize / 2, avatarSize / 2, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(img, x, y, avatarSize, avatarSize);
    ctx.restore();
  }
  const maleImg = await Canvas.loadImage(malePp);
  const femaleImg = await Canvas.loadImage(femalePp);
  drawCircleImg(maleImg, 60, h / 2 - avatarSize / 2);
  drawCircleImg(femaleImg, w - avatarSize - 60, h / 2 - avatarSize / 2);

  // Names
  ctx.font = "bold 30px Arial";
  ctx.fillStyle = "#333";
  ctx.textAlign = "center";
  ctx.fillText(maleName, 60 + avatarSize / 2, h / 2 + avatarSize / 2 + 40);
  ctx.fillText(femaleName, w - avatarSize / 2 - 60, h / 2 + avatarSize / 2 + 40);

  // Romantic quote in the middle
  ctx.font = "italic 27px Arial";
  ctx.fillStyle = "#8b005d";
  ctx.textAlign = "center";
  ctx.fillText(quote, w / 2, h / 2 - 70);

  return canvas.toBuffer();
}

module.exports.run = async function ({ api, event, args, Users }) {
  try {
    const { threadID, senderID, messageID } = event;
    
    // Check if Canvas is available
    if (!Canvas) {
      return api.sendMessage("❌ Image generation is currently unavailable due to missing Canvas library. Please contact admin to install required dependencies.", threadID, messageID);
    }
    
    if (!args[0] || !["male", "female"].includes(args[0].toLowerCase())) {
      return api.sendMessage("Usage: pair3 male\nor: pair3 female\n\nযে জেন্ডার দিবে সে জেন্ডারের সাথে random অপর পক্ষের pair হবে!", threadID, messageID);
    }
    const gender = args[0].toLowerCase();

    const threadInfo = await api.getThreadInfo(threadID);

    // Get sender info
    let senderName = "";
    try {
      const senderInfo = await Users.getData(senderID);
      senderName = senderInfo.name || (await api.getUserInfo(senderID))[senderID]?.name || "Unknown";
    } catch { senderName = "Unknown"; }

    // Determine pair
    let pairUser;
    if (gender === "male") {
      pairUser = await getOppositeGenderUser({ threadInfo, gender: "male" });
      if (!pairUser) return api.sendMessage("দুঃখিত! এখানে কোনো female member খুঁজে পেলাম না!", threadID, messageID);
      var maleId = senderID, maleName = senderName, femaleId = pairUser.id, femaleName = pairUser.name;
    } else {
      pairUser = await getOppositeGenderUser({ threadInfo, gender: "female" });
      if (!pairUser) return api.sendMessage("দুঃখিত! এখানে কোনো male member খুঁজে পেলাম না!", threadID, messageID);
      var maleId = pairUser.id, maleName = pairUser.name, femaleId = senderID, femaleName = senderName;
    }

    // Download profile pictures
    let malePp, femalePp;
    try {
      malePp = await getPp(maleId);
    } catch { malePp = fs.readFileSync(path.join(__dirname, "default_avatar.png")); }
    try {
      femalePp = await getPp(femaleId);
    } catch { femalePp = fs.readFileSync(path.join(__dirname, "default_avatar.png")); }

    // Random quote
    const quote = quotes[Math.floor(Math.random() * quotes.length)];

    // Generate canva image
    const imgBuffer = await makePairImage(malePp, maleName, femalePp, femaleName, quote);

    // Convert buffer to readable stream
    const { Readable } = require('stream');
    const imgStream = new Readable();
    imgStream.push(imgBuffer);
    imgStream.push(null);

    // Send
    return api.sendMessage({
      body: `🌸 ${maleName} ❤️ ${femaleName}\n\n${quote}`,
      attachment: imgStream
    }, threadID, messageID);

  } catch (err) {
    console.error(err);
    return api.sendMessage("❌ Image generate করতে সমস্যা হয়েছে!", event.threadID, event.messageID);
  }
};