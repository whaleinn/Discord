const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

const pictureGede = [
                         "https://media.discordapp.net/attachments/1060830136414519336/1214774061494698065/arnold_13.png?ex=65fa5581&is=65e7e081&hm=2edf4ee4fc83098b45a1fb85c29d096f05b919d62cb647547092156441236e7e&=&format=webp&quality=lossless", 
                         "https://media.discordapp.net/attachments/1060830136414519336/1214774062128304208/arnold_15.png?ex=65fa5581&is=65e7e081&hm=3f72eac1f4d958f65f36391a4c172837f603938771dfa421bc95ede5e26c0996&=&format=webp&quality=lossless", 
                         "https://media.discordapp.net/attachments/1060830136414519336/1214774062405001236/arnold_16.png?ex=65fa5581&is=65e7e081&hm=84f0d537f707b85c9373d916fcefb9799be623ce94eed1c8598e3ba4c6001f1b&=&format=webp&quality=lossless", 
                         "https://media.discordapp.net/attachments/1060830136414519336/1214774062677622825/arnold_17.png?ex=65fa5581&is=65e7e081&hm=6c45ec9ac4f010e501fa99ed748d64d3a3dfa5c1be42bb0ff80d872f6ce7c2db&=&format=webp&quality=lossless", 
                         "https://media.discordapp.net/attachments/1060830136414519336/1214774062929420318/arnold_20.png?ex=65fa5582&is=65e7e082&hm=27d1bfd8299ee6cadb5f00695f2fbabd325d9f4fca511c157276bd95eece133f&=&format=webp&quality=lossless", 
                         "https://media.discordapp.net/attachments/1060830136414519336/1214774063252115566/arnold_22.png?ex=65fa5582&is=65e7e082&hm=ce1d1570be65c714f369b040c63c8721830f442eedb26a2a89cd676a81caab35&=&format=webp&quality=lossless", 
                         "https://media.discordapp.net/attachments/1060830136414519336/1214774063520555088/arnold_02.png?ex=65fa5582&is=65e7e082&hm=f0668f00014e9d0f1714935c975aa63749f901cf5d68f085027598c8877df8a3&=&format=webp&quality=lossless", 
                         "https://media.discordapp.net/attachments/1060830136414519336/1214774063818473482/arnold_05.png?ex=65fa5582&is=65e7e082&hm=8f33313f0fdcd2f58ea46d19ba28767713fd49ab00963abc921a63591a96a8c2&=&format=webp&quality=lossless", 
                         "https://media.discordapp.net/attachments/1060830136414519336/1214774064204218378/arnold_06.png?ex=65fa5582&is=65e7e082&hm=ede7e2950174d7700ac3706a8769d0850f480efe5321ec40a9d2e6f979612ae4&=&format=webp&quality=lossless", 
                         "https://media.discordapp.net/attachments/1060830136414519336/1214774064581845012/arnold_12.png?ex=65fa5582&is=65e7e082&hm=047d8238f245151d5e06caf5341ff3aa6505e9ae7f3c799c936a06cff70958cb&=&format=webp&quality=lossless"
  ];

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

  rdpictureGede = getRandomElement(pictureGede);

  const r = new Discord.RichPresence()
    .setApplicationId('1214777732840423525')
    .setType('')
    .setURL('') //Must be a youtube video link 
    .setState('している')
    .setName('This User Loves Cats and Chapabana')
    .setDetails(`Meow 👋⚓ [${formatTime()}]`)
    .setStartTimestamp(Date.now())
     .setAssetsLargeImage(`${rdpictureGede}`)

    .setAssetsSmallImage('https://cdn.discordapp.com/emojis/731154864360390726.gif?size=96&quality=lossless') //You can put links in tenor or discord and etc.


  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `Meow 👋⚓ [${newTime}]`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000);
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
