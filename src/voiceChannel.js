const vc = {
    get currentVoiceChannel(){
        return this._voiceChannel
    },
    set currentVoiceChannel(channel){
        this._voiceChannel = channel
    },
    _voiceChannel: {}
}

module.exports = vc