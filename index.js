const { Client, RichPresence } = require('discord.js-selfbot-v13');
const express = require('express');
const app = express();
const bot = new Client({ checkUpdate: false });


const textmain = "";
const textthree = "";
const textfour = "";
const type = "dnd";
const pictureGede = [
    "https://media.discordapp.net/attachments/1060830136414519336/1214376189658013716/Anime-Cat-PNG-Photo.png?ex=65f8e2f5&is=65e66df5&hm=b78e62ee6e0a6650786816f377babef8a070541d762f8503e8575772787745f6&=&format=webp&quality=lossless&width=576&height=802",
    "https://media.discordapp.net/attachments/1060830136414519336/1214376190077575218/cat-clipart-awake-hooman-5.png?ex=65f8e2f5&is=65e66df5&hm=6aa92661c8a2568d5a8d1064d64035eae55ccd3c896aa9d7bb85df6edd32478d&=&format=webp&quality=lossless&width=576&height=547",
    "https://media.discordapp.net/attachments/1060830136414519336/1214376190463184996/cat-clipart-chibi-5.png?ex=65f8e2f5&is=65e66df5&hm=a4504eb77482a383775a4ffcf2755f87baef0319e1ea3987e9bde83023e7a583&=&format=webp&quality=lossless&width=576&height=576",
    "https://media.discordapp.net/attachments/1060830136414519336/1214376190790598706/174162131949f7c57cc0a9b12e593c24.png?ex=65f8e2f5&is=65e66df5&hm=863f97b932d763eb03db064463cd6c6645e90629897d182de97e4a11588fa43a&=&format=webp&quality=lossless",
    "https://media.discordapp.net/attachments/1060830136414519336/1214376231546519612/R.png?ex=65f8e2ff&is=65e66dff&hm=25a8010e40a256c3556629b53410a082581623b6405e01f96aea1d3cc37bef06&=&format=webp&quality=lossless",
    "https://media.discordapp.net/attachments/1060830136414519336/1214376282423562261/3633b67ad7af982fc7dfe49de9fcbf5f.jpg?ex=65f8e30b&is=65e66e0b&hm=8ce334a814e85ae579aa614e6c142980709a7144c67736e238bc1b22835bf393&=&format=webp" ,
    "https://media.discordapp.net/attachments/1060830136414519336/1214376281190309919/OIP_1.jpg?ex=65f8e30b&is=65e66e0b&hm=99269a54e7a75afbf54aea65f0fc7237541a9f66de4ac2797ff0746f188a3d2f&=&format=webp",
    "https://media.discordapp.net/attachments/1060830136414519336/1214376281483771975/OIP.jpg?ex=65f8e30b&is=65e66e0b&hm=08417803db3027287269713ab6fba8d7ef3cfce7c87895cfba46a3927a68b8c5&=&format=webp",
    "https://media.discordapp.net/attachments/1060830136414519336/1214376281844752464/71ae45506a72ec38f758109dea7510fd.jpg?ex=65f8e30b&is=65e66e0b&hm=17e9efff901cb4a97e8d21f4c9db8328a07b0274a918cae7d48b08ed3d865142&=&format=webp&width=576&height=814",
    "https://media.discordapp.net/attachments/1060830136414519336/1214377396279582810/427023305_806445054639205_6339822658293874881_n.jpg?ex=65f8e415&is=65e66f15&hm=5322713c9dd57a12c0354a8ff307ff27cc6056711eedd64083d6fe1df6fd3893&=&format=webp&width=570&height=603",
];
const smallpictureGede = [
    "https://cdn.discordapp.com/emojis/731154864360390726.gif?size=96&quality=lossless"
];
const nameButtonone = "";
let linkButtonone = "";

const xxxx = ['The 999th member in Cat Society'];

const randomtext3 = [
    'This User Loves Cats and Chapabana',
];

const randomtext4 = [
    'Meow Meow',
];

const randomtext5 = [];

const randomLinks = [
    "https://www.twitch.tv/mystiqu3x",
];


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getTimestampsForDay(year, month, day) {
    const date = new Date(Date.UTC(year, month, day));
    date.setHours(date.getHours() + 7);
    date.setUTCHours(0, 0, 0, 0);
    const timestampMidnight = date.getTime();
    date.setUTCHours(23, 59, 59, 999);
    const timestampEndOfDay = date.getTime();

    return {
        timestampMidnight,
        timestampEndOfDay
    };
}

app.all('/', (req, res) => {
    res.send("NOW GO TO uptimerobot.com AND PASTE THIS URL");
});

app.listen(8080, () => {
    console.log("Server is ready!!");
});

bot.on('debug', (a) => {
    if (a.startsWith("Hit a 429")) process.kill(1);
});

bot.on('ready', async () => {
    setInterval(() => {
        const date = new Date();
        const datee = date.getDate();
        const hours = (date.getHours() + 7) % 24;
        const minutes = date.getMinutes();
        const months = date.getMonth();
        const year = date.getFullYear();
        const timestamps = getTimestampsForDay(year, months, datee);
        function addZero(number) {
            return number < 10 ? "0" + number : number;
        }

        function getRandomNumber() {
            return Math.random() * (30 - 20) + 20;
        }

        function getWRandomNumber() {
            return Math.random() * (5 - 3) + 3;
        }

        function roundToDecimal(number) {
            return Math.round(number * 10) / 10;
        }

        const randomNumber = getRandomNumber();
        const roundedNumber = roundToDecimal(randomNumber);
        const roundwNumber = roundToDecimal(getWRandomNumber());
        const month = addZero(months + 1);
        const dates = addZero(datee)
        const resultthree = "Badminton"

        randomXX = getRandomElement(xxxx);
        rdpictureGede = getRandomElement(pictureGede);
        rdsmallpictureGede = getRandomElement(smallpictureGede);
        linkButtonone = getRandomElement(randomLinks);
        const pr = new RichPresence()
            .setName(`MEMES`)
            .setURL('https://www.twitch.tv/mystiqu3x')
            .setType(`${type}`.toUpperCase())
            .setApplicationId("1214777732840423525")
            .setAssetsLargeImage(`${rdpictureGede}`)
            .setAssetsSmallImage(`${rdsmallpictureGede}`)
            .setAssetsLargeText(`
            🌡${roundedNumber} °C ⋆ 🍃 ${roundwNumber} m/s`)
            .setAssetsSmallText(`ping: ${bot.ws.ping}ms`)
            .setState(`: ${randomXX}`)
            .setDetails(`${randomtext3}`)
            .setStartTimestamp(timestamps.timestampMidnight)
            .setEndTimestamp(timestamps.timestampEndOfDay)
        bot.user.setActivity(pr.toJSON());
    }, getRandomInt(1000, 3000));
    console.log(`${bot.user.tag} Status is showed up !!`);
});

bot.login(process.env['TOKEN']);
