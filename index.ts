import { Client, Message, TextChannel, type OmitPartialGroupDMChannel } from "discord.js"
import dotenv from "dotenv"
import { containsObfuscatedSexualDeviation } from "./word/regex"

dotenv.config()

const client = new Client({
    intents: ["Guilds", "GuildMessages", "MessageContent", "DirectMessages"]
})

client.once("ready", () => console.log("Nexus is Ready"))

client.on("messageCreate", async (message: OmitPartialGroupDMChannel<Message<boolean>>) => {
    try{
        if(containsObfuscatedSexualDeviation(message.content)){
            await message.reply("Killing yourself bitch")
            await message.delete()
        }
    }
    catch (err){
        console.log(`[${new Date().toISOString()}] Error ${(err as Error).message}`)
    }
})

client.on("error", (error) => {
    console.log(`[${new Date().toISOString()}] Error ${(error).message}`)
})

client.login(process.env.DISCORD_TOKEN)