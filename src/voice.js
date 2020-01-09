const voices = require('./consts/voices')
const user = require('./user')

const voice = {
    getVoiceSetting(userId){
        const voiceName = user.getProperty(userId).voice
        const htsvoicePath = voices.find(elem => elem.name == voiceName).path
        return {
            htsvoice: htsvoicePath
        }
    },
    getVoiceUsage(){
        let list = voices.map(elem =>{
            return elem.name + ': ' + elem.description
        })
        return list.join('\n')
    },
    getVoiceList(){
        const list = voices.map(elem =>{
            return {
                name: elem.name
            }
        })
        return list
    }
}

module.exports = voice