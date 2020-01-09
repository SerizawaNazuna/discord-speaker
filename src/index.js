const discord = require('discord.js')
const openjtalk = require('openjtalk')
const fs = require('fs')

const token = process.env.API_TOKEN
//接続中のVCの情報を管理
const vc = require('./voiceChannel')

const deal = require('./command')
const voice = require('./voice')
const consts = require('./consts/const')
const commandInput = require('./commandInput')

const client = new discord.Client()
//ログインが完了したときにログを残す
client.on('ready', ()=>{
    console.log('client is ready')
})

//テキストメッセージが書き込まれた際に受信するイベント
client.on('message', async (message)=>{
    if(message.author.bot){
        return
    }

    const text = message.content
    //コマンド入力されたらこっち
    if(text.startsWith(consts.PREFIX)){
        commandInput.command = text
        const commandObj = commandInput.command
        await deal(commandObj, message)
        .catch(async err =>{
            await message.channel.send(err)
        })
    }
    else{
        //botがVCに接続していないときは普通の文章に反応しない。
        if(!vc.currentVoiceChannel){
            return
        }
        const voiceSetting = voice.getVoiceSetting(message.author.id)
        const jtalk = new openjtalk(voiceSetting)
        jtalk._makeWav(text, consts.DEFAULT_PITCH, (err, result)=>{
            const dist = vc.currentVoiceChannel.playFile(result.wav)
            dist.on('end', ()=>{
                //読み上げ終わったら一時ファイルを消す
                fs.unlinkSync(result.wav)
            })
        })
    }
})

//botアカウントとしてdiscordにログインする
client.login(token)