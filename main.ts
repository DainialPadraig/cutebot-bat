let distance = 0
basic.showLeds(`
    . . . . .
    . # . # .
    # . # . #
    . . . . .
    . . . . .
    `)
let seek = true
basic.forever(function () {
    distance = cuteBot.ultrasonic(cuteBot.SonarUnit.Inches)
    if (seek && distance > 20) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
        cuteBot.motors(30, -30)
    } else if (seek && distance > 1) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffff00)
        cuteBot.motors(30, 30)
    } else {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x00ff00)
        cuteBot.stopcar()
        seek = false
    }
})
