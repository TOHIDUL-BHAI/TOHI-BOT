
module.exports.config = {
  name: "admin noti",
  eventType: ["log:subscribe"],
  version: "1.3.0",
  credits: "TOHI-BOT-HUB, improved by TOHIDUL",
  description: "Stylish Admin Group Update Notification with Enhanced Canvas Support"
};

const ADMIN = 'TOHIDUL';
const FB_LINK = 'https://web.facebook.com/mdtohidulislam063';

const fs = require('fs-extra');
const axios = require('axios');
const moment = require("moment-timezone");

// Canvas support with fallback
let canvas, loadImage, createCanvas, registerFont;
try {
  const canvasModule = require('canvas');
  canvas = canvasModule;
  loadImage = canvasModule.loadImage;
  createCanvas = canvasModule.createCanvas;
  registerFont = canvasModule.registerFont;
} catch (error) {
  console.log('Canvas not available, using text-only mode');
}

const fontlink = 'https://drive.google.com/u/0/uc?id=1ZwFqYB-x6S9MjPfYm3t3SP1joohGl4iw&export=download'
let PRFX = `${global.config.PREFIX}`;

// Enhanced image processing with Canvas
module.exports.circle = async (image) => {
  if (!canvas) {
    throw new Error('Canvas not available');
  }
  
  try {
    const img = await loadImage(image);
    const canvasEl = createCanvas(img.width, img.height);
    const ctx = canvasEl.getContext('2d');
    
    // Create circular mask
    ctx.beginPath();
    ctx.arc(img.width/2, img.height/2, Math.min(img.width, img.height)/2, 0, Math.PI * 2);
    ctx.clip();
    ctx.drawImage(img, 0, 0);
    
    return canvasEl.toBuffer();
  } catch (error) {
    console.error('Circle processing error:', error.message);
    throw error;
  }
}

// Safe API call with retry
async function safeApiCall(url, options = {}, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await axios.get(url, {
        responseType: options.responseType || 'arraybuffer',
        timeout: 15000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        },
        ...options
      });
      return response;
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
    }
  }
}

