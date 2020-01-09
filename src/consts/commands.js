const commands = {
    HELP: {
        name: 'help',
        description: 'このヘルプが表示されますわ。'
    },
    SUMMON: {
        name: 'summon',
        description: '私がボイスチャットにお邪魔して、読み上げを開始しますわよ。'
    },
    BYE: {
        name: 'bye',
        description: '読み上げを終了しますわ。'
    },
    /*WORD_ADD: {
        name: 'wd',
        description: '[単語] [よみかた]の順序で、私に読み方を教えてくださいまし。'
    },
    WORD_REMOVE: {
        name: 'wr',
        description: '[単語]の読み方を辞書から削除しますわ。'
    },*/
    SET_VOICE: {
        name: 'vs',
        description: 'あなたのチャットの読み上げ音声を設定しますわ。'
    },
    LIST_VOICE: {
        name: 'vl',
        description: '設定可能な音声ファイルのリストを表示しますわ。'
    }
}

module.exports = commands