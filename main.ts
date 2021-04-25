input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showNumber(input.compassHeading())
})
input.onButtonPressed(Button.AB, function () {
    input.calibrateCompass()
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("R: ")
    basic.showNumber(input.rotation(Rotation.Roll))
    basic.clearScreen()
    basic.showString("P: ")
    basic.showNumber(input.rotation(Rotation.Pitch))
    basic.clearScreen()
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.showIcon(IconNames.Surprised)
        basic.clearScreen()
    }
})