module.exports.run = async function({ api, event, Users }) {
  try {
    // Session & Time
    var getHours = moment.tz('Asia/Dhaka').format('HH');
    var session;
    if (getHours < 3) session = "🌙 মধ্যরাত";
    else if (getHours < 8) session = "🌅 ভোর";
    else if (getHours < 12) session = "☀️ সকাল";
    else if (getHours < 17) session = "🌤️ দুপুর";
    else if (getHours < 23) session = "🌆 সন্ধ্যা";
    else session = "🌙 মধ্যরাত";

    const thu = moment.tz('Asia/Dhaka').format('dddd');
    const time = moment.tz("Asia/Dhaka").format("HH:mm:ss - DD/MM/YYYY");
    const { commands } = global.client;
    const { threadID } = event;
    let threadInfo = await api.getThreadInfo(threadID);
    let threadName = threadInfo.threadName;

    if (!event.logMessageData.addedParticipants || !Array.isArray(event.logMessageData.addedParticipants)) return;

    // If bot is added to group
    if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
      let msg = `✨ হ্যালো সবাই! আমি 🤖 ${global.config.BOTNAME || "BOT"}\n\n✅ ${threadName} গ্রুপে কানেক্টেড!\n\n🔸 মোট কমান্ড: ${commands.size}\n🔸 Prefix: ${global.config.PREFIX}\n🔸 ভার্সন: ${global.config.version}\n🔸 এডমিন: ${ADMIN}\n🔸 ফেসবুক: ${FB_LINK}\n🔸 ${PRFX}help লিখে কমান্ড দেখুন\n🕓 যুক্ত হইল: ${time} (${thu})\n\n🚩 Made by TOHIDUL`;
      
      // Try to download GIF with better error handling
      let gifPath = __dirname + '/cache/join/join.gif';
      let attachment = null;
      
      try {
        // Ensure cache directory exists
        if (!fs.existsSync(__dirname + '/cache/join/')) {
          fs.mkdirSync(__dirname + '/cache/join/', { recursive: true });
        }
        
        if (!fs.existsSync(gifPath)) {
          let gifUrl = 'https://i.imgur.com/4HMupHz.gif';
          console.log('Downloading welcome GIF...');
          const response = await safeApiCall(gifUrl);
          fs.writeFileSync(gifPath, response.data);
          console.log('Welcome GIF downloaded successfully');
        }
        
        if (fs.existsSync(gifPath)) {
          attachment = fs.createReadStream(gifPath);
        }
      } catch (error) {
        console.log('Could not download welcome GIF, proceeding without it:', error.message);
      }
      
      return api.sendMessage({ 
        body: msg, 
        attachment: attachment 
      }, threadID);
    }

    // New user(s) added to group
    try {
      // Font check/download
      if (!fs.existsSync(__dirname + `/cache/font/`)) {
        fs.mkdirSync(__dirname + `/cache/font/`, { recursive: true });
      }
      
      if (!fs.existsSync(__dirname + `/cache/font/Semi.ttf`)) {
        try {
          let getfont = await safeApiCall(fontlink);
          fs.writeFileSync(__dirname + `/cache/font/Semi.ttf`, getfont.data);
        } catch (fontError) {
          console.error('Font download error:', fontError.message);
        }
      }

      let { participantIDs } = threadInfo;
      let threadData = global.data.threadData.get(parseInt(threadID)) || {};
      let mentions = [], nameArray = [], memLength = [], iduser = [], abx = [];
      let i = 0;

      for (let user of event.logMessageData.addedParticipants) {
        const userName = user.fullName; 
        iduser.push(user.userFbId.toString());
        nameArray.push(userName);
        mentions.push({ tag: userName, id: user.userFbId });
        memLength.push(participantIDs.length - i++);
      }

      // Image processing with Canvas support check
      if (canvas) {
        for (let o = 0; o < event.logMessageData.addedParticipants.length; o++) {
          try {
            let pathImg = __dirname + `/cache/join/${o}.png`;
            let pathAva = __dirname + `/cache/join/avt.png`;
            
            // Ensure cache directory exists
            if (!fs.existsSync(__dirname + `/cache/join/`)) {
              fs.mkdirSync(__dirname + `/cache/join/`, { recursive: true });
            }
            
            let avtAnime, background;
            
            // Download avatar
            try {
              const avatarUrl = `https://graph.facebook.com/${event.logMessageData.addedParticipants[o].userFbId}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;
              avtAnime = await safeApiCall(avatarUrl);
            } catch (avatarError) {
              console.log(`Avatar download failed for user ${o}, creating default`);
              // Create a simple default avatar
              const canvasEl = createCanvas(720, 720);
              const ctx = canvasEl.getContext('2d');
              ctx.fillStyle = '#4267B2';
              ctx.fillRect(0, 0, 720, 720);
              ctx.fillStyle = '#FFFFFF';
              ctx.font = 'bold 200px Arial';
              ctx.textAlign = 'center';
              ctx.fillText('?', 360, 400);
              avtAnime = { data: canvasEl.toBuffer() };
            }
            
            // Download background
            let backgrounds = [
              'https://i.imgur.com/dDSh0wc.jpeg',
              'https://i.imgur.com/UucSRWJ.jpeg',
              'https://i.imgur.com/OYzHKNE.jpeg',
              'https://i.imgur.com/V5L9dPi.jpeg',
              'https://i.imgur.com/M7HEAMA.jpeg'
            ];
            
            try {
              background = await safeApiCall(backgrounds[Math.floor(Math.random() * backgrounds.length)]);
            } catch (bgError) {
              console.log(`Background download failed, creating default`);
              // Create a simple gradient background
              const canvasEl = createCanvas(1902, 1082);
              const ctx = canvasEl.getContext('2d');
              const gradient = ctx.createLinearGradient(0, 0, 1902, 1082);
              gradient.addColorStop(0, '#667eea');
              gradient.addColorStop(1, '#764ba2');
              ctx.fillStyle = gradient;
              ctx.fillRect(0, 0, 1902, 1082);
              background = { data: canvasEl.toBuffer() };
            }
            
            fs.writeFileSync(pathAva, avtAnime.data);
            fs.writeFileSync(pathImg, background.data);
            
            let avatar = await this.circle(pathAva);
            let baseImage = await loadImage(pathImg);
            let baseAva = await loadImage(avatar);

            if (fs.existsSync(__dirname + `/cache/font/Semi.ttf`)) {
              registerFont(__dirname + `/cache/font/Semi.ttf`, { family: "Semi" });
            }
            
            let canvasEl = createCanvas(1902, 1082);
            let ctx = canvasEl.getContext("2d");
            ctx.drawImage(baseImage, 0, 0, canvasEl.width, canvasEl.height);
            ctx.drawImage(baseAva, canvasEl.width / 2 - 188, canvasEl.height / 2 - 375, 375, 355);

            // Stylish text
            ctx.fillStyle = "#FFF";
            ctx.textAlign = "center";
            ctx.font = `bold 120px ${fs.existsSync(__dirname + `/cache/font/Semi.ttf`) ? 'Semi' : 'Arial'}`;
            ctx.fillText(`👋 ${event.logMessageData.addedParticipants[o].fullName}`, canvasEl.width / 2, canvasEl.height / 2 + 70);

            ctx.font = `bold 75px ${fs.existsSync(__dirname + `/cache/font/Semi.ttf`) ? 'Semi' : 'Arial'}`;
            ctx.fillStyle = "#FFD700";
            ctx.fillText(`🎉 ${threadName} গ্রুপে স্বাগতম!`, canvasEl.width / 2, canvasEl.height / 2 + 180);

            // Member number with suffix
            const number = participantIDs.length - o;
            const suffix = (number === 11 || number === 12 || number === 13) ? "th" : (["st", "nd", "rd"][(number % 10) - 1] || "th");
            ctx.fillStyle = "#00FFCC";
            ctx.font = `bold 60px ${fs.existsSync(__dirname + `/cache/font/Semi.ttf`) ? 'Semi' : 'Arial'}`;
            ctx.fillText(`আপনি গ্রুপের ${number}${suffix} সদস্য!`, canvasEl.width / 2, canvasEl.height / 2 + 260);

            ctx.font = `bold 45px ${fs.existsSync(__dirname + `/cache/font/Semi.ttf`) ? 'Semi' : 'Arial'}`;
            ctx.fillStyle = "#FFF";
            ctx.fillText(`🕓 ${time} (${thu})`, canvasEl.width / 2, canvasEl.height / 2 + 330);

            ctx.font = `bold 35px ${fs.existsSync(__dirname + `/cache/font/Semi.ttf`) ? 'Semi' : 'Arial'}`;
            ctx.fillStyle = "#FF69B4";
            ctx.fillText(`🚩 Made by TOHIDUL`, canvasEl.width / 2, canvasEl.height / 2 + 400);

            const imageBuffer = canvasEl.toBuffer();
            fs.writeFileSync(pathImg, imageBuffer);
            abx.push(fs.createReadStream(pathImg));
          } catch (imageError) {
            console.error(`Image processing error for user ${o}:`, imageError);
            // Continue without image for this user
          }
        }
      }

      // Custom message
      let nameAuthor = await Users.getNameUser(event.author);
      let msg = `👤 নতুন সদস্য: ${nameArray.join(', ')}\n\n🌟 গ্রুপ: ${threadName}\n🌐 প্রোফাইল: https://facebook.com/profile.php?id=${iduser.join(', ')}\n🎊 এখন আমাদের সদস্য সংখ্যা: ${participantIDs.length}\n👮‍♂️ যিনি এড করেছেন: ${nameAuthor}\n\n${session}\n🕓 ${time} (${thu})\n\n🚩 Made by TOHIDUL`;
      if (typeof threadData.customJoin !== "undefined") msg = threadData.customJoin;

      try {
        // Add delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 500));
        await api.sendMessage({ 
          body: msg, 
          attachment: abx.length > 0 ? abx : null, 
          mentions 
        }, threadID);
      } catch (sendError) {
        console.error('Failed to send welcome message:', sendError.message);
        // Try sending without attachments if it fails
        try {
          await new Promise(resolve => setTimeout(resolve, 1000));
          await api.sendMessage({ body: msg, mentions }, threadID);
        } catch (fallbackError) {
          console.error('Fallback message also failed:', fallbackError.message);
          // Final fallback - simple message without mentions
          try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            await api.sendMessage(`Welcome to the group!`, threadID);
          } catch (finalError) {
            console.error('All message attempts failed:', finalError.message);
          }
        }
      }

      // Clean temp images
      for (let ii = 0; ii < event.logMessageData.addedParticipants.length; ii++) {
        try {
          if (fs.existsSync(__dirname + `/cache/join/${ii}.png`)) {
            fs.unlinkSync(__dirname + `/cache/join/${ii}.png`);
          }
        } catch (cleanupError) {
          console.error(`Cleanup error for image ${ii}:`, cleanupError);
        }
      }
    } catch (e) {
      console.error('AdminNoti processing error:', e);
    }
  } catch (error) {
    console.error('AdminNoti main error:', error);
  }
}
