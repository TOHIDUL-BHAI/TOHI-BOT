module.exports.config = {
  name: "pair4",
  version: "1.0.1",
  permssion: 0,
  usePrefix: true,
  credits: "TOHI-BOT-HUB",
  description: "",
  commandCategory: "fun",
  cooldowns: 5,
  dependencies: {
        "axios": "",
        "fs-extra": ""
    }
}
module.exports.onLoad = async() => {
    const { resolve } = global.nodemodule["path"];
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { downloadFile } = global.utils;
    const dirMaterial = __dirname + `/cache/canvas/`;
    const path = resolve(__dirname, 'cache/canvas', 'pairing.png');
    if (!existsSync(dirMaterial + "canvas")) mkdirSync(dirMaterial, { recursive: true });
    if (!existsSync(path)) await downloadFile("https://i.postimg.cc/X7R3CLmb/267378493-3075346446127866-4722502659615516429-n.png", path);
}

async function makeImage({ one, two }) {
    const fs = global.nodemodule["fs-extra"];
    const path = global.nodemodule["path"];
    const axios = global.nodemodule["axios"]; 
    const Jimp = require("jimp");
    const __root = path.resolve(__dirname, "cache", "canvas");

    let pairing_img = await Jimp.read(__root + "/pairing.png");
    let pathImg = __root + `/pairing_${one}_${two}.png`;
    let avatarOne = __root + `/avt_${one}.png`;
    let avatarTwo = __root + `/avt_${two}.png`;

    let getAvatarOne = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne));

    let getAvatarTwo = (await axios.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo));

    let circleOne = await Jimp.read(await circle(avatarOne));
    let circleTwo = await Jimp.read(await circle(avatarTwo));
    pairing_img.composite(circleOne.resize(150, 150), 140, 200).composite(circleTwo.resize(150, 150), 980, 200);

    let raw = await pairing_img.getBufferAsync(Jimp.MIME_PNG);

    fs.writeFileSync(pathImg, raw);
    
    // Check if files exist before deleting them
    if (fs.existsSync(avatarOne)) {
        fs.unlinkSync(avatarOne);
    }
    if (fs.existsSync(avatarTwo)) {
        fs.unlinkSync(avatarTwo);
    }

    return pathImg;
}
async function circle(image) {
    const Jimp = require("jimp");
    image = await Jimp.read(image);
    image.circle();
    return await image.getBufferAsync(Jimp.MIME_PNG);
}
module.exports.run = async function({ api, event, args, Users, Threads, Currencies }) {
  const axios = require("axios");
    const fs = require("fs-extra");
    const { threadID, messageID, senderID } = event;
    var tl = ['21%', '67%', '19%', '37%', '17%', '96%', '52%', '62%', '76%', '83%', '100%', '99%', "0%", "48%"];
        var tle = tl[Math.floor(Math.random() * tl.length)];
        // Get sender info with better error handling
        let namee = "Unknown User";
        try {
            let dataa = await api.getUserInfo(event.senderID);
            if (dataa && dataa[event.senderID] && dataa[event.senderID].name) {
                namee = dataa[event.senderID].name;
            } else {
                // Try to get from Users database as fallback
                const userData = await Users.getData(event.senderID);
                if (userData && userData.name) {
                    namee = userData.name;
                }
            }
        } catch (error) {
            console.log("Error getting sender info:", error.message);
        }

        let loz = await api.getThreadInfo(event.threadID);
        var emoji = loz.participantIDs;
        var id = emoji[Math.floor(Math.random() * emoji.length)];
        
        // Get paired user info with better error handling
        let name = "Unknown User";
        try {
            let data = await api.getUserInfo(id);
            if (data && data[id] && data[id].name) {
                name = data[id].name;
            } else {
                // Try to get from Users database as fallback
                const userData = await Users.getData(id);
                if (userData && userData.name) {
                    name = userData.name;
                }
            }
        } catch (error) {
            console.log("Error getting paired user info:", error.message);
        }

        var arraytag = [];
        arraytag.push({id: event.senderID, tag: namee});
        arraytag.push({id: id, tag: name});

        var sex = (data && data[id]) ? data[id].gender : 0;
        var gender = sex == 2 ? "Male🧑" : sex == 1 ? "Female👩‍  " : "Not found";
var one = senderID, two = id;
    return makeImage({ one, two }).then(path => api.sendMessage({ body: `Congratulations ${namee} is paired with ${name} \n ️The odds are: 〘${tle}〙`, mentions: arraytag, attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
}
