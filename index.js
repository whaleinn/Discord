const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'Asia/Manila', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1214777732840423525')
    .setType('PLAYING')
    .setURL('https://www.twitch.tv/mystiqu3x') //Must be a youtube video link 
    .setState('The 999th member in Cat Society')
    .setName('This User Loves Cats and Chapabana')
    .setDetails(`Meow Meow 👋⚓ [${formatTime()}]`)
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1060830136414519336/1214839391504048178/ezgif.com-animated-gif-maker.gif?ex=65fa9259&is=65e81d59&hm=992fc54a1c5f645dababc2f65edc848683ffb8012e9c49c5213c18f531d16c59&') //You can put links in tenor or discord and etc.

    .setAssetsSmallImage('https://cdn.discordapp.com/emojis/731154864360390726.gif?size=96&quality=lossless') //You can put links in tenor or discord and etc.

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `Meow Meow 👋⚓ [${newTime}]`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
