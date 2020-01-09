const fs = require('fs')
const path = require('path')

const settings = JSON.parse(fs.readFileSync(path.resolve(__dirname, './consts/user-settings.json'), 'utf8'))

const user = {
    getProperty(id){
        if(settings[id]){
            return settings[id]
        }
        else{
            return {}
        }
    },
    setProperty(id, setting){
        settings[id] = setting
        fs.writeFileSync(path.resolve(__dirname, './consts/user-settings.json'), JSON.stringify(settings))
    }
}

module.exports = user