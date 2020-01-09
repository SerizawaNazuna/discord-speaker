const commands = require('./consts/commands')
const help = require('./consts/help')
const vc = require('./voiceChannel')
const user = require('./user')
const voice = require('./voice')
const consts = require('./consts/const')

async function deal(commandObj, message){
    
    const command = commandObj.command
    switch(command){
        case commands.SUMMON.name:
            if(!message.member.voiceChannel){
                throw command + ' は、ボイスチャンネルに入ってから実行してくださいな！'
            }
            const channel = await message.member.voiceChannel.join()
            //接続したVCの情報を設定
            vc.currentVoiceChannel = channel
            const text = help.usage()
            await message.channel.send(text)
            break
        case commands.BYE.name:
            if(!message.member.voiceChannel){
                throw command + ' は、ボイスチャンネルに入ってから実行してくださいな！'
            }
            await message.member.voiceChannel.leave()
            //leaveするときは、接続していたVCの情報を消す必要がある
            delete vc.currentVoiceChannel
            break
        case commands.HELP.name:
            const helpMessage = help.usage()
            await message.channel.send(helpMessage)
            break
        case commands.SET_VOICE.name:
            const params = commandObj.params
            if(params.length != 1){
                const err = 'コマンドのあとには、設定したい音声ファイルの名前を設定してくださいまし。\n' 
                + '音声ファイルの名前は、' + consts.PREFIX + commands.LIST_VOICE.name + 'で、確認できますわ。'
                throw err
            }
            const voiceList = voice.getVoiceList()
            if(!voiceList.includes(params[0])){
                throw '音声ファイルの名前が間違っていますわよ。'
            }

            const setting = {
                voice: params[0]
            }
            
            user.setProperty(message.author.id, setting)
            break
        case commands.LIST_VOICE.name:
            const voiceUsage = voice.getVoiceUsage()
            await message.channel.send(voiceUsage)
            break
        default:
            throw '私が知らない機能ですわ'
    }
    return 
}

module.exports = deal