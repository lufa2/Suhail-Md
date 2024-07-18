const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://lufa:lufa@cluster0.8av8jar.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Kolkata";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/lufa-official/Jessi-md/blob/main/Assets/50c65d1da9af7322cbbc79074ec7cc26.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʟᴜꜰᴀ-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94775688597,94715486555";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://github.com/lufa-official/Jessi-md/blob/main/Assets/50c65d1da9af7322cbbc79074ec7cc26.jpg?raw=true" // "text" // set Image/video urls here
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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_16_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDYzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTczLFxuICAgICAgICA1OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDUyLFxuICAgICAgICA2NixcbiAgICAgICAgNTgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTc4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjMwLFxuICAgICAgICA2NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDgxLFxuICAgICAgICAxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE1LFxuICAgICAgICA1MixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMixcbiAgICAgICAgMjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjExLFxuICAgICAgICAxOSxcbiAgICAgICAgMTAzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTUxLFxuICAgICAgICA3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI3LFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE5LFxuICAgICAgICA0MixcbiAgICAgICAgNzEsXG4gICAgICAgIDk2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjExLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjI3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDkzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTAzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTU3LFxuICAgICAgICA4NixcbiAgICAgICAgMTE5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDkyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDUxLFxuICAgICAgICA0NixcbiAgICAgICAgMTY1LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjIxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1LFxuICAgICAgICA2LFxuICAgICAgICAyMixcbiAgICAgICAgNzgsXG4gICAgICAgIDY3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTksXG4gICAgICAgIDc4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjMwLFxuICAgICAgICA4NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg4LFxuICAgICAgICA2OCxcbiAgICAgICAgODcsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjExLFxuICAgICAgICA5NixcbiAgICAgICAgMTQwLFxuICAgICAgICA3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTE0LFxuICAgICAgICA3NixcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiK2pBN3U1eENFVmduYnRNQW8vd2VGQm1vRURmNUpwbzdsMHpET2FqY0NJaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWDFDSHZGcFZRaml3M2prb2JoclB2d1wiLFxuICBcInBob25lSWRcIjogXCIzZTRiZjMyMi04ODgxLTQwZDEtYjgyNC0wZDg2ODg5MTRiOTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE4LFxuICAgICAgOTYsXG4gICAgICAxOTcsXG4gICAgICAxMDgsXG4gICAgICAxMTUsXG4gICAgICAyMDIsXG4gICAgICA0LFxuICAgICAgOCxcbiAgICAgIDE4MSxcbiAgICAgIDIzMixcbiAgICAgIDIxNSxcbiAgICAgIDExNixcbiAgICAgIDIzMixcbiAgICAgIDI4LFxuICAgICAgMTczLFxuICAgICAgMTczLFxuICAgICAgMjEyLFxuICAgICAgMjcsXG4gICAgICAzMyxcbiAgICAgIDg3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM4LFxuICAgICAgMTY1LFxuICAgICAgMjIxLFxuICAgICAgOTgsXG4gICAgICAxOTYsXG4gICAgICAxMzUsXG4gICAgICAyNDEsXG4gICAgICAyNCxcbiAgICAgIDg3LFxuICAgICAgODQsXG4gICAgICAyMDMsXG4gICAgICAxMjIsXG4gICAgICAyMzAsXG4gICAgICAyMzAsXG4gICAgICA5NCxcbiAgICAgIDE3MyxcbiAgICAgIDQwLFxuICAgICAgNDYsXG4gICAgICA4NCxcbiAgICAgIDE1N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDVjdWRlFFRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MTU0ODY1NTU6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJMSUwgV0FZTkVcIixcbiAgICBcImxpZFwiOiBcIjI0ODc4MjAzODAxMjA2NToyMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQR0ZrN0lIRVB5TzVMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjFINHM4MURHdi9CNzJLRmpQdjlxTjI5OEFkSVZ1TkZUS1pqa05kMnMzd0k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwianZLMmxrcVlmd0ZKN2x5T2U4ejNXbFJnRERHWFFZQTlpZkoyV3lkSmRvbVlNeWlmNjZQQXM3UGRQd1dDM0c2VlZtYXNmdUg4UzNFdFhsRzFkbXBURGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOGtMRm55L05zZjFDQzh2SkN5d2NlL1JodXhuOFd4R3Evc2l6L2tneS93S3VQRkZ3SERxa1Y2VEJmTXR4UzZXckl3cjArdmQ0aEt0U2ltZ0h2SHBmREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3MTU0ODY1NTU6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTMwNDk1OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJ2VlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQnZWLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRk1ZdENvR3dqVmwwRHMxOThvWUtXUzZzbkdQQ2NRNStnNmtLTlNTM0gwdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTg0MjE3ODM2LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʟᴜꜰᴀ-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • ʟᴜꜰᴀ-ᴍᴅ』*\n youtube.com/@XXXLUFAMODS"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ʟᴜꜰᴀ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "𝐗𝐗𝐗 𝐋𝐔𝐅𝐀",


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
