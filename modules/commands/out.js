module.exports = {
  config: {
    name: "out",
  version: "1.0.5",
  credits: "TOHI-BOT-HUB",
  usePrefix: true,
  permission: 2,
  description: "out bot",
  commandCategory: "bot admin",
  cooldowns: 5
},

start: async function({ nayan, events, args }) {
        if (!args[0]) return nayan.removeUserFromGroup(nayan.getCurrentUserID(), events.threadID);
  nayan.reply("gd bye", events.threadID)
        if (!isNaN(args[0])) return nayan.removeUserFromGroup(nayan.getCurrentUserID(), args.join(" "));
}
}