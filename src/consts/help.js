const commands = require('./commands')
const prefix = '?'

const help = {
    greeting: 'ごきげんよう、団長さん！コマンドは次のものが使えますわよ。',
    usage: ()=>{
        let description = Object.keys(commands).map(element=>{
            return prefix + commands[element].name + ': ' + commands[element].description
        })
        const message = help.greeting + '\n\n' + description.join('\n')
        return message
    }
}
module.exports = help