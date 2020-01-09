const consts = require('./consts/const')

const commandInput = {
    get command(){
        return this._commandInput
    },
    set command(source){
        const input = source.split(/\s/)
        this._commandInput.command = input[0].substring(consts.PREFIX.length)
        this._commandInput.params = input.slice(1, input.length)
    },
    _commandInput:{
        command: '',
        params: []
    }
}

module.exports = commandInput