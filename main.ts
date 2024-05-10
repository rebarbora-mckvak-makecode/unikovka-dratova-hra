let dotknul_se_dratu = 0
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        dotknul_se_dratu = 0
        basic.clearScreen()
    }
    if (input.pinIsPressed(TouchPin.P1)) {
        if (dotknul_se_dratu == 0) {
            dotknul_se_dratu = 1
            basic.showIcon(IconNames.Skull)
            music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
        }
    }
    if (input.pinIsPressed(TouchPin.P2)) {
        if (dotknul_se_dratu == 0) {
            basic.showIcon(IconNames.Heart)
        }
    }
})
