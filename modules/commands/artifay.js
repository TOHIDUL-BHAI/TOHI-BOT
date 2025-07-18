const fonts = {
    mathsans: {
        a: "𝖺", b: "𝖻", c: "𝖼", d: "𝖽", e: "𝖾", f: "𝖿", g: "𝗀", h: "𝗁", i: "𝗂",
        j: "𝗃", k: "𝗄", l: "𝗅", m: "𝗆", n: "𝗇", o: "𝗈", p: "𝗉", q: "𝗊", r: "𝗋",
        s: "𝗌", t: "𝗍", u: "𝗎", v: "𝗏", w: "𝗐", x: "𝗑", y: "𝗒", z: "𝗓",
        A: "𝖠", B: "𝖡", C: "𝖢", D: "𝖣", E: "𝖤", F: "𝖥", G: "𝖦", H: "𝖧", I: "𝖨",
        J: "𝖩", K: "𝖪", L: "𝖫", M: "𝖬", N: "𝖭", O: "𝖮", P: "𝖯", Q: "𝖰", R: "𝖱",
        S: "𝖲", T: "𝖳", U: "𝖴", V: "𝖵", W: "𝖶", X: "𝖷", Y: "𝖸", Z: "𝖹",
        " ": " "
    },
    serif: {
        a: "𝐚", b: "𝐛", c: "𝐜", d: "𝐝", e: "𝐞", f: "𝐟", g: "𝐠", h: "𝐡", i: "𝐢",
        j: "𝐣", k: "𝐤", l: "𝐥", m: "𝐦", n: "𝐧", o: "𝐨", p: "𝐩", q: "𝐪", r: "𝐫",
        s: "𝐬", t: "𝐭", u: "𝐮", v: "𝐯", w: "𝐰", x: "𝐱", y: "𝐲", z: "𝐳",
        A: "𝐀", B: "𝐁", C: "𝐂", D: "𝐃", E: "𝐄", F: "𝐅", G: "𝐆", H: "𝐇", I: "𝐈",
        J: "𝐉", K: "𝐊", L: "𝐋", M: "𝐌", N: "𝐍", O: "𝐎", P: "𝐏", Q: "𝐐", R: "𝐑",
        S: "𝐒", T: "𝐓", U: "𝐔", V: "𝐕", W: "𝐖", X: "𝐗", Y: "𝐘", Z: "𝐙",
        " ": " "
    },
      sansitalic: {
        a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪",
        j: "𝘫", k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳",
        s: "𝘴", t: "𝘵", u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻",
        A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐",
        J: "𝘑", K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙",
        S: "𝘚", T: "𝘛", U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
        " ": " "
    },
    outline: {
        a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚",
        j: "𝕛", k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣",
        s: "𝕤", t: "𝕥", u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫",
        A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀",
        J: "𝕁", K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ",
        S: "𝕊", T: "𝕋", U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ",
        " ": " "
    },
    sansbold: {
        a: "𝗮", b: "𝗯", c: "𝗰", d: "𝗱", e: "𝗲", f: "𝗳", g: "𝗴", h: "𝗵", i: "𝗶",
        j: "𝗷", k: "𝗸", l: "𝗹", m: "𝗺", n: "𝗻", o: "𝗼", p: "𝗽", q: "𝗾", r: "𝗿",
        s: "𝘀", t: "𝘁", u: "𝘂", v: "𝘃", w: "𝘄", x: "𝘅", y: "𝘆", z: "𝘇",
        A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜",
        J: "𝗝", K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥",
        S: "𝗦", T: "𝗧", U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭",
        " ": " "
    },
    bolditalic: {
        a: "𝙖", b: "𝙗", c: "𝙘", d: "𝙙", e: "𝙚", f: "𝙛", g: "𝙜", h: "𝙝", i: "𝙞",
        j: "𝙟", k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "𝙤", p: "𝙥", q: "𝙦", r: "𝙧",
        s: "𝙨", t: "𝙩", u: "𝙪", v: "𝙫", w: "𝙬", x: "𝙭", y: "𝙮", z: "𝙯",
        A: "𝘼", B: "𝘽", C: "𝘾", D: "𝘿", E: "𝙀", F: "𝙁", G: "𝙂", H: "𝙃", I: "𝙄",
        J: "𝙅", K: "𝙆", L: "𝙇", M: "𝙈", N: "𝙉", O: "𝙊", P: "𝙋", Q: "𝙌", R: "𝙍",
        S: "𝙎", T: "𝙏", U: "𝙐", V: "𝙑", W: "𝙒", X: "𝙓", Y: "𝙔", Z: "𝙕",
        " ": " "
    },
    gothic: {
        a: "𝔞", b: "𝔟", c: "𝔠", d: "𝔡", e: "𝔢", f: "𝔣", g: "𝔤", h: "𝔥", i: "𝔦",
        j: "𝔧", k: "𝔨", l: "𝔩", m: "𝔪", n: "𝔫", o: "𝔬", p: "𝔭", q: "𝔮", r: "𝔯",
        s: "𝔰", t: "𝔱", u: "𝔲", v: "𝔳", w: "𝔴", x: "𝔵", y: "𝔶", z: "𝔷",
        A: "𝔄", B: "𝔅", C: "ℭ", D: "𝔇", E: "𝔈", F: "𝔉", G: "𝔊", H: "ℌ", I: "ℑ",
        J: "𝔍", K: "𝔎", L: "𝔏", M: "𝔐", N: "𝔑", O: "𝔒", P: "𝔓", Q: "𝔔", R: "ℜ",
        S: "𝔖", T: "𝔗", U: "𝔘", V: "𝔙", W: "𝔚", X: "𝔛", Y: "𝔜", Z: "ℨ",
        " ": " "
    },
    typewriter: {
        a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒",
        j: "𝚓", k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛",
        s: "𝚜", t: "𝚝", u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣",
        A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸",
        J: "𝙹", K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁",
        S: "𝚂", T: "𝚃", U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉",
        " ": " "
    },
     square: {
        a: "🄰", b: "🄱", c: "🄲", d: "🄳", e: "🄴", f: "🄵", g: "🄶", h: "🄷", i: "🄸",
        j: "🄹", k: "🄺", l: "🄻", m: "🄼", n: "🄽", o: "🄼", p: "🄿", q: "🅀", r: "🅁",
        s: "🅂", t: "🅃", u: "🅄", v: "🅅", w: "🅆", x: "🅇", y: "🅈", z: "🅉",
        A: "🄰", B: "🄱", C: "🄲", D: "🄳", E: "🄴", F: "🄵", G: "🄶", H: "🄷", I: "🄸",
        J: "🄹", K: "🄺", L: "🄻", M: "🄼", N: "🄽", O: "🄾", P: "🄿", Q: "🅀", R: "🅁",
        S: "🅂", T: "🅃", U: "🅄", V: "🅅", W: "🅆", X: "🅇", Y: "🅈", Z: "🅉",
        " ": " "
    },
     blue: {
        a: "🇦 ", b: "🇧 ", c: "🇨 ", d: "🇩 ", e: "🇪 ", f: "🇫 ", g: "🇬 ", h: "🇭 ", i: "🇮 ",
        j: "🇯 ", k: "🇰 ", l: "🇱  ", m: "🇲 ", n: "🇳 ", o: "🇴 ", p: "🇵 ", q: "🇶 ", r: "🇷 ",
        s: "🇸 ", t: "🇹 ", u: "🇺 ", v: "🇻 ", w: "🇼 ", x: "🇽 ", y: "🇾 ", z: "🇿 ",
        A: "🇦 ", B: "🇧 ", C: "🇨 ", D: "🇩 ", E: "🇪 ", F: "🇫 ", G: "🇬 ", H: "🇭 ", I: "🇮 ",
        J: "🇯 ", K: "🇰 ", L: "🇱 ", M: "🇲 ", N: "🇳 ", O: "🇴 ", P: "🇵 ", Q: "🇶 ", R: "🇷 ",
        S: "🇸 ", T: "🇹 ", U: "🇺 ", V: "🇻 ", W: "🇼 ", X: "🇽 ", Y: "🇾 ", Z: "🇿 ",
        " ": " "
    },
     widespace: {
        a: "ａ", b: "ｂ", c: "ｃ", d: "ｄ", e: "ｅ", f: "ｆ", g: "ｇ", h: "ｈ", i: "ｉ",
        j: "ｊ", k: "ｋ", l: "ｌ", m: "ｍ", n: "ｎ", o: "ｏ", p: "ｐ", q: "ｑ", r: "ｒ",
        s: "ｓ", t: "ｔ", u: "ｕ", v: "ｖ", w: "ｗ", x: "ｘ", y: "ｙ", z: "ｚ",
        A: "Ａ", B: "Ｂ", C: "Ｃ", D: "Ｄ", E: "Ｅ", F: "Ｆ", G: "Ｇ", H: "Ｈ", I: "Ｉ",
        J: "Ｊ", K: "Ｋ", L: "Ｌ", M: "Ｍ", N: "Ｎ", O: "Ｏ", P: "Ｐ", Q: "Ｑ", R: "Ｒ",
        S: "Ｓ", T: "Ｔ", U: "Ｕ", V: "Ｖ", W: "Ｗ", X: "Ｘ", Y: "Ｙ", Z: "Ｚ",
        " ": " "
    },
    lightshade: {
        a: "a░", b: "b░", c: "c░", d: "d░", e: "e░", f: "f░", g: "g░", h: "h░", i: "i░",
        j: "j░", k: "k░", l: "l░", m: "m░", n: "n░", o: "o░", p: "p░", q: "q░", r: "r░",
        s: "s░", t: "t░", u: "u░", v: "v░", w: "w░", x: "x░", y: "y░", z: "z░",
        A: "A░", B: "B░", C: "C░", D: "D░", E: "E░", F: "F░", G: "G░", H: "H░", I: "I░",
        J: "J░", K: "K░", L: "L░", M: "M░", N: "N░", O: "O░", P: "P░", Q: "Q░", R: "R░",
        S: "S░", T: "T░", U: "U░", V: "V░", W: "W░", X: "X░", Y: "Y░", Z: "Z░",
        " ": " "
    },
     morsecode: {
    a: "·-", b: "-···", c: "-·-·", d: "-··", e: "·", f: "··-·", g: "--·", h: "····", i: "··",
    j: "·---", k: "-·-", l: "·-··", m: "--", n: "-·", o: "---", p: "·--·", q: "--·-", r: "·-·",
    s: "···", t: "-", u: "··-", v: "···-", w: "·--", x: "-··-", y: "-·--", z: "--··",
    A: "·-", B: "-···", C: "-·-·", D: "-··", E: "·", F: "··-·", G: "--·", H: "····", I: "··",
    J: "·---", K: "-·-", L: "·-··", M: "--", N: "-·", O: "---", P: "·--·", Q: "--·-", R: "·-·",
    S: "···", T: "-", U: "··-", V: "···-", W: "·--", X: "-··-", Y: "-·--", Z: "--··",
    " ": " "
},
      binarycode: {
    a: "01100001", b: "01100010", c: "01100011", d: "01100100", e: "01100101", f: "01100110", g: "01100111", h: "01101000", i: "01101001",
    j: "01101010", k: "01101011", l: "01101100", m: "01101101", n: "01101110", o: "01101111", p: "01110000", q: "01110001", r: "01110010",
    s: "01110011", t: "01110100", u: "01110101", v: "01110110", w: "01110111", x: "01111000", y: "01111001", z: "01111010",
    A: "01000001", B: "01000010", C: "01000011", D: "01000100", E: "01000101", F: "01000110", G: "01000111", H: "01001000", I: "01001001",
    J: "01001010", K: "01001011", L: "01001100", M: "01001101", N: "01001110", O: "01001111", P: "01010000", Q: "01010001", R: "01010010",
    S: "01010011", T: "01010100", U: "01010101", V: "01010110", W: "01010111", X: "01011000", Y: "01011001", Z: "01011010",
    " ": "00100000"
},
      decimalcode: {
    a: "97", b: "98", c: "99", d: "100", e: "101", f: "102", g: "103", h: "104", i: "105",
    j: "106", k: "107", l: "108", m: "109", n: "110", o: "111", p: "112", q: "113", r: "114",
    s: "115", t: "116", u: "117", v: "118", w: "119", x: "120", y: "121", z: "122",
    A: "65", B: "66", C: "67", D: "68", E: "69", F: "70", G: "71", H: "72", I: "73",
    J: "74", K: "75", L: "76", M: "77", N: "78", O: "79", P: "80", Q: "81", R: "82",
    S: "83", T: "84", U: "85", V: "86", W: "87", X: "88", Y: "89", Z: "90",
    " ": "32"
  }
};

    const textArts = {
    luffy: "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡤⠤⠶⠶⠒⠒⠒⠒⠢⠤⢄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠴⠊⢡⣠⣆⡵⠦⠤⠄⠐⠾⠴⣦⣰⣈⡑⠢⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠴⠓⠂⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⠺⢶⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠴⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣤⡶⠋⠀⠀⠀⠀⠀⠀⠉⠳⢤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠎⡀⠀⠂⠀⠀⠀⠀⠀⢀⣤⣶⣿⣿⣿⣿⣭⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠢⣄⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠔⢉⠅⡢⡨⡀⢠⡠⠀⢀⣴⣾⣿⠟⣿⠁⠸⣿⣿⣯⢻⣿⣿⣷⣦⣀⢐⠂⠀⢀⠀⠀⠀⠠⠘⢦⡀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⢠⠊⠀⠃⠪⡠⡪⣜⠆⣨⣾⣿⣿⡿⠁⠀⢻⠀⠀⠹⣿⣿⡄⠙⣿⣿⣿⡿⡗⠋⠊⠀⠀⠀⠀⠀⠹⡄⠀⠀⠀\n⠀⠀⠀⠀⠀⢠⠃⠀⠀⠀⠀⡄⡐⠁⣼⣿⣿⢿⡟⠁⠀⠀⠘⠀⠀⠀⠈⢻⣇⠀⠈⢿⡟⣿⣿⣿⡷⡞⣱⢃⠞⠄⠠⠀⠈⡇⠀⠀\n⠀⠀⠀⠀⢀⠊⠄⠀⠀⠀⠀⠀⠈⣸⣿⣿⠏⡞⠒⠒⠂⠤⠀⠀⠀⠀⠀⠀⠙⠂⠉⠈⢻⠸⣿⣿⣧⡚⠌⠴⡠⣠⢀⠀⠀⠀⢹⡀⠀⠀\n⠀⠀⠀⠀⡎⢸⡘⡌⣦⡐⣦⠲⡰⣿⣿⡟⠀⠁⠀⣀⡀⠀⠀⠀⢀⠀⠀⠀⠀⢀⣠⣤⣀⠁⢻⣿⣿⣿⡷⡞⣱⢃⠞⠄⠠⠀⠈⡇⠀⠀\n⠀⠀⠀⢠⠊⠄⡇⡜⣃⠜⢹⠀⠀⠀⠀⢻⠀⡋⡀⠀⠀⠀⠀⠀⠘⠐⠀⠀⠀⠐⠒⠆⠰⠆⡦⢠⠇⠀⠀⠀⢸⡝⡋⠀⠷⡈⢀⠇⠀⠀\n⠀⠀⠀⢸⠸⡘⢠⡃⢋⢹⠀⠀⠀⠀⢠⡀⡋⡀⠀⠀⠀⠀⠀⠰⠖⠚⠊⠀⠙⠉⠈⢻⡷⠅⠀⠙⡇⣾⣶⠀⡆⢠⠀⡇⠀⠀\n⠀⠀⠀⠘⡆⡇⡜⣃⠜⢹⠀⠀⠀⠀⠚⡾⠛⢉⣄⡤⠀⠒⠒⠈⠉⠉⠉⠉⠉⠉⠙⠿⣿⡿⠁⠰⠖⠚⠊⠀⠙⣆⠈⡞⢁⠔⠀⠀⠀⠀\n⠀⠀⠀⠀⢣⠞⡄⡵⡀⠚⠀⠀⠀⠀⠀⢥⠀⣿⠀⠁⢀⣠⣴⣶⣾⣿⣿⣿⣷⣶⣶⣄⡀⢸⠄⠀⠀⠀⡰⠠⡙⣌⢧⡘⡜⠀⠀⠀\n⠀⠀⠀⠀⠸⣌⠈⡊⠄⠀⡀⠀⠀⠄⢙⠆⠘⢶⣾⣿⠿⠛⠉⠉⠉⠉⠉⠉⠙⠿⣿⡿⠁⠰⠖⠚⠊⠀⠙⣆⠈⡞⢁⠔⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠈⢦⡈⠀⠀⡱⡆⢀⠥⠠⠨⣚⡄⠀⠻⢤⡔⠒⠀⠀⠉⠉⠉⠐⠢⠍⡔⠂⢭⡠⠀⠀⠀⢠⡙⡠⢭⢅⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠈⠓⢵⡊⡩⠮⡌⣄⢭⡛⣸⡦⣄⡀⠈⠓⠒⠒⠐⠒⠒⠂⠁⠠⢐⡀⠀⠀⠀⠀⠀⠀⢜⢪⡇⠚⡄⠧⡀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢉⠡⠶⠬⠭⢽⠿⢿⠝⣉⡟⠿⣶⢦⣤⣤⣤⣤⣶⣾⣿⣇⠣⠄⠤⠔⠉⠉⠑⠂⡁⠨⣀⠷⠀⢰⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⢀⣔⡪⣥⠀⠀⠀⠀⠀⠀⠀⠉⠙⢇⠀⠈⠺⣿⣿⢿⣿⣿⠟⡸⠚⠉⠁⠁⠀⠀⠀⢀⠠⢑⠢⢥⠅⢒⡁⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠜⠁⠀⠈⠀⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠉⠲⢄⠈⠉⢹⠻⠯⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠘⡆⠀⠀⠀\n⠀⠀⠀⢀⠔⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⡀⠀⡠⠕⠒⠉⠀⠀⠀⣠⠞⠔⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠑⠀⠀⠀\n⠀⠀⠀⢸⠀⠀⡀⡀⣠⣁⣠⣥⣶⣶⣾⣷⣶⣤⣢⣆⡥⣡⠼⠀⠀⣠⡠⠐⠀⠻⠋⣀⠀⡀⣄⣮⢬⡚⢔⢆⣀⣠⠁⢀⡈⢐⢨⠀⠀⠀\n⠀⠀⠀⢸⢨⣠⣵⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠊⠀⠀⠀⠛⡋⡀⢀⣴⣼⣾⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣬⣧⣲⣼⠀⠀⠀\n⠀⠀⠀⢨⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⢿⣿⣿⣿⣿⣿⣷⣴⣱⡄⣆⣦⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⡇⠀⠉⠙⠻⢿⣿⣿⣿⣿⣿⣿⠫⠉⠉⠒⠢⢄⠈⠙⠻. ",
      killua: "⠭⠵⠖⠀⠀⠀⠀⠀⠀⠀⠠⠀⠠⠀⡠⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠀⠀⠀⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠄⠠⠀⠀⠀⠀⠀\n⠀⠂⠀⠀⠀⠀⠀⢀⡀⠀⠀⠁⢠⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠠⠀⠀⠔⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢦⠀⠀⠀⠀⠀⠀⠀⠀⡀⠉⠳⢦⣀⠀⠀⠀⠁⠀⠈⣐⠲⠶\n⠀⠀⣀⠠⣒⣼⡵⠋⠀⠀⠀⡴⢃⠀⠀⠀⠀⠀⢀⠐⠀⠀⠀⠀⠀⠀⠈⠀⠁⠀⠀⠣⠀⠀⠀⠀⠂⠀⠀⠀⠀⠀⠀⠂⡀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠈⠑⠦⣀⠀⠀⠀⠐⠁⠢\n⡶⠞⠊⣽⡵⠟⠁⠀⠀⣀⡞⠀⠀⠀⠀⠀⠀⡠⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄⠀⠀⠀⠀⠈⠀⠑⢄⠀⠀⠀⠀⠉⠒⠤⢀⠀⠀\n⠀⣠⢟⠟⠁⠀⠀⢀⠄⡼⢀⠀⠀⢠⠀⠀⡔⠀⠠⢀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⢀⠁⠢⡀⠀⠀⠠⢀⣀⠀⠀\n⡼⠡⠂⠀⠀⣀⡴⡱⢊⠁⠀⠀⠀⠂⠀⡜⠀⣆⢠⣼⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⠀⠀⠀⠀⠀⡀⡀⠀⢦⡀⢆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡈⠣⡐⢄⡑⠂⠀⠀⢹⣿⢟\n⠀⠁⢀⠤⢊⠏⡰⢁⠊⠀⠄⠀⠀⠀⢰⠃⠘⢨⣽⣿⠀⣸⠀⠀⢻⠀⠀⠀⠀⠀⠀⠀⠐⠀⠤⡀⠀⠣⠂⠀⠀⢆⠀⠀⠐⡄⠀⠁⠂⢢⠀⠀⠀⠀⢀⠑⣄⠀⠀⠻⣦⡈⠢⠈⠢⣀⠢⡀⢣⠑\n⣠⠔⠁⠠⠂⠐⡡⠃⢀⠔⠀⠀⠀⠀⡎⠀⡇⡞⣿⣿⠀⢿⣼⢠⣸⣇⠀⠘⣤⡀⠀⢃⣆⠐⡌⣶⠄⠀⢷⣀⠀⠈⢷⣄⡠⠽⣴⡀⠀⠳⡃⠀⠀⠈⠪⢢⡈⢵⣄⠀⠹⡷⡄⠀⢡⡙⢇⠠⠀⢣\n⠁⠀⠀⠀⠰⡴⠁⠀⠙⠀⡄⠀⡄⢀⠇⢀⢁⣿⣿⣿⡾⡞⣿⢸⣿⡿⡄⠀⢹⢳⠀⠘⡼⣆⢸⣼⣿⣦⠈⢿⣧⠀⠈⢿⣷⣄⠹⣧⡀⠀⠙⣄⠠⡀⠀⠈⢳⣄⢻⣷⣤⡙⣌⢦⡀⢳⣮⡳⣤⠀\n⠀⠀⠀⢀⡖⠁⠀⠀⠀⠸⠀⠐⠇⡀⢀⣾⣼⣿⣿⣿⣿⣧⣿⡆⣿⣷⣷⡀⠈⣿⣧⠀⢷⣏⢦⢹⣼⡿⣷⣌⢟⢷⡄⠘⣿⣿⣦⡙⣷⡀⡀⠘⣄⠩⣂⠀⠸⣿⠿⠷⠀⢀⡝⠾⢟⢄⠻⡏⠛⠊\n⠀⠀⠀⡜⠑⠀⠀⠀⠀⠀⢀⠜⢠⠇⣿⣿⣿⡏⢹⢹⣿⣿⣿⣽⣿⡟⣿⣷⠀⢹⣿⢧⢸⣿⡀⣳⣯⢷⣟⣿⣯⣿⣻⣦⣹⣍⣿⣿⣾⣷⣄⠀⠺⣆⠹⣦⣷⣽⣰⣦⣀⠹⣧⠀⢸⣾⣏⠙⠄⠀\n⠀⠀⢠⠅⠀⠀⠀⠀⠀⠀⡞⠀⡜⢰⢹⣿⢻⣇⠀⠈⣿⣿⣿⣾⣿⣇⠻⡇⢣⢸⣿⠈⢧⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠛⣿⠿⣿⡿⣿⣿⣦⡀⠣⠣⡸⢷⣽⣿⣞⢿⠀⢻⠀⠀⣏⢿⡄⠀⠀\n⠀⠀⠈⠀⠀⠀⠀⠀⠀⢰⠁⢀⠁⣸⣿⡁⠆⢻⣆⠀⠙⢿⣿⣿⣿⡈⠀⠻⡌⢻⣏⠆⠼⢿⠁⠀⢿⣿⣿⣿⣿⣿⡿⠁⠀⠈⣰⡟⠃⠀⣹⣿⣝⣠⣷⠉⢢⡝⠘⢻⠟⠀⣼⠀⠀⣿⢦⢻⡄⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⡆⠀⣼⠀⢸⣿⣷⠀⠀⠻⣦⡀⠀⠉⠉⠀⠁⠀⠀⠁⠈⠻⠀⠀⠈⠀⢀⠈⠙⠻⠿⠟⠋⠀⠀⣠⡾⠋⠀⠀⠐⢻⣿⡍⣽⡇⣀⠼⠑⡠⠐⢀⠌⠈⢀⡴⠋⠀⠈⠋⣄\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠃⠀⠀⠰⢸⠘⢹⣧⠀⠀⠈⠻⠷⡶⠤⠂⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⣶⣶⣤⣤⣶⡶⠟⠋⠀⠠⠐⠀⠀⣸⣿⣇⣿⡿⠤⡤⠂⢀⡴⢃⣠⣾⡍⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠀⠘⠀⢹⢿⡄⠀⠀⡆⠀⠀⠀⠀⢀⡇⠀⠀⠀⠀⠀⠀⠀⠀⢲⣾⣿⣿⣿⣿⡶⠒⠀⠀⠈⠁⠐⢤⡀⠀⣿⣿⡿⢿⠴⠒⠒⢛⣴⢻⡋⠉⢿⡀\n⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠈⣷⢀⠐⠀⠀⠀⠀⠻⣭⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⠋⠉⠁⠀⠀⠀⡇⠀⠀⢠⣄⣤⣿⡇⠀⠀⠀⣠⡞⠹⠋⠸⠀⠀⠀⠁⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⡟⠃⠀⠀⠀⠀⠀⠘⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⣿⠀⠀⠰⠆⠀⠀⠁⠀⡀⣸⣿⣟⣿⣿⡷⣶⠏⣿⣧⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⢦⡀⠀⠀⠀⠀⠀⢀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢾⠀⠀⢰⡇⠀⣀⣴⠟⠀⣿⣿⣿⣿⣿⣧⣿⢀⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠢⣄⠀⠀⠀⠀⠻⠯⠟⠳⠆⠀⠀⠀⠀⠀⠀⣼⠇⠀⣨⣵⠾⠋⠁⣠⣾⣿⣿⣿⣿⣿⡟⢻⣼⠉⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣾⣿⠛⣁⣤⣶⣿⣿⣿⣿⣿⣿⣿⠁⠁⠈⢿⠀⠙⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣷⣤⡀⠀⠀⠀⠀⣀⣤⣶⣿⣿⡿⣻⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣶⣶⣶⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣈⠛⠷⣤\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣤⡄⠀⠉⠳⠦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠋⠉⠀⢀⡀⠀⠠⠚⠙⠳⣄⠀⠀⠀\n⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠞⢁⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠛⠁⠀⠀⠀⠀⢠⠊⠀⠊⠀⠀⠠⠀⠈⠙⢲⡀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠼⢁⣴⢯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠋⠀⠀⠀⠀⠀⠀⠀⡐⠀⠈⠀⠀⠀⠁⠀⠀⠀⠀⠈⣇⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⢋⣴⠟⣱⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠁⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸\n⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⢏⡔⣻⠋⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁⠀⠐⡀⠀⣤⣤⣲⡴⠖⠀⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣄⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡖⡣⢋⡼⠃⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠋⠀⠄⠀⠀⣾⣷⣾⠿⠋⠀⠀⠀⡠⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢦⣀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠟⣀⡞⠁⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠋⠀⠀⠀⠀⠀⡀⠀⠉⠛⠟⠀⠀⠀⠀⠚⢠⣴⢦⠴⠀⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠲⠬⣕\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⢃⢴⠏⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⡿⠛⠁⠀⠀⠀⠀⡀⠀⠀⠁⠀⠀⠀⠀⣰⣴⣶⣿⠦⠟⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⢧⣾⠏⠀⠀⣴⠀⣿⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⢰⣦⣴⠶⠀⠀⠀⠀⠀⠀⠀⠀⠙⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⢫⠏⠀⠀⠘⣿⠀⠻⣿⣿⡿⠏⠀⠀⠐⠲⠃⠀⠀⠙⠉⠀⠀⠀⠸⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⢀⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⡿⢁⡞⠀⠀⠀⣼⣿⣁⠀⠈⠉⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⠐⠟⠁⠀⠔⠀⠀⠀⠀⠀⠀⠀⠀⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
      tanjiro: "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠛⢹⡿⠟⠛⠛⠉⢉⡽⣿⣿⣿⣿⣿⣿⡿⠿⠿⠿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠿⠛⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠉⠁⠁\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⡿⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠁⠀⠀⠀⠀⠀⠀⠛⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠐⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⢉⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⢿⡿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣯⣻⢿⣻⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀\n⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣶⣫⣿⣿⣿⣿⣿⣻⣾⢼⣿⢿⣿⢷⡇⠀⠀⠀⠀⠀⠀⠀\n⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⢉⣿⢽⡯⣿⣿⣿⣿⣿⣿⡿⠋⠀⢸⡅⠀⠀⠀⠀⠀⠀⠀\n⣿⣿⣿⣿⣿⣿⣿⣿⠀⢠⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⣠⣿⣿⣿⣯⣻⣽⡯⣟⡿⣿⡆⠀⠀⠘⡇⠀⠀⠀⠀⠀⠀⠀\n⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠙⠢⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⢿⣿⣿⣿⣿⡿⠿⣾⣿⣯⣗⡯⣿⣦⣶⣶⣾⣹⡀⠀⠀⠀⠀⠀⠀\n⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠈⠓⢦⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠢⡀⠀⠀⠀⠀⠀⠀⠘⣹⣿⣿⣿⣿⣿⠏⠀⠀⠈⢻⢿⣷⣿⣿⣿⣻⣿⣿⣿⣿⣄⠀⠀⠀⠀⠀\n⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠈⠛⠿⣷⣦⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⡀⠀⠰⡄⠀⠀⡴⣟⣿⠾⢿⣿⠿⠇⠀⠀⣠⠿⢿⠾⠛⠛⢿⡾⣿⣻⣿⡿⣿⣦⡀⠀⠀⠀\n⣿⣿⣿⣿⡿⠋⠉⢻⡄⠀⠀⠀⢀⣀⡀⠀⠀⠠⢄⣉⠛⠻⢿⣶⣦⣄⡀⠀⠀⠀⢀⡔⠂⠔⠀⠀⠀⢤⡀⠈⠳⣼⣏⣀⣀⣀⣋⣁⣀⣀⣀⣈⣁⣀⣀⣀⣀⡤⠾⠛⢛⣿⣿⠯⠿⢿⣿⣦⠀⠀\n⣿⣿⣿⣿⠁⣀⠀⠈⣇⠀⠐⠉⠁⣀⣀⣀⣀⣀⣀⣀⣀⠀⠀⠈⠙⣻⣿⣷⣶⣶⠋⠀⠀⠀⠀⠀⠀⠀⠈⠑⠀⠈⠻⠿⠿⠿⠿⠿⠿⠿⠿⠟⠛⠛⠉⠉⠀⠀⠀⠀⠘⣁⣠⣤⣶⣾⣭⣄⡀⠀\n⣿⣿⣿⡷⠊⡹⠳⡀⣿⠀⠀⣨⣿⣿⠿⠿⢟⣿⣿⣿⣿⣿⣿⣶⣦⣌⡑⠪⡉⡁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠤⠤⠀⠀⠤⠤⠤⠤⠤⠤⢄⡀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣧⡀\n⣿⣿⣿⡇⢀⣇⠀⢹⣿⡇⠀⠊⠁⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠙⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠔⠔⢋⣀⣤⣴⣶⣶⣶⣶⣶⣦⣤⣄⣈⠉⠑⠀⠀⠀⠀⠀⠀⣾⣿⣿⣟\n⣿⣿⣿⡇⣎⠈⠦⣿⣿⣿⠀⠀⠀⠀⠀⠀⢷⢈⣿⣿⡏⠀⠙⣿⣿⣿⣿⠛⢿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⣿⠿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⡿⠿⣦⡀⠀⠀⠀⠀⢠⣿⣿⣿⡏\n⣿⣿⣿⢿⠘⣖⢲⣿⣿⣿⡇⠀⠀⠀⠀⠀⠈⢯⡹⢿⣿⣶⡿⠟⠉⢹⡏⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠞⠉⠀⠐⣿⠻⣿⣿⡀⠀⣉⣿⡿⠿⡿⠀⠈⠁⠀⠀⠀⠀⣼⣿⣿⣿⡇\n⣿⣿⣿⣟⡆⠈⢺⣿⣿⣿⣿⡄⠀⠈⠳⢤⣀⠀⠙⠦⢤⣁⣀⡤⠔⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣾⠟⠻⣿⡿⡿⠉⢁⡴⠃⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⡇\n⣿⣿⣿⣿⣿⣄⣼⣿⣿⡿⠁⢳⠀⠀⠀⠀⠈⠙⠲⠶⠤⠤⠤⠤⠤⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢦⣥⠥⠤⠒⠈⠀⢀⣠⠖⠀⠀⠀⢠⣿⠏⢿⣿⣿⣇\n⣿⣿⣿⣿⣿⣿⣿⡿⠋⠳⣄⡘⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠲⠦⣤⣤⣤⣤⣤⠄⠚⠉⠁⠀⠀⠀⢀⣾⣿⠞⢧⢻⣿⣿\n⣿⣿⣿⣯⣿⣿⣽⣧⡀⠀⠀⠉⢹⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣯⠧⠤⠚⠉⠙⠻\n⣯⣭⣿⣿⣿⣿⣿⣗⣿⣦⡰⣿⠂⢷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠏⣀⠀⠀⠀⠀⣠⣾\n⣻⢝⡻⡻⢻⣟⢟⣿⣿⣿⢟⣿⠦⠬⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠏⠘⡟⢀⣠⣶⣿⣿⣿\n⠁⠀⠀⣤⡤⠶⠿⠛⠋⠁⠀⣿⢀⣤⠘⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⢌⢣⠀⠀⠐⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⢛⡛⢒⡟⠋⠹⣿⣿⣿⣿\n⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⣾⣿⢻⠀⢘⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⡇⢸⢿⣿⣇⠀⠀⠙⣿⣿⣿\n⠀⠀⠀⠀⠀⠀⠀⠀⠈⡿⣽⣿⣿⢾⠀⣾⣿⢳⡀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣤⣤⣤⣄⣀⣀⠀⡀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⡇⣾⣾⣿⣿⡗⠀⠀⠈⠻⣿\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⡷⢺⣿⣟⢻⢸⣿⣿⡀⢷⣄⠀⠀⠀⠀⠀⠀⠀⠸⣯⢿⣦⣤⣀⣀⠀⠀⠈⠉⠉⠉⠙⣻⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⠃⢻⣇⣿⣾⣿⣏⡇⠀⠀⠀⠀⠈\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⣷⢻⢻⡏⢿⣿⣿⣿⡇⠘⣿⣷⣄⠀⠀⠀⠀⠀⠀⠈⠛⠺⠭⣙⣛⠛⠛⠛⠛⠛⠛⢛⣋⣼⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠞⣻⡏⢧⠀⢹⡷⣿⣿⢹⠃⠀⠀⠀⠀⠀\n⠆⠀⠀⣀⣠⠤⠖⠒⠒⡇⡎⢸⠸⢸⣿⣿⣿⣿⣄⠘⡽⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠠⠬⠅⠈⡉⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⠞⠁⢠⣿⠁⢸⡀⢸⣱⣻⢻⣿⡀⠀⠀⠀⠀⠀\n⣶⠖⠋⠁⠀⠀⠀⠀⠀⣷⠁⢸⠀⢿⣿⣿⣿⣿⣿⣆⠘⢞⠻⡿⠳⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⠶⠋⠀⠀⢀⡾⢋⠄⣾⡇⢸⠃⡇⢸⣿⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠴⠛⠛⢻⣿⣿⣿⣿⣿⣿⣷⡄⢐⠮⡲⣼⣟⠲⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠴⠞⠋⠀⠀⠀⢀⡴⢟⡵⠁⣴⣿⣇⡟⠶⣇⠸⡇⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⠀⢀⡏⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣦⡑⢬⡛⢿⣷⡀⠉⠓⠦⣄⣀⠀⠀⠀⠀⠀⣀⣠⠴⠞⠋⠀⠀⠀⠀⠀⠀⠔⢋⡠⠍⣠⣾⣿⣿⠀⡇⠀⠈⢷⣇⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⢀⣴⣿⡇⠀⠀⢀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣍⠲⠭⡛⠶⢤⣄⣀⡉⠙⠛⠛⠛⠉⠁⠀⠀⢀⣀⣠⠤⠖⢚⣉⠤⠂⣉⣤⣾⣿⣿⣿⣿⣄⠃⠀⠀⢸⠉⠙⠒⠶⠤⣤⣀\n⠀⠀⠀⠀⣀⣴⣿⣿⣿⣷⣶⣾⡟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣈⡑⠓⠠⡉⢹⡖⠒⢛⣙⣋⣉⣉⡩⠅⠀⠀⣉⣡⣤⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⢸⠀⠀⠀⠀⠀⠀⠈\n⠀⠀⣠⣶⣿⣿⣿⣿⣿⣽⣷⣿⣿⡼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡆⢹⢸⡇⠀⣤⣤⣤⣤⣤⣴⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⠻⣦⡾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
      saitama: "⠀⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀⢠⠞⠉⠙⠉⠙⠲⡀⠀\n⠀⠀⠀⣴⠿⠏⠀⠀⠀⠀⠀⠀ ⢳⡀⠀⡏⠀⠀⠀⠀ ⠀   ⢷\n⠀⠀⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀⣧⠀⢸⠀⠀⠀⠀⠀     ⡇\n⠀⠀⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲⣿⠀⣸I can solo⠀ ⡇\n⠀⠀⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀⠀ ⣿⠀⢹⠀⠀⠀⠀⠀    ⡇\n⠀⠀⠙⢿⣯⠄⠀⠀⠀⢀⡀⠀⠀⡿⠀⠀⡇⠀⠀⠀⠀    ⡼\n⠀⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀⡴⠃⠀⠀⠘⠤⣄⣠⣄⣠⣄⠞⠀\n⠀⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀\n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿⠀⠀⠀⠀⠀⠀\n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏⠀⠀⠀⣄⢸⠀⠀⠀⠀⠀⠀\n⣿⣿⣧⣀⣿.........⣀⣰⣏⣘⣆⣀⠀⠀",
      robot: " ┈╭━━━━━━━━━━━╮┈\n┈┃╭━━━╮┊╭━━━╮┃┈\n╭┫┃▇┈┃┊┃┈▇ ┃┣╮\n┃┃╰━━━╯┊╰━━━╯┃┃\n╰┫╭━╮╰━━━╯╭━╮┣╯\n┈┃┃┣┳┳┳┳┳┳┳┫┃┃┈\n┈┃┃╰┻┻┻┻┻┻┻╯┃┃┈\n┈╰━━━━━━━━━━━╯┈",
      lol: "▂▂╱▔▔▔▔▔▔▔▔▔▔▔▔╲\n╲▂┈╭╮┈┈╭━━╮╭╮┈┈▕\n┈┈▏┃┃┈┈┃╭╮┃┃┃┈┈▕\n┈┈▏┃╰━╮┃╰╯┃┃╰━╮▕\n┈┈▏╰━━╯╰━━╯╰━━╯▕\n┈┈╲▂▂▂▂▂▂▂▂▂▂▂▂╱\n\n▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔",
      funny: "────────────██████████────────────\n────────███████████████████───────\n──────███████████████████████─────\n────██████████████████████████────\n───█████████████▀──────────▀███───\n──█████████████──────────────███──\n─████████████────────────────████─\n─██████████───────────────────███─\n██████████▀───────────────────████\n████████▀─────────────────────████\n██████▀────────────────────────███\n█████──▄▀▀▀▀▀▀▀▄────▄▀▀▀▀▀▀▀▄──███\n█████────▄▄▄▄▄────────▄▄▄▄▄────███\n█████──▄▀───▄██▄────▄▀───▄██▄──███\n█████──▀▄───▀▀█▀────▀▄───▀▀█▀──███\n█▀──█────▀▀▀▀▀────────▀▀▀▀▀────███\n█───█──────────────────────────█─█\n█────────────────────▄───────────█\n█───────────▄▀────────▀▄─────────█\n▀█─▄█───────▀▄─▀██──██───────────█\n─▀██────────────────────────────██\n──██────▄▀▀──────█─█──────▀▀▄──██─\n───█──────█▀▄────▀─▀────▄▀█────█──\n───█──────▀──▀▀▄▄▄▄▄▄▄▀▀──▀────█──\n───▀█─────────────────────────█▀──\n────▀█───────────────────────█▀───\n─────▀█─────────────────────█▀────\n──────▀█───────────────────█▀─────\n───────▀█─────────────────█▀──────\n────────▀█───▄───────▄───█▀───────\n─────────▀█▄──▀▄▄▄▄▄▀──▄█▀────────\n───────────▀▀█▄▄▄▄▄▄▄█▀▀──────────",
      gamepad: "─▄▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▄\n█░░░█░░░░░░░░░░▄▄░██░█\n█░▀▀█▀▀░▄▀░▄▀░░▀▀░▄▄░█\n█░░░▀░░░▄▄▄▄▄░░██░▀▀░█\n─▀▄▄▄▄▄▀─────▀▄▄▄▄▄▄▀",
      elon: "⠄⠄⠄⠄⠄⠄⠄⠄⣠⣤⣶⣶⣶⣶⣤⣤⣤⣀\n⠄⠄⠄⠄⠄⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣆\n⠄⠄⠄⢀⣤⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄\n⠄⠄⢀⣽⣿⣿⡿⠛⠉⠉⠉⠉⠉⠉⠉⠉⠛⠻⢿⣿⣿⣷⡀\n⠄⠄⣾⣿⣿⠏⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠘⣿⣿⣷\n⠄⠄⠁⠉⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢻⣿⣿⡇\n⠄⢠⣯⡠⠞⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢹⣿⡇\n⠄⢸⣿⠁⠄⠄⣠⡶⠛⠛⠷⣄⠄⠄⠄⠄⣠⣤⣤⠄⠄⠄⣿⡇\n⠄⠘⡏⠄⠄⠰⣿⡿⠿⠖⠶⢿⠇⠄⠄⣤⣤⣤⣀⠄⠄⠄⣿⡇\n⢸⢶⡇⠄⠄⠄⠄⠈⠄⠄⠄⠄⠄⠄⠄⠐⠤⠄⠉⠃⠄⠄⣿⠃\n⠘⣾⡇⠄⠄⠄⠄⠄⠄⠄⢀⣴⣇⠄⠄⠄⠄⠄⠄⠄⠄⠄⢿⡆\n⠄⠋⠁⠄⢀⣤⣄⠄⠄⠄⠸⣿⣿⡷⠶⠄⠄⠄⠄⠄⠄⠰\n⠄⠄⠄⠄⢸⡿⠟⠄⠄⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄\n⠄⠄⠄⠄⣸⣷⡀⠄⠸⣿⣿⠿⠟⠛⠻⠦⠄⠄⠄⠄⠄\n⢀⣀⠄⣼⣿⣿⣿⣦⠄⠈⠻⠿⠶⠖⠄⠄⠄⠄⠄⠄⠄\n⣿⣿⡄⢹⣿⣿⣿⣿⣦⡀⠄⠄⠄⠄⠄⠄⠄⠄⢀⠔\n⣿⣿⣿⡜⣿⣿⣿⣿⣿⣿⣿⣶⣦⣤⣤⣴⣶⠟⠉\n⣿⣿⣿⣿⡌⢿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁\n⣿⣿⣿⣿⣿⣆⠙⣿⣿⣿⣿⣿⣿⠟⠄⠄⢀⣶⡀\n⣿⣿⣿⣿⣿⣿⣧⣈⢛⠋⠙⣿⣿⠄⠄⠄⣼⣿⣿⣄\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣆⠄⠄⠄⠄⠄⢸⣿⣿⣿⣆\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠄⠄⠄⠄⠄⠻⠛⠻⠿",
      iphone: "─────────▄────\n───────▐█▌────\n───▄▄▄─▀─▄▄▄──\n─▄█████▄█████▄\n▐███████████▀─\n▐██████████───\n─███████████▄─\n──███████████▀\n───▀██▀─▀██▀──\n──────────────\n▀▐▀█▐────▄──▄▄\n█▐▀▀▐█▐█▌▐█▌▌█\n█▐──▐▐▐▄▌▐▐▌█▄",
      android: "┈┈┈╲┈┈┈┈╱\n┈┈┈╱▔▔▔▔╲\n┈┈┃┈▇┈┈▇┈┃\n╭╮┣━━━━━━┫╭╮\n┃┃┃┈┈┈┈┈┈┃┃┃\n╰╯┃┈┈┈┈┈┈┃╰╯\n┈┈╰┓┏━━┓┏╯\n┈┈┈╰╯┈┈╰╯",
      welcome: "█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█\n█░░╦─╦╔╗╦─╔╗╔╗╔╦╗╔╗░░█\n█░░║║║╠─║─║─║║║║║╠─░░█\n█░░╚╩╝╚╝╚╝╚╝╚╝╩─╩╚╝░░█\n█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█",
      cat: "───▄▄─▄████▄▐▄▄▄▌\n──▐──████▀███▄█▄▌\n▐─▌──█▀▌──▐▀▌▀█▀\n─▀───▌─▌──▐─▌\n─────█─█──▐▌█",
      death: "▒▒▒▒▒▒▒▒▒▒▒▄▄▄▄░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▄██████▒▒▒▒▒▄▄▄█▄▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▄██▀░░▀██▄▒▒▒▒████████▄▒▒▒▒▒▒\n▒▒▒▒▒▒███░░░░░░██▒▒▒▒▒▒█▀▀▀▀▀██▄▄▒▒▒\n▒▒▒▒▒▄██▌░░░░░░░██▒▒▒▒▐▌▒▒▒▒▒▒▒▒▀█▄▒\n▒▒▒▒▒███░░▐█░█▌░██▒▒▒▒█▌▒▒▒▒▒▒▒▒▒▒▀▌\n▒▒▒▒████░▐█▌░▐█▌██▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▐████░▐░░░░░▌██▒▒▒█▌▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒████░░░▄█░░░██▒▒▐█▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒████░░░██░░██▌▒▒█▌▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒████▌░▐█░░███▒▒▒█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▐████░░▌░███▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒████░░░███▒▒▒▒█▌▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒██████▌░████▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▐████████████▒▒███▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒█████████████▄████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n██████████████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n██████████████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n█████████████████▀▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n█████████████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n████████████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n████████████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒",
      ghost: "▒▒▒▒▒▒▒▒▄▄▄▄▄▄▄▄▒▒▒▒▒▒\n▒▒█▒▒▒▄██████████▄▒▒▒▒\n▒█▐▒▒▒████████████▒▒▒▒\n▒▌▐▒▒██▄▀██████▀▄██▒▒▒\n▐┼▐▒▒██▄▄▄▄██▄▄▄▄██▒▒▒\n▐┼▐▒▒██████████████▒▒▒\n▐▄▐████─▀▐▐▀█─█─▌▐██▄▒\n▒▒█████──────────▐███▌\n▒▒█▀▀██▄█─▄───▐─▄███▀▒\n▒▒█▒▒███████▄██████▒▒▒\n▒▒▒▒▒██████████████▒▒▒\n▒▒▒▒▒█████████▐▌██▌▒▒▒\n▒▒▒▒▒▐▀▐▒▌▀█▀▒▐▒█▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▐▒▒▒▒▌▒▒▒▒▒",
      skull: "███████████████████████████\n███████▀▀▀░░░░░░░▀▀▀███████\n████▀░░░░░░░░░░░░░░░░░▀████\n███│░░░░░░░░░░░░░░░░░░░│███\n██▌│░░░░░░░░░░░░░░░░░░░│▐██\n██░└┐░░░░░░░░░░░░░░░░░┌┘░██\n██░░└┐░░░░░░░░░░░░░░░┌┘░░██\n██░░┌┘▄▄▄▄▄░░░░░▄▄▄▄▄└┐░░██\n██▌░│██████▌░░░▐██████│░▐██\n███░│▐███▀▀░░▄░░▀▀███▌│░███\n██▀─┘░░░░░░░▐█▌░░░░░░░└─▀██\n██▄░░░▄▄▄▓░░▀█▀░░▓▄▄▄░░░▄██\n████▄─┘██▌░░░░░░░▐██└─▄████\n█████░░▐█─┬┬┬┬┬┬┬─█▌░░█████\n████▌░░░▀┬┼┼┼┼┼┼┼┬▀░░░▐████\n█████▄░░░└┴┴┴┴┴┴┴┘░░░▄█████\n███████▄░░░░░░░░░░░▄███████\n██████████▄▄▄▄▄▄▄██████████\n███████████████████████████",
      meme: "┐└┐└┐└┐└┐└┐└┐└┐└┐└┐┐▌▌┐└┐└┐└┐└┐└┐└┐└┐└┐└\n└┐└┐└┐└┐└┐└┐└┐└▌██████████▌┐└┐└┐└┐└┐└┐└┐\n┐└┐└┐└┐└┐└┐└┐█████▌┐┐┐┐▌████▌└┐└┐└┐└┐└┐└\n└┐└┐└┐└┐└┐└┐███┐└┐└┐└┐└┐└▌▌███▌┐└┐└┐└┐└┐\n┐└┐└┐└┐└┐└┐██┐┐└┐└┐└┐└▌████▌▌███┐└┐└┐└┐└\n└┐└┐└┐└┐████└┐└┐└┐└┐└█▌┐└▌██▌████┐└┐└┐└┐\n┐└┐└┐└┐████└┐└┐└┐└┐└┐▌███▌┐▌█▌████┐└┐└┐└\n└┐└┐└┐█████▌└┐└┐└┐┐┐└┐██▌██┐▌█▌███▌┐└┐└┐\n┐└┐└┐███████┐└┐└┐└┐└┐└┐▌████▌██████┐┐└┐└\n└┐└┐█████▌█┐└┐└┐└┐┐┐┐▌▌┐└██▌██████▌█└┐└┐\n┐└┐▌███▌┐▌┐└┐█┐└┐└┐▌▌▌███▌██████████▌└┐└\n└┐└██▌▌┐█┐▌█▌██┐└█└┐██▌████████████▌▌┐└┐\n┐└▌██┐┐█┐▌█▌███▌┐▌█┐┐██▌████████████▌┐┐└\n└┐██▌┐▌▌└████▌██▌▌██▌┐██████████████▌▌└┐\n┐┐██┐└█└█████└████▌███┐███████████████┐└\n└███┐▌▌▌█████┐└████████▌▌█████████████▌┐\n┐███┐███████▌└┐▌███████████████████████└\n▌██▌┐███████└┐└┐▌██████████████████████┐\n███▌████████┐└┐┐┐▌█████████████████████┐\n███▌███████┐└┐▌▌└┐▌████████████████████▌\n███▌███████└┐▌▌└┐└┐▌████▌██████████████▌\n██████████┐┐▌┐└┐└┐└┐▌█▌▌└┐└┐└▌██████████\n█████████┐┐└┐└▌└┐└┐└┐└┐└┐└┐└┐└┐▌████████\n████████▌┐└▌██████▌┐└┐└┐└┐└┐└┐└┐▌███████\n████████┐└┐██████▌██┐└┐└┐└┐▌███┐┐███████\n████████▌▌███┐███┐└█▌┐└┐└┐██└███└┐██████\n███████▌┐┐████▌▌██▌└█└┐└┐▌██▌█▌└┐└██████\n███████┐└┐└┐└┐└┐└┐███┐└┐└███▌┐└┐└┐┐█████\n███████└┐└┐└┐└┐└┐└┐▌┐└┐└┐█┐└┐└┐└┐└┐▌████\n███████┐└┐└┐└┐└┐└┐└┐└┐└┐└▌└┐└┐└┐└┐└┐▌███\n███████└▌┐┐└┐└┐└┐└┐└┐└┐└┐█┐└┐└┐└┐└┐└┐███\n███████┐██└┐└┐└┐└┐┐┐└┐└┐└█▌┐└┐└┐└┐└┐└███\n███████└██▌└┐└┐└┐└┐└┐└┐└┐┐█└┐└┐└┐┐┐└┐███\n███████┐█▌█┐└┐└┐└┐└┐└┐└┐└┐█▌└┐└┐┐█▌┐└███\n███████└█└██┐└┐└┐└▌▌┐└┐└┐└█▌┐└┐└▌█┐└▌███\n██████▌┐██└██┐└┐└┐██┐█▌┐└┐█┐└┐└┐██└┐████\n███████└▌█┐└██▌└┐└▌▌┐▌┐└┐██└┐└┐└█▌┐└███▌\n███████┐└██▌┐███▌┐└┐└┐└┐└█▌┐└┐└██▌└┐███▌\n███████└┐████└▌████┐┐└┐└┐└┐└┐┐█▌█▌┐┐███▌\n███████┐└▌████└┐└███████┐┐┐▌███┐█┐└▌███┐\n███████└┐└█████└┐└┐└┐└▌████▌┐└┐└█┐┐▌███└\n███████┐└┐▌██████▌└┐└┐└┐└▌└┐└┐└┐█┐└████┐\n███████└┐└┐████████└┐└▌└┐└┐└┐▌▌██└┐████└\n███████┐└┐└██▌██████████▌████████┐└████┐\n▌██████▌┐└┐└█└┐└█████████████████└┐████└\n▌███████└┐└┐┐█└┐┐█▌██████████████┐└████┐\n▌███████┐└┐└┐██└┐└┐└┐██████████▌█└┐████└\n└███████▌┐└┐└┐██▌┐└┐└┐└┐└▌└┐█▌└┐█┐└████┐\n┐▌█████▌▌└┐└┐└┐▌██┐└┐└┐└┐└┐└┐└┐┐█└┐████└\n└▌██████└█└┐└┐└┐└███▌┐└┐└┐└┐└┐┐█▌┐└████┐\n┐▌██████┐█▌└┐└┐┐▌└┐█████▌▌▌████▌┐▌┐████└\n└┐██████└┐█┐└┐└┐██└┐└┐▌██████▌└┐┐▌└████┐\n┐└██████▌└▌█┐└┐└┐██▌┐└┐└┐└┐└┐└┐└█└┐████└\n└┐██████▌┐└██┐└┐┐┐┐██▌└┐└┐└┐└┐└██┐▌████┐\n┐└▌██████└┐└██┐└┐└┐└▌████▌┐┐┐███┐└▌████└\n└┐└██████┐└┐└██┐└┐└┐└┐┐▌██████▌┐└┐█████┐\n┐└┐██████└┐└┐└██▌└┐└┐└┐└┐└┐└┐└┐└┐└███▌█└\n└┐└██████▌└┐└┐└▌██└┐└┐└┐└┐└┐└┐└┐└████▌█┐\n┐└┐██▌█▌█▌┐└┐└┐└┐██┐┐└┐└┐└┐└┐└┐└┐█┐██└█└\n└┐└██▌█▌██└┐└┐└┐└┐▌██▌└┐└┐└┐└┐└┐┐█└██┐█┐\n┐└┐██▌█▌██┐└┐└┐└┐└┐└███▌┐└┐└┐└┐└█▌┐▌█└▌┐\n└┐└▌██▌┐██└┐└┐└┐└┐└┐└┐▌██▌▌┐└┐┐██┐└┐▌┐▌┐\n┐└┐▌█▌▌└██┐└┐└┐└┐└┐└┐└┐└┐██████▌┐└┐┐▌└┐┐\n└┐└┐█▌▌┐██▌┐└┐└┐└┐└┐└┐└┐└┐└▌▌▌└┐└┐└┐┐┐└┐\n┐└┐└█▌┐└▌█▌└┐└┐└┐└┐└┐└┐└┐└┐└┐└┐└┐└┐└┐└?",
      meme2: "░░░░░░░░░░░░░░░░░░░▒▓▓█████████████▓▓▒░░░░░░░░░░░░░░░░░░░░░░\n░░░░░░░░░░░░░░▒████▓▓▒▒░▒▒▒░▒▒▒▒▒▒▓▓████▓▒░░░░░░░░░░░░░░░░░░\n░░░░░░░░░░░▒███▓░░░░░░░░░░░░░░░░░░░░░░▒███████▓▓▒░░░░░░░░░░░\n░░░░░░░░░▒██▓░░░░▒▒███▓▓▒░░░░░░░░░░░░░▓▓▒▒▒▒▒▓██████▓░░░░░░░\n░░░░░░░▒██▓░░░▓███▓▒░░░░░░░░▒▒▒▒▒▒▒▒▒▒░░░░░░▒▓▓███▓████▒▒░░░\n░░░░░░██▓░░▒▓██▓░░▒▓██████▓░░░░░░░▒░░░░░░▒██▓▒░░░▓███▒▓▒░░░░\n░░░░░██░░▓███▒░░▒██▒░░░░▒▒██▓░░░░░░░░░░░██▒░░░░▒████▒█░░░░░░\n░░░░██░▒▓▒▓▓░░░██░░░░░░░░░░░█▓░░░░░░░░░██░░░░░░▒███░░█▒░░░░░\n░░░▓█░░░░░░░░░██░░░░░░░░░░░░▓█░░░░░░░░██░░░░░░░░░░░░░█▒░░░░░\n░░░█▓░░░░░░░░░█▒░░████░░░░░░░█▒░░░░░░░██░░░░░░░░░░░░███░░░░░\n░░▒█░░░░░░░▒▓▒█▓░▓████▓░░░░░▒█░░░░░░░░▒█▒░░░░░░░░░░██░█▒░░░░\n░░██░░░░░▒▓▒▓▒██▒▒▓▓▓░░░░░░░██░░░░░░░░░▒████▓███████▓░█▒░░░░\n░░█▓░░░░░▒░░░▒░▒██▓▒░░░░░▒██▓░░░░░░░░░░░░░░██▓░░░░░░▒██▓░░░░\n░░█░░░░░░░░░▓▒░░░░▒▓██████▓░░░░░░░░░░░░░░▒██░░░▓█▓▓▒░░░██░░░\n░▒█░░░░░░░░░░░░░░░░░░░░░░░░░░▓▒▓▒▒▒▒▒▓▓▓▓██░░▓█▓░▒▒██▒░░██░░\n░▓█░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▓▓▒░░██░░██▓░▒░▒░██░░▒█░░\n░██░░░░░░░░░░░░░░░░░░░░░░░▒▓▒▒▒▒▒▒▒▒░░░██░░▓█░█▓░█▒█▓█▓░░█░░\n░██░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒░▒▒░░▓█▓░░██░█▒▒█▒█▒▓█░░█░░\n░██░░░░░░░░░░░░░░░░░░░░░░░░▒░░░░░░░░░░▓█░░░█▒░░░░▒▒░░▒█░▓█░░\n░▒█░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒░░█▒░░█▒░░░░░░░░▓█░█▓░░\n░░█▓░▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓█░░█▒░░░░░░░░█░▒█░░░\n░░▓█░░▒░░▒▒░░▒░░░░░░░░░░░░░░░░░░░░░░░░░░█░░█▒░░░░░░░█▓░█▓░░░\n░░░█▒░░▒░░▒░░▒▒░░░░░░░░░░░░░░░░░░░░░░░░░█░░█▒░░░░░░▓█░░█░░░░\n░░░██░░░▒░▒░░░▒▒░░░░░░░░░░░░░░░░░░░░░░░░█░░█▒░░░░░░██░░█░░░░\n░░░░█▓░░░▒░▒░░░░▒▒░░░░░▒▒▒▒▒▒░░░░░░░░░░▒█░▒█░░░░░░░█▒░░█▓░░░\n░░░░▓█░░░░▒▒░░░░░▒▒░░░░░░▒▒▒▓▓▓▒░░░░░░░██░██░░░░░░░██░░▓█░░░\n░░░░░██░░░▒░▒░░░░░▒░░░░░░░░▒░▒▒▓█▒░░░░▒█░░█▓▒▓▓▓▒░░▓█░░░█▒░░\n░░░░░▒█▒░░░▒▒▒░░░░▒░░░░░░░░░░▒▒▒░▒▓░░░██░▒█░░░░▒▓▓░░██░░█▒░░\n░░░░░░▒█▒░░░▒░▒░░░▒░░░░░░▒▒▒░░░░▒▒░░░▒█░░██░░░░░░░█░▒█░░█▒░░\n░░░░░░░▓█░░░▒░▒░░░░▒▒░░░░▓▒▒▓▓▓▒░░▓▒░██░░██▒▒▒▒▓▒▓▓███░░█▒░░\n░░░░░░░░██░░░▒░▒░░░░░▒▒░░░░░░░░▓█▓░░░█▓░░██░▓█░█░█░░█▒░░█▒░░\n░░░░░░░░░██░░░░▒▒░░░░░░▒▒░░░░░░░░▒█▓░█▓░░▓█▒▒█▒█░█▒██░░▒█░░░\n░░░░░░░░░░██▒░░░░▒░░░▒░░░▒▒░░░░░░░░▒▓██░░░██░░░░▒▒██░░░██░░░\n░░░░░░░░░░░▓██░░░░░░░░▒▒░░░▒░░░░░░░░░▓█░░░░▓███▓▓██░░░██░░░░\n░░░░░░░░░░░░░▓██▒░░░░░░▒▒▒▒▒░░░░░░░░░░██░░░░░░▒▒▒░░░░██░░░░░\n░░░░░░░░░░░░░░░▓███▒░░░░░░░▒▒▒▒▒▒▒▒░░░░▓██▒░░░░░░░▒███░░░░░░\n░░░░░░░░░░░░░░░░░▒▓███▓▒░░░░░░░▒░░▒▒▒▒░░░▒██▓██████▓░░░░░░░░\n░░░░░░░░░░░░░░░░░░░░░▒████▓▒▒░░░░░░░░░░░░░░░▓██▒░░░░░░░░░░░░\n░░░░░░░░░░░░░░░░░░░░░░░░░▒▓████▓░░░░░░░▓█████▒░░░░░░░░░░░░░░\n░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒█████████▒░░░░░░░░░░░░░░░░░░░\n░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒░░░░░░░░░░░░░░░░░░░░░░░",
      meme3: "──────────────────────────────────\n────────────██████████────────────\n────────███████████████████───────\n──────███████████████████████─────\n────██████████████████████████────\n───█████████████▀──────────▀███───\n──█████████████──────────────███──\n─████████████────────────────████─\n─██████████───────────────────███─\n██████████▀───────────────────████\n████████▀─────────────────────████\n██████▀────────────────────────███\n█████──▄▀▀▀▀▀▀▀▄────▄▀▀▀▀▀▀▀▄──███\n█████────▄▄▄▄▄────────▄▄▄▄▄────███\n█████──▄▀───▄██▄────▄▀───▄██▄──███\n█████──▀▄───▀▀█▀────▀▄───▀▀█▀──███\n█▀──█────▀▀▀▀▀────────▀▀▀▀▀────███\n█───█──────────────────────────█─█\n█────────────────────▄───────────█\n█───────────▄▀────────▀▄─────────█\n▀█─▄█───────▀▄─▀██──██───────────█\n─▀██────────────────────────────██\n──██────▄▀▀──────█─█──────▀▀▄──██─\n───█──────█▀▄────▀─▀────▄▀█────█──\n───█──────▀──▀▀▄▄▄▄▄▄▄▀▀──▀────█──\n───▀█─────────────────────────█▀──\n────▀█───────────────────────█▀───\n─────▀█─────────────────────█▀────\n──────▀█───────────────────█▀─────\n───────▀█─────────────────█▀──────\n────────▀█───▄───────▄───█▀───────\n─────────▀█▄──▀▄▄▄▄▄▀──▄█▀────────\n───────────▀▀█▄▄▄▄▄▄▄█▀▀──────────\n────────────────███───────────────\n──────────────███████─────────────\n─────────────██─███─██────────────\n────────────██──███──██───────────\n───────────██───███───██──────────\n──────────██────███────██─────────",
      pacman: "──▒▒▒▒▒▒───▄████▄\n─▒─▄▒─▄▒──███▄█▀\n─▒▒▒▒▒▒▒─▐████──█─█\n─▒▒▒▒▒▒▒──█████▄\n─▒─▒─▒─▒───▀████▀",
      devil: "───────▄█──────────█─────────█▄───────\n─────▐██──────▄█──███──█▄─────██▌─────\n────▐██▀─────█████████████────▀██▌────\n───▐██▌─────██████████████─────▐██▌───\n───████────████████████████────████───\n──▐█████──██████████████████──█████▌──\n───████████████████████████████████───\n────███████▀▀████████████▀▀███████────\n─────█████▌──▄▄─▀████▀─▄▄──▐█████─────\n───▄▄██████▄─▀▀──████──▀▀─▄██████▄▄───\n──██████████████████████████████████──\n─████████████████████████████████████─\n▐██████──███████▀▄██▄▀███████──██████▌\n▐█████────██████████████████────█████▌\n▐█████─────██████▀──▀██████─────█████▌\n─█████▄─────███────────███─────▄█████─\n──██████─────█──────────█─────██████──\n────█████────────────────────█████────\n─────█████──────────────────█████─────\n──────█████────────────────█████──────\n───────████───▄────────▄───████───────\n────────████─██────────██─████────────\n────────████████─▄██▄─████████────────\n───────████████████████████████───────\n───────████████████████████████───────\n────────▀█████████▀▀█████████▀────────\n──────────▀███▀────────▀███▀──────────",
      spider: "──▐─▌──▐─▌──\n─▐▌─▐▌▐▌─▐▌─\n─█▄▀▄██▄▀▄█─\n──▄──██▌─▄──\n▄▀─█▀██▀█─▀▄\n▐▌▐▌─▐▌─▐▌▐▌\n─▐─█────█─▌─\n────▌──▐────",
      dog: "┈╭━━━━━━━━━━━╮┈ \n╭╯┈╭━━╮┈╭━━╮┈╰╮ \n┃┈┃┃╭╮┃┈┃╭╮┃┃┈┃ \n┃┈┃┻┻┻┛┈┗┻┻┻┃┈┃ \n┃┈┃╭╮┈◢▇◣┈╭╮┃┈┃ \n╰┳╯┃╰━━┳┳┳╯┃╰┳╯ \n┈┃┈╰━━━┫┃┣━╯┈┃┈ \n┈┃┈┈┈┈┈╰━╯┈┈┈┃┈",
      guitar: "───────────████\n──────────▓▓──▓▓\n──────█▓■▓▓■▓▓■▓▓■▓█\n─────────▓▓█▓▓█▓▓\n──────█▓■▓▓■▓▓■▓▓■▓█\n─────────▓▓█▓▓█▓▓\n──────█▓■▓▓■▓▓■▓▓■▓█\n─────────▓▓█▓▓█▓▓\n──────█▓■▓▓■▓▓■▓▓■▓█\n─────────▓▓▣▣▣▣▓▓\n──────────██████\n──────────║║║║║║\n──────────║▓▓▓▓║\n──────────║║║║║║\n──────────║▓▓▓▓║\n──────────║║║║║║\n──────────║▓▓▓▓║\n──────────║║║║║║\n──────────║▓▓▓▓║\n──────────║║║║║║\n──────────║▓▓▓▓║\n──────────║║║║║║\n──────────║▓▓▓▓║\n──────────║║║║║║\n──────────║▓▓▓▓║\n──────────║║║║║║\n──────────║▓▓▓▓║\n──────────║║║║║║\n──────────║▓▓▓▓║\n──────────║║║║║║\n──────────║▓▓▓▓║────────█\n──────────║║║║║║───────▓█\n──────────║▓▓▓▓║──────▓▓█\n─▓▓───────║║║║║║──────▓▓█\n─▓▓▓──────║▓▓▓▓║─────▓◇▓█\n─▓▓▓▓─────║║║║║║────▓▓◇▓█\n─▓▓▓▓▓────║▓▓▓▓║──▓▓▓▓◈▓█\n──▓▓▓▓▓───║║║║║║─▓▓▓▓▓◈▓█\n───▓▓▓▓▓▓─║▓▓▓▓║─▓▓▓▓◇▓█\n────▓▓▓▓▓█║║║║║║█▓▓▓◇▓█\n─────▓▓▓▓█║▓▓▓▓║█▓▓▓▓█\n────▓▓▓▓▓█║║║║║║█▓▓▓▓▓█\n───▓▓▓▓▓▓█║▓▓▓▓║█▓▓▓▓▓▓█\n──▓▓▓▓▓▓▓█║║║║║║█▓▓▓▓▓▓▓█\n─▓▓■▓▓▓▓▓█■▒▒▒▒■█▓▓▓▓▓█▓▓█\n─▓■▓▓▓▓▓▓███▓▓███▓▓▓▓▓▓▓▓█\n─▓■▓▓▓▓▓●▓───────▓▓▓▓▓▓▓▓█\n─▓▓■▓▓▓●▓─────────▓▓▓▓▓▓▓█\n─▓▓▓▓▓●▓───────────▓▓▓▓▓▓█\n─▓▓▓▓●▓─────────────▓▓▓▓▓█\n─▓▓▓●▓───────────────▓▓▓▓█\n─▓▓●▓─────────────────▓▓▓█\n─▓▓▓───────────────────▓▓█\n─▓▓▓───────────────────▓▓█",
};

