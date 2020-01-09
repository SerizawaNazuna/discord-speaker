const path = require('path')

const voices = [
    {
        name: 'dmei',
        path: path.resolve(__dirname, '../../node_modules/openjtalk/voice/mei/mei_normal.htsvoice'),
        description: 'いつもの声'
    },
    {
        name: 'amei',
        path: path.resolve(__dirname, '../../node_modules/openjtalk/voice/mei/mei_angry.htsvoice'),
        description: 'ちょっと怒っている声'
    },
    {
        name: 'smei',
        path: path.resolve(__dirname, '../../node_modules/openjtalk/voice/mei/mei_sad.htsvoice'),
        description: 'ちょっと悲しんでいる声'
    },
    {
        name: 'hmei',
        path: path.resolve(__dirname, '../../node_modules/openjtalk/voice/mei/mei_happy.htsvoice'),
        description: 'うれしそうな声'
    }
]



module.exports = voices