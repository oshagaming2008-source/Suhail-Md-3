const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_08_08_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyMixcbiAgICAgICAgOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY5LFxuICAgICAgICA3NixcbiAgICAgICAgMTE3LFxuICAgICAgICA1MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA4LFxuICAgICAgICA3NixcbiAgICAgICAgOTcsXG4gICAgICAgIDEwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDc0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDcsXG4gICAgICAgIDE1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDksXG4gICAgICAgIDgxLFxuICAgICAgICA2NixcbiAgICAgICAgNixcbiAgICAgICAgODcsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDgsXG4gICAgICAgIDgyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTgzLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODksXG4gICAgICAgIDc0LFxuICAgICAgICAxNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDk5LFxuICAgICAgICAxODksXG4gICAgICAgIDkwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzksXG4gICAgICAgIDc0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTAsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDg2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDgxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjYsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTczLFxuICAgICAgICAzMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDgsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDQ5LFxuICAgICAgICA1LFxuICAgICAgICA4NCxcbiAgICAgICAgMjAyLFxuICAgICAgICA2OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTgsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMCxcbiAgICAgICAgNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1LFxuICAgICAgICA3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDQxLFxuICAgICAgICA0NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNCxcbiAgICAgICAgMjEwLFxuICAgICAgICA5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDY5LFxuICAgICAgICA5NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNixcbiAgICAgICAgMTczLFxuICAgICAgICAxODQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTg3LFxuICAgICAgICA3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODUsXG4gICAgICAgIDQ5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTgwLFxuICAgICAgICA0MyxcbiAgICAgICAgNTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJHeHNMVFUxWDIxL1pEYUJNK2gzYnZHemRhV2s1dmpOeGRSRWRxSFU2N09JPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJoMHljZm8wOVFSYVNCZDVyNDBqUUx3XCIsXG4gIFwicGhvbmVJZFwiOiBcImYwMWVmZTEyLWJlYjEtNDA5OC04NDhkLTg5NmJmMzIyOGI4NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDIsXG4gICAgICA2NCxcbiAgICAgIDIzMyxcbiAgICAgIDMwLFxuICAgICAgMjI0LFxuICAgICAgMTIyLFxuICAgICAgMTM3LFxuICAgICAgODYsXG4gICAgICAxNDQsXG4gICAgICA3NSxcbiAgICAgIDI0NyxcbiAgICAgIDE1MSxcbiAgICAgIDIwMCxcbiAgICAgIDgwLFxuICAgICAgMTc1LFxuICAgICAgMTU4LFxuICAgICAgNzUsXG4gICAgICAxNjksXG4gICAgICAxNDAsXG4gICAgICAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NyxcbiAgICAgIDE0MixcbiAgICAgIDE2NyxcbiAgICAgIDEzNSxcbiAgICAgIDExNSxcbiAgICAgIDE2MCxcbiAgICAgIDE5MyxcbiAgICAgIDE1NixcbiAgICAgIDQ3LFxuICAgICAgMTExLFxuICAgICAgMjUxLFxuICAgICAgMjMwLFxuICAgICAgMjksXG4gICAgICAxMDcsXG4gICAgICA4NSxcbiAgICAgIDEyNixcbiAgICAgIDM2LFxuICAgICAgNTUsXG4gICAgICAyMSxcbiAgICAgIDY5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTzd6MjR3REVPVzIvY1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI5N1FsbjQrNTlQb1c1aE1zQTZ5QXhPb0xQL1Zia3ZRN2NoU0V3WXErMGtNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlUwalF0MThyVzZIa0x2YnhiL2cwSXo0ZUdhNGx3a2ltcGlpK1lCKzhZdWNtdDNmY00yT0h6N1lSUzF6SGk0dU1UMzc3NXJ2QXlxSlVqVWcxSmRLWkJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIllEdG5pdXdhM3kyRkN2ejRqblRwOGRBOTMwM05yQXVUUnBhYWxZY3ZvZG4yUnlFalN5V2hoeDBiQk1Tb1ZVNDFGV002RmQ4MExpZlRLRkNXL2RYTWpBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NTM0ODU3ODE6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjgxMDg0NzIxOTE0MDQwOjhAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi4pqg77iP77iP4pqg77iP77iPXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc1MzQ4NTc4MTo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzU1Mjc0MDg5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR3p4XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHenguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJTYXZRTjFNOEZKMU1pKy9UUXF3SkVrZVZqZnU2SW5NUHArUVZKQXl6MmcwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgzMTk3Nzk2NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzU1Mjc0MDkwOTg2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