function generateText(text, font) {
    const selectedFont = fonts[font];

    if (!selectedFont) {
        return `The font '${font}' was not found. Use '/Fontgen list' to see available fonts.`;
    }

    const formattedText = text
        .split("")
        .map(char => selectedFont[char] || char)
        .join("");

    return formattedText;
}

module.exports.config = {
    name: "Artify",
    version: "1.0.0",
    usePrefix: true,
    hasPermission: 0,
    credits: "Islamick Chat",
    description: "ART YOUR TEXT",
    commandCategory: "ART",
    usage: "/Artify [fontname | textartname] [text]",
    cooldowns: 5
};

module.exports.run = async ({ event, api, args }) => {
    const command = args[0]?.toLowerCase();

    if (!command) {
        let message = "𝗟𝗜𝗦𝗧 𝗢𝗙 𝗔𝗩𝗔𝗜𝗟𝗔𝗕𝗟𝗘 𝗔𝗦𝗖𝗜𝗜 𝗔𝗥𝗧𝗦:\n\n";
        for (const name in textArts) {
            message += `   ⦿ ${name}\n`;
        }
        message += "\n𝗟𝗜𝗦𝗧 𝗢𝗙 𝗔𝗩𝗔𝗜𝗟𝗔𝗕𝗟𝗘 𝗙𝗢𝗡𝗧𝗦:\n\n";
        for (const name in fonts) {
            message += `   ⦿ ${name}\n`;
        }
        message += "\n𝗨𝗦𝗔𝗚𝗘:\n\n   ⦿ /Artify [ASCII art name]\n    Example: /Artify luffy\n\n   ⦿ /Artify [font name] [text]\n    Example: /Artify mathsans\n    Artificial Intelligence";
        for (const name in fonts) {
        }

        return api.sendMessage(message, event.threadID, event.messageID);
    }

    if (command === "list") {
        let message = "𝗟𝗜𝗦𝗧 𝗢𝗙 𝗔𝗩𝗔𝗜𝗟𝗔𝗕𝗟𝗘 𝗔𝗥𝗧𝗦:\n\n";
        for (const name in textArts) {
            message += `   ⦿ ${name}\n`;
        }
        message += "\n𝗟𝗜𝗦𝗧 𝗢𝗙 𝗔𝗩𝗔𝗜𝗟𝗔𝗕𝗟𝗘 𝗙𝗢𝗡𝗧𝗦:\n\n";
        for (const name in fonts) {
            message += `   ⦿ ${name}\n`;
        }

        return api.sendMessage(message, event.threadID, event.messageID);
    }

    const fontOrArt = command;
    const text = args.slice(1).join(" ");

    if (fonts[fontOrArt]) {
        const generatedText = generateText(text, fontOrArt);
        const formattedMsg = `${generatedText}`;
        return api.sendMessage(formattedMsg, event.threadID, event.messageID);
    }

    if (textArts[fontOrArt]) {
        const selectedArt = textArts[fontOrArt];
        const artMessage = `Here's the "${fontOrArt}" ASCII art:\n\n${selectedArt}\n\nYou can copy the ${fontOrArt} art and paste it into [https://pastebin.com/] to see it more clearly.`;
        const pastebinLink = `https://pastebin.com/`;

        if (selectedArt.length > 100000) {
            return api.sendMessage(`The "${fontOrArt}" text art or ASCII art is too long. You can paste it to ${pastebinLink} to see it more clearly.`, event.threadID);
        }

        return api.sendMessage(artMessage, event.threadID);
    }

    return "Invalid command. Use /Artify list' to see available fonts and text arts.";
};