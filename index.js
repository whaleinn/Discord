const { Client, RichPresence } = require('discord.js-selfbot-v13');
const express = require('express');
const app = express();
const bot = new Client({ checkUpdate: false });


const textmain = "";
const textthree = "";
const textfour = "";
const type = "PLAYING";
const pictureGede = [
"https://media.discordapp.net/attachments/1060830136414519336/1214774061494698065/arnold_13.png?ex=65fa5581&is=65e7e081&hm=2edf4ee4fc83098b45a1fb85c29d096f05b919d62cb647547092156441236e7e&=&format=webp&quality=lossless",
"https://media.discordapp.net/attachments/1060830136414519336/1214774062128304208/arnold_15.png?ex=65fa5581&is=65e7e081&hm=3f72eac1f4d958f65f36391a4c172837f603938771dfa421bc95ede5e26c0996&=&format=webp&quality=lossless",
"https://media.discordapp.net/attachments/1060830136414519336/1214774062405001236/arnold_16.png?ex=65fa5581&is=65e7e081&hm=84f0d537f707b85c9373d916fcefb9799be623ce94eed1c8598e3ba4c6001f1b&=&format=webp&quality=lossless",
"https://media.discordapp.net/attachments/1060830136414519336/1214774062677622825/arnold_17.png?ex=65fa5581&is=65e7e081&hm=6c45ec9ac4f010e501fa99ed748d64d3a3dfa5c1be42bb0ff80d872f6ce7c2db&=&format=webp&quality=lossless",
"https://media.discordapp.net/attachments/1060830136414519336/1214774062929420318/arnold_20.png?ex=65fa5582&is=65e7e082&hm=27d1bfd8299ee6cadb5f00695f2fbabd325d9f4fca511c157276bd95eece133f&=&format=webp&quality=lossless",
"https://media.discordapp.net/attachments/1060830136414519336/1214774063252115566/arnold_22.png?ex=65fa5582&is=65e7e082&hm=ce1d1570be65c714f369b040c63c8721830f442eedb26a2a89cd676a81caab35&=&format=webp&quality=lossless" ,
"https://media.discordapp.net/attachments/1060830136414519336/1214774063520555088/arnold_02.png?ex=65fa5582&is=65e7e082&hm=f0668f00014e9d0f1714935c975aa63749f901cf5d68f085027598c8877df8a3&=&format=webp&quality=lossless",
"https://media.discordapp.net/attachments/1060830136414519336/1214774063818473482/arnold_05.png?ex=65fa5582&is=65e7e082&hm=8f33313f0fdcd2f58ea46d19ba28767713fd49ab00963abc921a63591a96a8c2&=&format=webp&quality=lossless",
"https://media.discordapp.net/attachments/1060830136414519336/1214774064204218378/arnold_06.png?ex=65fa5582&is=65e7e082&hm=ede7e2950174d7700ac3706a8769d0850f480efe5321ec40a9d2e6f979612ae4&=&format=webp&quality=lossless",
"https://media.discordapp.net/attachments/1060830136414519336/1214774064581845012/arnold_12.png?ex=65fa5582&is=65e7e082&hm=047d8238f245151d5e06caf5341ff3aa6505e9ae7f3c799c936a06cff70958cb&=&format=webp&quality=lossless",
                         ];
const smallpictureGede = [
  "https://cdn.discordapp.com/emojis/966116896405606420.gif?size=96&quality=lossless",
                    ];
const nameButtonone = "";
let linkButtonone = "";

const xxxx = ['The 999th member in Cat Society'];

const randomTexts = [
  '♥',
  '♥♥',
  '♥♥♥',
  '♥♥♥♥',
  '♥♥♥♥♥',
  '♥♥♥♥♥',
  '♥♥♥♥♥♥',
  '♥♥♥♥♥♥♥',
  '♥♥♥♥♥♥♥♥',
  '♥♥♥♥♥♥♥♥♥',
  '♥♥♥♥♥♥♥♥♥♥',
  '♥♥♥♥♥♥♥♥♥♥♥',
  '♥♥♥♥♥♥♥♥♥♥♥♥'


];

const randomtext3 = [
 '',

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
    const month = addZero(months+1);
    const dates = addZero(datee)
    const resultthree = "Badminton"


    // Randomize the link and text for the button
    randomXX = getRandomElement(xxxx);
    rdpictureGede = getRandomElement(pictureGede);
    rdsmallpictureGede = getRandomElement(smallpictureGede);
    const randomButtonText = getRandomElement(randomTexts);
    const randomButtonText3 = getRandomElement(randomtext3);
    const randomButtonText4 = getRandomElement(randomtext4);
    const randomButtonText5 = getRandomElement(randomtext5);
    linkButtonone = getRandomElement(randomLinks);
    const pr = new RichPresence()  
      .setName(`This User Loves Cats and Chapabana`)
      .setURL('https://www.twitch.tv/mystiqu3x')
      .setType(`${type}`.toUpperCase())
      .setApplicationId("1214777732840423525")
      .setAssetsLargeImage(`${rdpictureGede}`)
      .setAssetsSmallImage(`${rdsmallpictureGede}`)
      .setAssetsLargeText(`
🌡${roundedNumber} °C ⋆ 🍃 ${roundwNumber} m/s`)
      .setAssetsSmallText(`ping: ${bot.ws.ping}ms`)
      .setState(`: ${randomXX}`)
      .setDetails(`${randomButtonText3}`)
      .setStartTimestamp(timestamps.timestampMidnight)
      .setEndTimestamp(timestamps.timestampEndOfDay)
      .addButton(`${randomButtonText}`, `${linkButtonone}`)
      .addButton(`${randomButtonText4}`, `${linkButtonone}`)
    bot.user.setActivity(pr.toJSON());
  }, getRandomInt(1000, 3000));
  console.log(`${bot.user.tag} Status is showed up !!`);
});

bot.login(process.env['TOKEN']);
