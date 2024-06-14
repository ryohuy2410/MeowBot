require('dotenv').config()

module.exports = {
   TOKEN: process.env.token,

   presence: {
      status: process.env.status || 'idle',
      activities: [
         {
            name: process.env.name || 'Meow Meow',
            state: process.env.state || 'From Pooba Saga With 💖',
            type: parseInt(process.env.type) || 0, // 0_Play, 1_Stream, 2_Listen, 3_Watch 4_Custom 5_Compete
            url: process.env.url || 'https://www.youtube.com/watch?v=Rl8uYgzQiJ8',
         },
         {
            name: 'Ryo.o 🌸',
            state: 'From Pooba Saga With 💖',
            type: 0,
            url: 'https://www.youtube.com/watch?v=Rl8uYgzQiJ8',
         },
      ],
   },

   player: {
      embedColor: process.env.color || 'ff4400',
      gif: process.env.gif || 'https://cdn.discordapp.com/attachments/1236634193019277322/1248996386532233248/mikogif.gif?ex=6665b207&is=66646087&hm=e3373b433b6a9ca9b814592f175c4ebfd82c6e10d63348289675a8cba6d04c2c&',

      maxVol: 200,
   },

   voice: {
      leaveOnStop: Boolean(process.env.leave) || false,
      leaveOnFinish: Boolean(process.env.leave) || false,
      leaveOnEmpty: Boolean(process.env.leave) || false,
   },

   shardManager: {
      shardStatus: process.env.shard || true,
   },
}